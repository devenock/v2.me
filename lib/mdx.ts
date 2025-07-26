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

function extractMetadata(content: string): { title: string; description: string; date?: string } {
  // First try to find Next.js metadata
  const metadataMatch = content.match(/export const metadata = {([^}]+)}/);
  if (metadataMatch) {
    const metadataStr = metadataMatch[1];
    const titleMatch = metadataStr.match(/title:\s*['"]([^'"]+)['"]/);
    const descriptionMatch = metadataStr.match(/description:\s*['"]([^'"]+)['"]/);
    const dateMatch = metadataStr.match(/date:\s*['"]([^'"]+)['"]/);

    return {
      title: titleMatch ? titleMatch[1] : 'Untitled',
      description: descriptionMatch ? descriptionMatch[1] : 'No description available',
      date: dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0],
    };
  }

  // If no Next.js metadata, try to find frontmatter
  const { data } = matter(content);
  return {
    title: data.title || 'Untitled',
    description: data.description || 'No description available',
    date: data.date || new Date().toISOString().split('T')[0],
  };
}

function cleanContent(content: string): string {
  // Remove the metadata export
  let cleaned = content.replace(/export const metadata = {[^}]+};?\n?/, '');
  
  // Keep the imports and component usage
  return cleaned.trim();
}

export async function getAllBlogs(): Promise<Blog[]> {
  const files = getAllFiles(blogDirectory);
  
  const blogs = files.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { title, description, date } = extractMetadata(fileContents);
    
    // Get the relative path from the blog directory
    const relativePath = path.relative(blogDirectory, filePath);
    // Remove the .mdx extension and normalize the path
    let slug = relativePath.replace(/\.mdx$/, '').replace(/\\/g, '/');
    
    // Remove /page from the end since MDX files are named page.mdx in their directories
    slug = slug.replace(/\/page$/, '');
    
    return {
      slug,
      title,
      date: date || new Date().toISOString().split('T')[0],
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

    return {
      slug,
      title,
      date: date || new Date().toISOString().split('T')[0],
      category: path.dirname(slug),
      description,
      content: cleanContent(fileContents),
    };
  } catch (error) {
    console.error('Error getting blog by slug:', error);
    return null;
  }
} 