import { randomUUID } from "crypto";
import { Pool } from "pg";
import type { BlogComment, ReactionsState } from "./types";
import type { BlogEngagementStore } from "./store-interface";

let pool: Pool | null = null;

function getPool(): Pool {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }
  if (!pool) {
    pool = new Pool({
      connectionString: url,
      max: Number(process.env.PG_POOL_MAX ?? 5),
    });
  }
  return pool;
}

export function createPostgresBlogEngagementStore(): BlogEngagementStore {
  async function loadReactions(
    postSlug: string,
    visitorId: string
  ): Promise<ReactionsState> {
    const p = getPool();
    const countRes = await p.query<{ emoji: string; c: number }>(
      `SELECT emoji, COUNT(*)::int AS c FROM blog_reactions WHERE post_slug = $1 GROUP BY emoji`,
      [postSlug]
    );
    const mineRes = await p.query<{ emoji: string }>(
      `SELECT emoji FROM blog_reactions WHERE post_slug = $1 AND visitor_id = $2`,
      [postSlug, visitorId]
    );
    const counts: Record<string, number> = {};
    for (const row of countRes.rows) {
      counts[row.emoji] = row.c;
    }
    return { counts, mine: mineRes.rows.map((r) => r.emoji) };
  }

  return {
    getReactions: loadReactions,

    async toggleReaction(postSlug, visitorId, emoji) {
      const p = getPool();
      const del = await p.query(
        `DELETE FROM blog_reactions WHERE post_slug = $1 AND visitor_id = $2 AND emoji = $3`,
        [postSlug, visitorId, emoji]
      );
      if ((del.rowCount ?? 0) === 0) {
        await p.query(
          `INSERT INTO blog_reactions (post_slug, visitor_id, emoji) VALUES ($1, $2, $3)`,
          [postSlug, visitorId, emoji]
        );
      }
      return loadReactions(postSlug, visitorId);
    },

    async listComments(postSlug) {
      const p = getPool();
      const res = await p.query<{
        id: string;
        post_slug: string;
        author_name: string;
        body: string;
        created_at: Date;
      }>(
        `SELECT id, post_slug, author_name, body, created_at FROM blog_comments WHERE post_slug = $1 ORDER BY created_at DESC LIMIT 100`,
        [postSlug]
      );
      return res.rows.map((row) => ({
        id: row.id,
        postSlug: row.post_slug,
        authorName: row.author_name,
        body: row.body,
        createdAt:
          row.created_at instanceof Date
            ? row.created_at.toISOString()
            : String(row.created_at),
      }));
    },

    async addComment(postSlug, authorName, body) {
      const p = getPool();
      const id = randomUUID();
      const res = await p.query<{
        id: string;
        post_slug: string;
        author_name: string;
        body: string;
        created_at: Date;
      }>(
        `INSERT INTO blog_comments (id, post_slug, author_name, body) VALUES ($1, $2, $3, $4)
         RETURNING id, post_slug, author_name, body, created_at`,
        [id, postSlug, authorName, body]
      );
      const row = res.rows[0];
      if (!row) throw new Error("insert comment failed");
      return {
        id: row.id,
        postSlug: row.post_slug,
        authorName: row.author_name,
        body: row.body,
        createdAt:
          row.created_at instanceof Date
            ? row.created_at.toISOString()
            : String(row.created_at),
      } satisfies BlogComment;
    },
  };
}
