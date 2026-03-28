-- Run once against your Postgres database when using DATABASE_URL for blog reactions/comments.
-- Example: psql "$DATABASE_URL" -f scripts/blog-engagement-schema.sql

CREATE TABLE IF NOT EXISTS blog_reactions (
  id BIGSERIAL PRIMARY KEY,
  post_slug TEXT NOT NULL,
  visitor_id TEXT NOT NULL,
  emoji TEXT NOT NULL CHECK (char_length(emoji) <= 16),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (post_slug, visitor_id, emoji)
);

CREATE INDEX IF NOT EXISTS idx_blog_reactions_post_slug ON blog_reactions (post_slug);

CREATE TABLE IF NOT EXISTS blog_comments (
  id TEXT PRIMARY KEY,
  post_slug TEXT NOT NULL,
  author_name TEXT NOT NULL CHECK (char_length(author_name) <= 80),
  body TEXT NOT NULL CHECK (char_length(body) <= 2000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_blog_comments_post_slug ON blog_comments (post_slug);
