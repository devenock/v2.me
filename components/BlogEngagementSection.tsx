"use client";

import { usePathname } from "next/navigation";
import { BlogComments } from "@/components/BlogComments";
import { BlogReactions } from "@/components/BlogReactions";

/**
 * Renders reactions + comments on individual post URLs under `/blog/...`.
 * Hidden on `/blog` index and non-blog routes.
 */
export function BlogEngagementSection() {
  const pathname = usePathname();
  const postSlug = postSlugFromPath(pathname);
  if (!postSlug) return null;

  return (
    <section
      className="mt-12 border-t border-border pt-10"
      aria-label="Reactions and comments"
    >
      <BlogReactions postSlug={postSlug} />
      <BlogComments postSlug={postSlug} />
    </section>
  );
}

export function postSlugFromPath(pathname: string): string | null {
  if (!pathname.startsWith("/blog/")) return null;
  const rest = pathname.slice("/blog/".length).split("?")[0];
  if (!rest) return null;
  return rest;
}
