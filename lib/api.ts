// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
//
// const postsDirectory = path.join(process.cwd(), "public/blog");
//
// export async function getAllPosts() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   const posts = fileNames
//     .filter((fileName) => fileName.endsWith(".mdx"))
//     .map((fileName) => {
//       const slug = fileName.replace(/\.mdx$/, "");
//       const fullPath = path.join(postsDirectory, fileName);
//       const fileContents = fs.readFileSync(fullPath, "utf8");
//       const { data } = matter(fileContents);
//
//       return {
//         slug,
//         title: data.title,
//         date: data.date,
//         excerpt: data.excerpt,
//       };
//     });
//
//   return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
// }
//
// export async function getPostBySlug(slug: string) {
//   const fullPath = path.join(postsDirectory, `${slug}.mdx`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const { data, content } = matter(fileContents);
//
//   return {
//     slug,
//     title: data.title,
//     date: data.date,
//     excerpt: data.excerpt,
//     content,
//   };
// }

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "public", "blog");

export async function getAllPosts() {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.warn(`Directory not found: ${postsDirectory}`);
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
        };
      });

    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${fullPath}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
    };
  } catch (error) {
    console.error(`Error in getPostBySlug for slug ${slug}:`, error);
    return null;
  }
}
