import ArticleList from "@/components/ArticleList";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Suspense } from "react";

export default async function BlogPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-baseline gap-2 mb-8">
        <h1 className="text-4xl font-bold">BLOG</h1>
      </div>
      <ErrorBoundary
        fallback={<p>Error loading articles. Please try again later.</p>}
      >
        <Suspense fallback={<p>Loading articles...</p>}>
          <ArticleList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
