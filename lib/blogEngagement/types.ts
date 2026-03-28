/** Allowed emoji reactions (server validates against this list). */
export const ALLOWED_REACTION_EMOJIS = [
  "👍",
  "❤️",
  "🔥",
  "🎉",
  "🤔",
  "👏",
] as const;

export type ReactionEmoji = (typeof ALLOWED_REACTION_EMOJIS)[number];

export type ReactionCounts = Record<string, number>;

export type BlogComment = {
  id: string;
  postSlug: string;
  authorName: string;
  body: string;
  createdAt: string;
};

export type ReactionsState = {
  counts: ReactionCounts;
  /** Emojis this visitor has toggled on for this post */
  mine: string[];
};
