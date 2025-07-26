"use client";

import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";

const components = {
  em: ({ className, ...props }: any) => (
    <em className={cn("font-medium italic text-gray-700", className)} {...props} />
  ),
  strong: ({ className, ...props }: any) => (
    <strong className={cn("font-bold text-gray-900", className)} {...props} />
  ),
  a: ({ className, href, children, ...props }: any) => {
    const baseClass =
      "text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 underline-offset-4 hover:underline";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={cn(baseClass, className)} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={cn(baseClass, className)} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClass, className)}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        className="rounded-md bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-900"
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },
  pre: ({ className, children, ...props }: any) => {
    const [copied, setCopied] = React.useState(false);
    const codeRef = React.useRef<HTMLPreElement>(null);

    const copyToClipboard = async () => {
      if (codeRef.current) {
        const code = codeRef.current.textContent || '';
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    };

    return (
      <div className="relative group">
        <pre
          ref={codeRef}
          className={cn(
            "mt-6 mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4",
            className
          )}
          {...props}
        >
          {children}
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    );
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-300 bg-gray-50">
            {data.headers.map((header, index) => (
              <th key={index} className="px-4 py-2 text-left font-semibold text-gray-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className="border-b border-gray-200">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  blockquote: ({ className, ...props }: any) => (
    <blockquote
      className={cn(
        "mt-6 border-l-4 border-blue-500 bg-blue-50 pl-4 py-2 text-gray-700 italic",
        className
      )}
      {...props}
    />
  ),
  h1: ({ className, ...props }: any) => (
    <h1
      className={cn(
        "mt-8 mb-6 text-4xl font-bold tracking-tight text-gray-900 scroll-m-20",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={cn(
        "mt-10 mb-4 text-3xl font-semibold tracking-tight text-gray-900 scroll-m-20",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: any) => (
    <h3
      className={cn(
        "mt-8 mb-3 text-2xl font-semibold tracking-tight text-gray-900 scroll-m-20",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: any) => (
    <h4
      className={cn(
        "mt-6 mb-2 text-xl font-semibold tracking-tight text-gray-900 scroll-m-20",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: any) => (
    <h5
      className={cn(
        "mt-6 mb-2 text-lg font-semibold tracking-tight text-gray-900 scroll-m-20",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: any) => (
    <h6
      className={cn(
        "mt-6 mb-2 text-base font-semibold tracking-tight text-gray-900 scroll-m-20",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: any) => (
    <p
      className={cn(
        "leading-7 text-gray-700 [&:not(:first-child)]:mt-6",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul
      className={cn(
        "my-6 ml-6 list-disc text-gray-700 space-y-2",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: any) => (
    <ol
      className={cn(
        "my-6 ml-6 list-decimal text-gray-700 space-y-2",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: any) => (
    <li
      className={cn(
        "mt-2 text-gray-700",
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-8 border-t border-gray-200" {...props} />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...components,
  };
} 