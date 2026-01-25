import { getAllBlogs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { highlight } from 'sugar-high';
import React from 'react';
import { format, isValid, parseISO } from "date-fns";

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
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={`my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 ${className || ''}`}
      {...props}
    />
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
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogs = await getAllBlogs();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const parsedDate = parseISO(blog.date);
  const displayDate = isValid(parsedDate)
    ? format(parsedDate, "MMM d, yyyy")
    : blog.date;

  const mdxSource = await serialize(blog.content, {
    mdxOptions: {
      development: process.env.NODE_ENV === 'development',
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span className="font-medium text-blue-600">{blog.category}</span>
            <span>•</span>
            <time dateTime={blog.date}>{displayDate}</time>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>
          <p className="text-xl text-gray-600">
            {blog.description}
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </article>
    </div>
  );
} 