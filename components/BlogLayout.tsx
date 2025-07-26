"use client";

import React from 'react';
import { BlogInteractions } from './BlogInteractions';

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  date: string;
  author?: string;
  slug: string;
}

export function BlogLayout({ children, title, date, author, slug }: BlogLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </h1>
        <div className="mt-4 flex items-center space-x-4 text-gray-500">
          {author && (
            <div className="flex items-center">
              <span className="text-sm">By {author}</span>
            </div>
          )}
          <time dateTime={date} className="text-sm">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {children}
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <BlogInteractions slug={slug} />
      </div>
    </article>
  );
} 