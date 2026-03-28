/** Build `/api/blog/<encoded-slug>/…` for catch-all route segments. */
export function blogEngagementApiBase(postSlug: string): string {
  const encoded = postSlug
    .split("/")
    .filter(Boolean)
    .map((s) => encodeURIComponent(s))
    .join("/");
  return `/api/blog/${encoded}`;
}
