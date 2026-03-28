import { randomUUID } from "crypto";
import type { NextResponse } from "next/server";

export const VISITOR_COOKIE = "blog_engagement_vid" as const;

export function parseVisitorId(raw: string | undefined): string | null {
  if (!raw || raw.length > 64) return null;
  if (!/^[0-9a-f-]{36}$/i.test(raw)) return null;
  return raw;
}

export function setVisitorCookie(response: NextResponse, visitorId: string) {
  response.cookies.set(VISITOR_COOKIE, visitorId, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export function newVisitorId(): string {
  return randomUUID();
}
