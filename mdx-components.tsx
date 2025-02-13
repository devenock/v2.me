import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import type { MDXComponents } from "mdx/types";
import { cn } from "./lib/utils";
import { ArrowRight } from "lucide-react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    em: ({ className, ...props }: any) => (
      <em className={cn("font-medium", className)} {...props} />
    ),
    strong: ({ className, ...props }: any) => (
      <strong className={cn("font-medium", className)} {...props} />
    ),
    a: ({ className, href, children, ...props }: any) => {
      const baseClass = "text-blue-500 hover:text-blue-700";
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
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
    },
    Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
      <table>
        <thead>
          <tr>
            {data.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ),
    blockquote: ({ className, ...props }: any) => (
      <blockquote
        className={cn(
          "ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700",
        )}
        {...props}
      />
    ),
    h1: ({ className, ...props }: any) => (
      <h1
        className={cn(
          "heading mt-2 scroll-m-[10px] text-4xl pt-12 mb-0 fade-in font-bold tracking-tight",
          className,
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: any) => (
      <h2
        className={cn(
          "heading mt-10 text-gray-800  mb-3 scroll-m-[10px] pb-1 text-[1.625rem] font-semibold tracking-tight first:mt-0",
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: any) => (
      <h3
        className={cn(
          "heading mt-16 scroll-m-[10px] text-gray-800  mb-3 text-[1.375rem] font-semibold tracking-tight",
          className,
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: any) => (
      <h4
        className={cn(
          "heading mt-8 scroll-m-[10px] text-[1.125rem] font-semibold tracking-tight",
          className,
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }: any) => (
      <h5
        className={cn(
          "heading mt-8 scroll-m-[10px] text-lg font-semibold tracking-tight",
          className,
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }: any) => (
      <h6
        className={cn(
          "heading mt-8 scroll-m-[10px] text-base font-semibold tracking-tight",
          className,
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }: any) => (
      <p
        className={cn(
          "text-gray-800 leading-snug [&:not(:first-child)]:mt-16",
          className,
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }: any) => (
      <ul
        className={cn(
          "my-6 ml-0 text-gray-800 list-disc pl-5 space-y-1",
          className,
        )}
        {...props}
        style={{ listStyle: "none" }}
      />
    ),
    ol: ({ className, ...props }: any) => (
      <ol
        className={cn(
          "my-6 ml-2 text-gray-800 pl-5 space-y-2 list-decimal",
          className,
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }: any) => (
      <li
        className={cn(
          "custom-white m-0 mt-2 pl-1 text-blue-500 hover:text-blue-70 flex items-start gap-2 p-0",
          className,
        )}
        {...props}
      >
        <div className="w-[16px]">
          <ArrowRight size={16} color="blue" style={{ marginTop: "7px" }} />
        </div>

        <div>{props.children}</div>
      </li>
    ),
    hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
    table: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn("w-full", className)} {...props} />
      </div>
    ),
    tr: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr
        className={cn("even:bg-muted m-0 border-t p-0", className)}
        {...props}
      />
    ),
    th: ({ className, ...props }: any) => (
      <th
        className={cn(
          "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
          className,
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: any) => (
      <td
        className={cn(
          "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
          className,
        )}
        {...props}
      />
    ),

    ...components,
  };
}
