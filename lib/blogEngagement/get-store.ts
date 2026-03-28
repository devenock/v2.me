import { createMemoryBlogEngagementStore } from "./memory-store";
import { createPostgresBlogEngagementStore } from "./postgres-store";
import type { BlogEngagementStore } from "./store-interface";

let cached: BlogEngagementStore | null = null;

/**
 * Uses Postgres when DATABASE_URL is set (run scripts/blog-engagement-schema.sql first).
 * Otherwise uses an in-memory store (fine for local dev; not durable in serverless).
 */
export function getBlogEngagementStore(): BlogEngagementStore {
  if (cached) return cached;
  if (process.env.DATABASE_URL?.trim()) {
    cached = createPostgresBlogEngagementStore();
  } else {
    cached = createMemoryBlogEngagementStore();
  }
  return cached;
}
