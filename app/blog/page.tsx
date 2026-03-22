import { BlogList } from "@/components/BlogList";
import { getAllBlogs } from "@/lib/mdx";

export const metadata = {
  title: "Blog | Devenock",
  description:
    "Read my thoughts on software development, programming, and technology.",
};

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  if (blogs.length === 0) {
    return (
      <>
        <h1 className="mb-2 text-4xl font-bold text-gray-900">Blog</h1>
        <p className="mb-8 text-xl text-gray-600">
          No blog posts found. Please add some MDX files in the app/blog
          directory.
        </p>
      </>
    );
  }

  return (
    <>
      <h1 className="mb-2 text-4xl font-bold text-gray-900">Blog</h1>
      <p className="mb-8 text-xl text-gray-600">
        Thoughts, stories, and ideas about software development and technology.
      </p>
      <BlogList blogs={blogs} />
    </>
  );
}
