import type { BlogComment, ReactionsState } from "./types";

export interface BlogEngagementStore {
  getReactions(postSlug: string, visitorId: string): Promise<ReactionsState>;
  toggleReaction(
    postSlug: string,
    visitorId: string,
    emoji: string
  ): Promise<ReactionsState>;
  listComments(postSlug: string): Promise<BlogComment[]>;
  addComment(
    postSlug: string,
    authorName: string,
    body: string
  ): Promise<BlogComment>;
}
