import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import type { MDXComponents } from "mdx/types";
import { cn } from "./lib/utils";
import { MdxPreWithCopy } from "./components/MdxPreWithCopy";
import { MdxTerm } from "./components/MdxTerm";
import { blogMdxProseClassName } from "./lib/blogMdxProse";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <div className={blogMdxProseClassName}>{children}</div>
    ),
    Term: MdxTerm,
    em: ({ className, ...props }: any) => (
      <em className={cn("italic text-gray-800", className)} {...props} />
    ),
    strong: ({ className, ...props }: any) => (
      <strong className={cn("font-semibold text-gray-900", className)} {...props} />
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
    pre: ({ className, children, ...props }: any) => (
      <MdxPreWithCopy className={className} {...props}>
        {children}
      </MdxPreWithCopy>
    ),
    Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
      <div className="my-4 w-full overflow-x-auto">
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
          "my-4 border-l-4 border-sky-400 bg-sky-50/50 pl-4 py-2 text-gray-700 not-italic",
          className
        )}
        {...props}
      />
    ),
    h1: ({ className, ...props }: any) => (
      <h1
        className={cn(
          "mt-6 mb-4 text-3xl font-bold tracking-tight text-gray-900 scroll-m-20",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: any) => (
      <h2
        className={cn(
          "mt-8 mb-2 text-xl font-semibold tracking-tight text-gray-900 scroll-mt-20 sm:text-2xl",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: any) => (
      <h3
        className={cn(
          "mt-6 mb-2 text-lg font-semibold tracking-tight text-gray-900 scroll-mt-20",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: any) => (
      <h4
        className={cn(
          "mt-4 mb-2 text-lg font-semibold tracking-tight text-gray-900 scroll-m-20",
          className
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }: any) => (
      <h5
        className={cn(
          "mt-4 mb-2 text-base font-semibold tracking-tight text-gray-900 scroll-m-20",
          className
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }: any) => (
      <h6
        className={cn(
          "mt-4 mb-2 text-sm font-semibold tracking-tight text-gray-900 scroll-m-20",
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }: any) => (
      <p
        className={cn(
          "leading-relaxed text-gray-700 [&:not(:first-child)]:mt-3",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }: any) => (
      <ul
        className={cn(
          "my-3 ml-6 list-disc text-gray-700 space-y-1",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }: any) => (
      <ol
        className={cn(
          "my-3 ml-6 list-decimal text-gray-700 space-y-1",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }: any) => (
      <li
        className={cn(
          "mt-0.5 leading-relaxed text-gray-700",
          className
        )}
        {...props}
      />
    ),
    table: ({ className, children, ...props }: any) => (
      <div className="my-6 w-full overflow-x-auto rounded-lg border border-gray-200">
        <table
          className={cn(
            "w-full min-w-[36rem] border-collapse text-left text-sm text-gray-700",
            className
          )}
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ className, ...props }: any) => (
      <thead className={cn("border-b border-gray-200 bg-gray-50", className)} {...props} />
    ),
    tbody: ({ className, ...props }: any) => (
      <tbody className={cn("divide-y divide-gray-200", className)} {...props} />
    ),
    tr: ({ className, ...props }: any) => (
      <tr className={cn("border-b border-gray-100 last:border-0", className)} {...props} />
    ),
    th: ({ className, ...props }: any) => (
      <th
        className={cn(
          "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: any) => (
      <td className={cn("px-4 py-3 align-top text-gray-800", className)} {...props} />
    ),
    hr: ({ ...props }) => (
      <hr className="my-5 border-t border-gray-200" {...props} />
    ),
    ...components,
  };
}
