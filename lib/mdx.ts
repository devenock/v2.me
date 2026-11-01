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
}

function getAllFiles(dir: string): string[] {
  const files: string[] = [];

  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else if (item.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Reads `key: '...'` or `key: "..."`, honoring escaped quotes and the other quote type inside.
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
  const metadataMatch = content.match(/export const metadata\s*=\s*\{([\s\S]*?)\}\s*;?/);
  if (metadataMatch) {
    const metadataStr = metadataMatch[1];
    return {
      title: extractQuotedField(metadataStr, 'title') ?? 'Untitled',
      description: extractQuotedField(metadataStr, 'description') ?? 'No description available',
      date: extractQuotedField(metadataStr, 'date'),
    };
  }

  // Fall back to frontmatter when there is no `export const metadata`.
  const { data } = matter(content);
  return {
    title: data.title || 'Untitled',
    description: data.description || 'No description available',
    date: data.date || undefined,
  };
}

function normalizeDate(dateStr: string | undefined, fallback: Date): string {
  if (!dateStr) return fallback.toISOString();
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return fallback.toISOString();
  return parsed.toISOString();
}

export async function getAllBlogs(): Promise<Blog[]> {
  return getAllFiles(blogDirectory)
    .map((filePath) => {
      const { title, description, date } = extractMetadata(fs.readFileSync(filePath, 'utf8'));
      const stat = fs.statSync(filePath);
      const fileDate = stat.birthtimeMs && stat.birthtimeMs > 0 ? stat.birthtime : stat.mtime;
      // app/blog/<category>/<slug>/page.mdx -> <category>/<slug>
      const slug = path
        .relative(blogDirectory, filePath)
        .replace(/\\/g, '/')
        .replace(/\/page\.mdx$/, '');

      return {
        slug,
        title,
        date: normalizeDate(date, fileDate),
        category: path.dirname(slug),
        description,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
