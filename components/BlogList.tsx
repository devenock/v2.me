"use client";

import React, { useState } from "react";
import Link from "next/link";
import { format, isValid, parseISO } from "date-fns";

interface Blog {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

interface BlogListProps {
  blogs: Blog[];
}

function formatBlogDate(date: string) {
  const parsed = parseISO(date);
  if (isValid(parsed)) return format(parsed, "MMM d, yyyy");
  const fallback = new Date(date);
  return isValid(fallback) ? format(fallback, "MMM d, yyyy") : date;
}

export function BlogList({ blogs }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...new Set(blogs.map((blog) => blog.category))];

  const filteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors
              ${
                selectedCategory === category
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.slug}
            className="rounded-lg border border-border/60 bg-card/30 transition-all duration-200 hover:bg-card/50 hover:shadow-sm"
          >
            <Link href={`/blog/${blog.slug}`} className="group block p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                  {blog.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {formatBlogDate(blog.date)}
                </span>
              </div>
              <h2 className="mb-1 text-lg font-semibold text-foreground transition-colors duration-200">
                {blog.title}
              </h2>
              <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">
                {blog.description}
              </p>
              <div className="flex items-center text-xs font-medium text-foreground/80">
                Read more
                <svg
                  className="ml-1 h-3 w-3 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
