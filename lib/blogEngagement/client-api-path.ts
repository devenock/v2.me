/** Query key for post slug on blog engagement API routes. */
export function blogEngagementPostQuery(postSlug: string): string {
  return `post=${encodeURIComponent(postSlug)}`;
}
