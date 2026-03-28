"use client";

import { format, isValid, parseISO } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import type { BlogComment } from "@/lib/blogEngagement/types";
import { blogEngagementApiBase } from "@/lib/blogEngagement/client-api-path";
import { cn } from "@/lib/utils";

type Props = { postSlug: string };

function formatWhen(iso: string) {
  const p = parseISO(iso);
  return isValid(p) ? format(p, "MMM d, yyyy · HH:mm") : iso;
}

export function BlogComments({ postSlug }: Props) {
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const base = blogEngagementApiBase(postSlug);

  const load = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${base}/comments`, { credentials: "include" });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error((j as { error?: string }).error ?? res.statusText);
      }
      const json = (await res.json()) as { comments: BlogComment[] };
      setComments(json.comments ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load comments");
    } finally {
      setLoading(false);
    }
  }, [base]);

  useEffect(() => {
    load();
  }, [load]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`${base}/comments`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ authorName, body }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error((j as { error?: string }).error ?? res.statusText);
      }
      const json = (await res.json()) as { comment: BlogComment };
      setComments((prev) => [json.comment, ...prev]);
      setBody("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not post comment");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Comments
      </h2>

      <form
        onSubmit={onSubmit}
        className="mb-8 space-y-3 rounded-lg border border-border bg-card/30 p-4"
      >
        <div>
          <label htmlFor="comment-name" className="sr-only">
            Your name
          </label>
          <input
            id="comment-name"
            name="authorName"
            type="text"
            autoComplete="nickname"
            maxLength={80}
            required
            placeholder="Your name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="comment-body" className="sr-only">
            Comment
          </label>
          <textarea
            id="comment-body"
            name="body"
            required
            rows={4}
            maxLength={2000}
            placeholder="Write a comment…"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className={cn(
            "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity",
            submitting && "cursor-not-allowed opacity-60"
          )}
        >
          {submitting ? "Posting…" : "Post comment"}
        </button>
      </form>

      {error && (
        <p className="mb-4 text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading comments…</p>
      ) : comments.length === 0 ? (
        <p className="text-sm text-muted-foreground">No comments yet.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((c) => (
            <li
              key={c.id}
              className="rounded-lg border border-border/80 bg-card/20 px-4 py-3"
            >
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-medium text-foreground">{c.authorName}</span>
                <time
                  className="text-xs text-muted-foreground"
                  dateTime={c.createdAt}
                >
                  {formatWhen(c.createdAt)}
                </time>
              </div>
              <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
