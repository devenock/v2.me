import { getAllBlogs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import remarkGfm from 'remark-gfm';
import { highlight } from 'sugar-high';
import React from 'react';
import { BlogPostHeader } from "@/components/BlogPostHeader";
import { MdxPreWithCopy } from "@/components/MdxPreWithCopy";
import { MdxTerm } from "@/components/MdxTerm";
import { blogMdxProseClassName } from "@/lib/blogMdxProse";
import { cn } from "@/lib/utils";
import { estimateReadingMinutesFromMarkdown } from "@/lib/readingTime";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const linkClass =
  "font-medium text-blue-600 underline underline-offset-4 transition-colors hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-300";

const components = {
  Term: MdxTerm,
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-semibold text-foreground", className)} {...props} />
  ),
  em: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className={cn("italic text-muted-foreground", className)} {...props} />
  ),
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground"
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },
  pre: ({ className, children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <MdxPreWithCopy className={className} {...props}>
      {children}
    </MdxPreWithCopy>
  ),
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-8 mb-4 scroll-m-20 text-3xl font-bold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-8 mb-2 scroll-mt-20 text-xl font-semibold tracking-tight text-foreground sm:text-2xl",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-6 mb-2 scroll-mt-20 text-lg font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "leading-relaxed text-muted-foreground [&:not(:first-child)]:mt-3",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className={cn(linkClass, className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        "my-3 ml-6 list-disc space-y-1 text-muted-foreground marker:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        "my-3 ml-6 list-decimal space-y-1 text-muted-foreground marker:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mt-0.5 leading-relaxed text-muted-foreground", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-4 border-l-4 border-sky-500 bg-sky-500/10 py-2 pl-4 text-muted-foreground not-italic dark:border-sky-400 dark:bg-sky-950/40",
        className
      )}
      {...props}
    />
  ),
  table: ({ className, children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
      <table
        className={cn(
          "w-full min-w-[36rem] border-collapse text-left text-sm text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className={cn("border-b border-border bg-muted/50", className)} {...props} />
  ),
  tbody: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className={cn("divide-y divide-border", className)} {...props} />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("border-b border-border/60 last:border-0", className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className={cn("px-4 py-3 align-top text-muted-foreground", className)} {...props} />
  ),
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className={cn("my-5 border-t border-border", className)} {...props} />
  ),
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogs = await getAllBlogs();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const readingMinutes = estimateReadingMinutesFromMarkdown(blog.content);

  const mdxSource = await serialize(blog.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      development: process.env.NODE_ENV === 'development',
    },
  });

  return (
    <article>
      <BlogPostHeader
        title={blog.title}
        date={blog.date}
        minutes={readingMinutes}
      />

      <div className={blogMdxProseClassName}>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </article>
  );
}
