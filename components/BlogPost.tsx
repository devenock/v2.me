import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/lib/mdx-components";

interface Post {
  title: string;
  date: string;
  content: string;
}

export default function BlogPost({ post }: { post: Post }) {
  return (
    <article className="prose lg:prose-xl max-w-none">
      <h1>{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <MDXRemote source={post.content} components={mdxComponents}></MDXRemote>
    </article>
  );
}
