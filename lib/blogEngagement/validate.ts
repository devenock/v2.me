import { ALLOWED_REACTION_EMOJIS } from "./types";

/** Slug from URL: lowercase path segments, alphanumeric + slashes + hyphen + underscore */
const SLUG_PATTERN = /^[a-z0-9/_-]+$/i;

export function normalizePostSlug(parts: string[]): string | null {
  const slug = parts.map((p) => decodeURIComponent(p)).join("/").replace(/\/+/g, "/").replace(/^\/|\/$/g, "");
  if (!slug || slug.length > 200 || !SLUG_PATTERN.test(slug)) return null;
  return slug;
}

export function isAllowedEmoji(emoji: string): boolean {
  return (ALLOWED_REACTION_EMOJIS as readonly string[]).includes(emoji);
}

export function sanitizeAuthorName(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const s = raw.trim();
  if (s.length < 1 || s.length > 80) return null;
  return s;
}

export function sanitizeCommentBody(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const s = raw.trim().replace(/\r\n/g, "\n");
  if (s.length < 1 || s.length > 2000) return null;
  return s;
}
