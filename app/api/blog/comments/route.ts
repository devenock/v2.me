import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getBlogEngagementStore } from "@/lib/blogEngagement/get-store";
import {
  normalizePostSlugParam,
  sanitizeAuthorName,
  sanitizeCommentBody,
} from "@/lib/blogEngagement/validate";
import {
  VISITOR_COOKIE,
  newVisitorId,
  parseVisitorId,
  setVisitorCookie,
} from "@/lib/blogEngagement/visitor-cookie";

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

  try {
    const store = getBlogEngagementStore();
    const comments = await store.listComments(postSlug);
    return NextResponse.json({ comments });
  } catch (err) {
    console.error("[blog comments GET]", err);
    return NextResponse.json(
      { error: "Could not load comments." },
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

  const authorName =
    typeof body === "object" && body !== null && "authorName" in body
      ? (body as { authorName: unknown }).authorName
      : undefined;
  const commentBody =
    typeof body === "object" && body !== null && "body" in body
      ? (body as { body: unknown }).body
      : undefined;

  const name = sanitizeAuthorName(authorName);
  const text = sanitizeCommentBody(commentBody);
  if (!name || !text) {
    return NextResponse.json(
      { error: "authorName (1–80 chars) and body (1–2000 chars) required" },
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
    const comment = await store.addComment(postSlug, name, text);
    const res = NextResponse.json({ comment });
    if (cookieWasMissing) setVisitorCookie(res, visitorId);
    return res;
  } catch (err) {
    console.error("[blog comments POST]", err);
    return NextResponse.json(
      { error: "Could not save comment." },
      { status: 503 }
    );
  }
}
