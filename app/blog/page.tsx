import Link from "next/link";
import { BlogList } from "@/components/BlogList";
import { getAllBlogs } from "@/lib/mdx";

export const metadata = {
  title: "Blog | Devenock",
  description:
    "Read my thoughts on software development, programming, and technology.",
};

const PAGE_SIZE = 10;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const params = await searchParams;
  const allBlogs = await getAllBlogs();

  if (allBlogs.length === 0) {
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

  const rawPage = parseInt(params.page ?? "1", 10);
  const pageNum =
    Number.isFinite(rawPage) && rawPage > 0 ? Math.floor(rawPage) : 1;

  const categoryParam = params.category ?? "all";
  const knownCategories = new Set(
    ["all", ...new Set(allBlogs.map((b) => b.category))]
  );
  const selectedCategory = knownCategories.has(categoryParam)
    ? categoryParam
    : "all";

  const filtered =
    selectedCategory === "all"
      ? allBlogs
      : allBlogs.filter((b) => b.category === selectedCategory);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(pageNum, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageBlogs = filtered.slice(start, start + PAGE_SIZE);

  const categories = [
    "all",
    ...Array.from(new Set(allBlogs.map((b) => b.category))).sort(),
  ];

  return (
    <>
      <h1 className="mb-2 text-4xl font-bold text-gray-900">Blog</h1>
      <p className="mb-8 text-xl text-gray-600">
        Thoughts, stories, and ideas about software development and technology.
      </p>
      {filtered.length === 0 ? (
        <p className="text-muted-foreground">
          No posts in this category.{" "}
          <Link href="/blog" className="font-medium text-foreground underline">
            View all posts
          </Link>
          .
        </p>
      ) : (
        <BlogList
          blogs={pageBlogs}
          categories={categories}
          selectedCategory={selectedCategory}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
}
