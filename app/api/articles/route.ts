import { NextResponse } from "next/server";

const HASHNODE_API = "https://api.hashnode.com";
const HASHNODE_USERNAME = process.env.HASHNODE_USERNAME;

if (!HASHNODE_USERNAME) {
  console.error("HASHNODE_USERNAME is not set in environment variables");
}

export async function GET() {
  const query = `
    query GetUserArticles($page: Int!) {
      user(username: "${HASHNODE_USERNAME}") {
        publication {
          posts(page: $page) {
            title
            brief
            slug
            dateAdded
          }
        }
      }
    }
  `;

  const variables = { page: 1 };

  try {
    console.log("Fetching articles from Hashnode API...");
    const response = await fetch(HASHNODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      console.error(`Hashnode API responded with status: ${response.status}`);
      return NextResponse.json(
        { error: `Hashnode API responded with status: ${response.status}` },
        { status: response.status },
      );
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error("GraphQL Errors:", errors);
      return NextResponse.json(
        { error: "GraphQL query failed", details: errors },
        { status: 400 },
      );
    }

    if (
      !data ||
      !data.user ||
      !data.user.publication ||
      !data.user.publication.posts
    ) {
      console.error("Unexpected response structure from Hashnode API:", data);
      return NextResponse.json(
        { error: "Unexpected response structure from Hashnode API" },
        { status: 500 },
      );
    }

    const articles = data.user.publication.posts;

    console.log(`Successfully fetched ${articles.length} articles`);
    return NextResponse.json(articles);
  } catch (error: any) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles", details: error.message },
      { status: 500 },
    );
  }
}
