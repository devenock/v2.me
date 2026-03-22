import { getAllBlogs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import remarkGfm from 'remark-gfm';
import { highlight } from 'sugar-high';
import React from 'react';
import { BlogPostHeader } from "@/components/BlogPostHeader";
import { MdxPreWithCopy } from "@/components/MdxPreWithCopy";
import { estimateReadingMinutesFromMarkdown } from "@/lib/readingTime";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const components = {
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        className="rounded-md bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-900"
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
      className={`mt-8 mb-4 text-3xl font-bold tracking-tight text-gray-900 ${className || ''}`}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={`mt-8 mb-4 text-2xl font-semibold tracking-tight text-gray-900 ${className || ''}`}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={`mt-6 mb-3 text-xl font-semibold tracking-tight text-gray-900 ${className || ''}`}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={`leading-7 text-gray-700 [&:not(:first-child)]:mt-4 ${className || ''}`}
      {...props}
    />
  ),
  a: ({ className, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className={`text-blue-600 hover:text-blue-800 underline underline-offset-4 ${className || ''}`}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={`my-4 ml-6 list-disc text-gray-700 space-y-1 ${className || ''}`}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={`my-4 ml-6 list-decimal text-gray-700 space-y-1 ${className || ''}`}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={`mt-1 text-gray-700 ${className || ''}`} {...props} />
  ),
  blockquote: ({ className, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={`mt-4 border-l-4 border-blue-500 bg-blue-50 pl-4 py-2 text-gray-700 italic ${className || ''}`}
      {...props}
    />
  ),
  table: ({ className, children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-gray-200">
      <table
        className={`w-full min-w-[36rem] border-collapse text-left text-sm text-gray-700 ${className || ''}`}
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className={`border-b border-gray-200 bg-gray-50 ${className || ''}`} {...props} />
  ),
  tbody: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className={`divide-y divide-gray-200 ${className || ''}`} {...props} />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={`border-b border-gray-100 last:border-0 ${className || ''}`} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 ${className || ''}`}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className={`px-4 py-3 align-top text-gray-800 ${className || ''}`} {...props} />
  ),
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className={`my-8 border-t border-gray-200 ${className || ''}`} {...props} />
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

      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </article>
  );
}
