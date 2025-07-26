"use client";

import React from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';
import { cn } from '@/lib/utils';

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-8 mb-4 text-3xl font-bold tracking-tight text-gray-900",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-6 mb-3 text-xl font-semibold tracking-tight text-gray-900",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-6 mb-2 text-lg font-semibold tracking-tight text-gray-900",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 text-gray-700 [&:not(:first-child)]:mt-4", className)}
      {...props}
    />
  ),
  a: ({ className, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http');
    const Component = isExternal ? 'a' : Link;
    const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
      <Component
        href={href || '#'}
        className={cn(
          "text-blue-600 hover:text-blue-800 underline underline-offset-4",
          className
        )}
        {...externalProps}
        {...props}
      />
    );
  },
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn("my-4 ml-6 list-disc text-gray-700 space-y-1", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn("my-4 ml-6 list-decimal text-gray-700 space-y-1", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mt-1 text-gray-700", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-4 border-l-4 border-blue-500 bg-blue-50 pl-4 py-2 text-gray-700 italic",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        className={cn(
          "rounded-md bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-900",
          className
        )}
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "my-4 overflow-x-auto rounded-lg bg-gray-900 p-4",
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-6 border-t border-gray-200" {...props} />
  ),
};

export default components; 