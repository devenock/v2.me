/**
 * Build `/blog` URLs for category filter + pagination (share between list and pager).
 */
export function blogListHref(page: number, category: string): string {
  const params = new URLSearchParams();
  if (category !== "all") params.set("category", category);
  if (page > 1) params.set("page", String(page));
  const q = params.toString();
  return q ? `/blog?${q}` : "/blog";
}
