import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getBlogEngagementStore } from "@/lib/blogEngagement/get-store";
import {
  isAllowedEmoji,
  normalizePostSlugParam,
} from "@/lib/blogEngagement/validate";
import {
  VISITOR_COOKIE,
  newVisitorId,
  parseVisitorId,
  setVisitorCookie,
} from "@/lib/blogEngagement/visitor-cookie";

function jsonWithVisitor(
  data: unknown,
  visitorId: string,
  cookieWasMissing: boolean
) {
  const res = NextResponse.json(data);
  if (cookieWasMissing) setVisitorCookie(res, visitorId);
  return res;
}

export async function GET(request: NextRequest) {
  const postSlug = normalizePostSlugParam(
    request.nextUrl.searchParams.get("post")
  );
  if (!postSlug) {
    return NextResponse.json(
      { error: "Missing or invalid post query (?post=)" },
      { status: 400 }
    );
  }

  const cookieStore = await cookies();
  const raw = cookieStore.get(VISITOR_COOKIE)?.value;
  const existing = parseVisitorId(raw);
  const visitorId = existing ?? newVisitorId();
  const cookieWasMissing = !existing;

  try {
    const store = getBlogEngagementStore();
    const state = await store.getReactions(postSlug, visitorId);
    return jsonWithVisitor(state, visitorId, cookieWasMissing);
  } catch (err) {
    console.error("[blog reactions GET]", err);
    return NextResponse.json(
      {
        error:
          "Could not load reactions. If using Postgres, ensure tables exist (see scripts/blog-engagement-schema.sql).",
      },
      { status: 503 }
    );
  }
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const postRaw =
    typeof body === "object" && body !== null && "postSlug" in body
      ? String((body as { postSlug: unknown }).postSlug)
      : "";
  const postSlug = normalizePostSlugParam(postRaw);
  if (!postSlug) {
    return NextResponse.json(
      { error: "Invalid or missing postSlug in body" },
      { status: 400 }
    );
  }

  const emoji =
    typeof body === "object" && body !== null && "emoji" in body
      ? String((body as { emoji: unknown }).emoji)
      : "";

  if (!isAllowedEmoji(emoji)) {
    return NextResponse.json({ error: "Unsupported emoji" }, { status: 400 });
  }

  const cookieStore = await cookies();
  const raw = cookieStore.get(VISITOR_COOKIE)?.value;
  const existing = parseVisitorId(raw);
  const visitorId = existing ?? newVisitorId();
  const cookieWasMissing = !existing;

  try {
    const store = getBlogEngagementStore();
    const state = await store.toggleReaction(postSlug, visitorId, emoji);
    return jsonWithVisitor(state, visitorId, cookieWasMissing);
  } catch (err) {
    console.error("[blog reactions POST]", err);
    return NextResponse.json(
      { error: "Could not save reaction." },
      { status: 503 }
    );
  }
}
