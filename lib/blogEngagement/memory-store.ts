import { randomUUID } from "crypto";
import type { BlogComment } from "./types";
import type { BlogEngagementStore } from "./store-interface";

type ReactionRow = { postSlug: string; visitorId: string; emoji: string };

/**
 * In-process store for development or deployments without DATABASE_URL.
 * Data is lost on server restart and is not shared across serverless instances.
 */
export function createMemoryBlogEngagementStore(): BlogEngagementStore {
  const reactions: ReactionRow[] = [];
  const comments: BlogComment[] = [];

  function countsFor(slug: string): Record<string, number> {
    const map: Record<string, number> = {};
    for (const r of reactions) {
      if (r.postSlug !== slug) continue;
      map[r.emoji] = (map[r.emoji] ?? 0) + 1;
    }
    return map;
  }

  function mineFor(slug: string, visitorId: string): string[] {
    const set = new Set<string>();
    for (const r of reactions) {
      if (r.postSlug === slug && r.visitorId === visitorId) set.add(r.emoji);
    }
    return [...set];
  }

  return {
    async getReactions(postSlug, visitorId) {
      return { counts: countsFor(postSlug), mine: mineFor(postSlug, visitorId) };
    },

    async toggleReaction(postSlug, visitorId, emoji) {
      const idx = reactions.findIndex(
        (r) =>
          r.postSlug === postSlug &&
          r.visitorId === visitorId &&
          r.emoji === emoji
      );
      if (idx >= 0) reactions.splice(idx, 1);
      else reactions.push({ postSlug, visitorId, emoji });
      return { counts: countsFor(postSlug), mine: mineFor(postSlug, visitorId) };
    },

    async listComments(postSlug) {
      return comments
        .filter((c) => c.postSlug === postSlug)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    },

    async addComment(postSlug, authorName, body) {
      const row: BlogComment = {
        id: randomUUID(),
        postSlug,
        authorName,
        body,
        createdAt: new Date().toISOString(),
      };
      comments.unshift(row);
      return row;
    },
  };
}
