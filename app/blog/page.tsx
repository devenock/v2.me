// import ArticleList from "@/components/ArticleList";
// import ErrorBoundary from "@/components/ErrorBoundary";
// import { Suspense } from "react";
//
// export default async function BlogPage() {
//   return (
//     <div className="container mx-auto py-8 px-4">
//       <div className="flex items-baseline gap-2 mb-8">
//         <h1 className="text-4xl font-bold">BLOG</h1>
//       </div>
//       <ErrorBoundary
//         fallback={<p>Error loading articles. Please try again later.</p>}
//       >
//         <Suspense fallback={<p>Loading articles...</p>}>
//           <ArticleList />
//         </Suspense>
//       </ErrorBoundary>
//     </div>
//   );
// }

import BlogList from "@/components/BlogList";
import { getAllPosts } from "@/lib/api";

export const metadata = {
  title: "My Technical Blog",
  description: "Thoughts and tutorials on web development and technology",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Technical Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
}
