import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'app/blog');

export interface Blog {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string;
}

function getAllFiles(dir: string): string[] {
  const files: string[] = [];
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip the [slug] directory as it's for the blog post page
      if (item !== '[slug]') {
        files.push(...getAllFiles(fullPath));
      }
    } else if (item.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Extracts a `key: '...'` or `key: "..."` string value, honoring escaped
// quotes and allowing the other quote character to appear unescaped inside
// (e.g. title: 'What "Backend Architecture" Means' or title: 'Isn\'t this great').
function extractQuotedField(source: string, key: string): string | undefined {
  const re = new RegExp(
    `${key}\\s*:\\s*(?:'((?:[^'\\\\]|\\\\.)*)'|"((?:[^"\\\\]|\\\\.)*)")`
  );
  const match = source.match(re);
  if (!match) return undefined;
  const raw = match[1] !== undefined ? match[1] : match[2];
  return raw.replace(/\\(['"])/g, '$1');
}

function extractMetadata(content: string): { title: string; description: string; date?: string } {
  // First try to find Next.js metadata
  // Use a non-greedy multiline match so nested objects (e.g. alternates) don't break parsing
  const metadataMatch = content.match(/export const metadata\s*=\s*\{([\s\S]*?)\}\s*;?/);
  if (metadataMatch) {
    const metadataStr = metadataMatch[1];
    const title = extractQuotedField(metadataStr, 'title');
    const description = extractQuotedField(metadataStr, 'description');
    const date = extractQuotedField(metadataStr, 'date');

    return {
      title: title ?? 'Untitled',
      description: description ?? 'No description available',
      date,
    };
  }

  // If no Next.js metadata, try to find frontmatter
  const { data } = matter(content);
  return {
    title: data.title || 'Untitled',
    description: data.description || 'No description available',
    date: data.date || undefined,
  };
}

function cleanContent(content: string): string {
  // Remove the metadata export
  const cleaned = content.replace(/export const metadata\s*=\s*\{[\s\S]*?\}\s*;?\n?/, '');
  
  // Keep the imports and component usage
  return cleaned.trim();
}

function normalizeDate(dateStr: string | undefined, fallback: Date): string {
  if (!dateStr) return fallback.toISOString();
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return fallback.toISOString();
  return parsed.toISOString();
}

export async function getAllBlogs(): Promise<Blog[]> {
  const files = getAllFiles(blogDirectory);
  
  const blogs = files.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { title, description, date } = extractMetadata(fileContents);
    const stat = fs.statSync(filePath);
    const fileDate = stat.birthtimeMs && stat.birthtimeMs > 0 ? stat.birthtime : stat.mtime;
    
    // Get the relative path from the blog directory
    const relativePath = path.relative(blogDirectory, filePath);
    // Remove the .mdx extension and normalize the path
    let slug = relativePath.replace(/\.mdx$/, '').replace(/\\/g, '/');
    
    // Remove /page from the end since MDX files are named page.mdx in their directories
    slug = slug.replace(/\/page$/, '');
    
    return {
      slug,
      title,
      date: normalizeDate(date, fileDate),
      category: path.dirname(slug),
      description,
      content: cleanContent(fileContents),
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return blogs;
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    // Try to find the file in any subdirectory
    const files = getAllFiles(blogDirectory);
    const filePath = files.find(file => {
      const relativePath = path.relative(blogDirectory, file);
      const fileSlug = relativePath.replace(/\.mdx$/, '').replace(/\\/g, '/').replace(/\/page$/, '');
      return fileSlug === slug;
    });

    if (!filePath) {
      console.error('Blog not found:', slug);
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { title, description, date } = extractMetadata(fileContents);
    const stat = fs.statSync(filePath);
    const fileDate = stat.birthtimeMs && stat.birthtimeMs > 0 ? stat.birthtime : stat.mtime;

    return {
      slug,
      title,
      date: normalizeDate(date, fileDate),
      category: path.dirname(slug),
      description,
      content: cleanContent(fileContents),
    };
  } catch (error) {
    console.error('Error getting blog by slug:', error);
    return null;
  }
} 