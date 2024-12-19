import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <ul className="space-y-8">
      {posts.map((post) => (
        <li key={post.slug} className="border p-6 rounded-lg shadow-md">
          <Link
            href={`/blog/${post.slug}`}
            className="text-2xl font-semibold hover:underline block mb-2"
          >
            {post.title}
          </Link>
          <p className="text-gray-500 text-sm mb-2">{post.date}</p>
          <p className="text-gray-700">{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            Read more
          </Link>
        </li>
      ))}
    </ul>
  );
}
