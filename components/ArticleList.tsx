import Link from "next/link";

interface Article {
  title: string;
  brief: string;
  slug: string;
  dateAdded: string;
}

async function fetchArticles(): Promise<Article[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`, {
    cache: "no-store",
  });
  console.log(res);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      `Failed to fetch articles: ${errorData.error}${errorData.details ? ` - ${errorData.details}` : ""}`,
    );
  }
  return res.json();
}

export default async function ArticleList() {
  const articles = await fetchArticles();

  if (articles.length === 0) {
    return (
      <p>No articles found. Make sure your Hashnode username is correct.</p>
    );
  }

  return (
    <ul className="space-y-4">
      {articles.map((article) => (
        <li
          key={article.slug}
          className="border rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          <p className="text-gray-600 mb-2">{article.brief}</p>
          <div className="flex justify-between items-center">
            <Link
              href={`https://${process.env.NEXT_PUBLIC_HASHNODE_USERNAME}.hashnode.dev/${article.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read more
            </Link>
            <span className="text-sm text-gray-500">
              {new Date(article.dateAdded).toLocaleDateString()}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
