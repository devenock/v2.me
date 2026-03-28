"use client";

import { useCallback, useEffect, useState } from "react";
import { ALLOWED_REACTION_EMOJIS } from "@/lib/blogEngagement/types";
import { blogEngagementApiBase } from "@/lib/blogEngagement/client-api-path";
import { cn } from "@/lib/utils";

type Props = { postSlug: string };

type State = {
  counts: Record<string, number>;
  mine: string[];
};

export function BlogReactions({ postSlug }: Props) {
  const [data, setData] = useState<State | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<string | null>(null);

  const base = blogEngagementApiBase(postSlug);

  const load = useCallback(async () => {
    setError(null);
    try {
      const res = await fetch(`${base}/reactions`, { credentials: "include" });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error((j as { error?: string }).error ?? res.statusText);
      }
      const json = (await res.json()) as State;
      setData(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load reactions");
    }
  }, [base]);

  useEffect(() => {
    load();
  }, [load]);

  const toggle = async (emoji: string) => {
    setPending(emoji);
    setError(null);
    try {
      const res = await fetch(`${base}/reactions`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error((j as { error?: string }).error ?? res.statusText);
      }
      const json = (await res.json()) as State;
      setData(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not update reaction");
    } finally {
      setPending(null);
    }
  };

  return (
    <div className="mb-10">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Reactions
      </h2>
      {error && (
        <p className="mb-2 text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {ALLOWED_REACTION_EMOJIS.map((emoji) => {
          const count = data?.counts[emoji] ?? 0;
          const active = data?.mine.includes(emoji) ?? false;
          return (
            <button
              key={emoji}
              type="button"
              onClick={() => toggle(emoji)}
              disabled={pending !== null}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors",
                active
                  ? "border-primary bg-primary/15 text-foreground"
                  : "border-border bg-card/50 text-muted-foreground hover:border-border hover:bg-muted/50 hover:text-foreground",
                pending === emoji && "opacity-60"
              )}
              aria-pressed={active}
              aria-label={`React with ${emoji}${count ? `, ${count} reactions` : ""}`}
            >
              <span className="text-lg leading-none" aria-hidden>
                {emoji}
              </span>
              {count > 0 && (
                <span className="tabular-nums text-xs font-medium">{count}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
