import { cn } from "./utils";

/** Shared prose wrapper for MDX article bodies (file-based + MDXRemote). */
export const blogMdxProseClassName = cn(
  "prose prose-gray max-w-none text-[15px] leading-relaxed text-foreground",
  "prose-headings:font-semibold prose-headings:text-foreground",
  "prose-h2:mt-8 prose-h2:mb-2 prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:scroll-mt-20",
  "prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-lg prose-h3:scroll-mt-20",
  "prose-p:mt-0 prose-p:mb-0 prose-p:leading-relaxed prose-p:text-muted-foreground",
  "[&_p+p]:mt-3",
  "prose-strong:font-medium prose-strong:text-foreground",
  "prose-ul:my-3 prose-ol:my-3 prose-li:my-0.5 prose-li:leading-relaxed",
  "prose-hr:my-5 prose-hr:border-border",
  "prose-blockquote:border-l-sky-500 prose-blockquote:bg-sky-500/10 prose-blockquote:text-muted-foreground dark:prose-blockquote:border-sky-400 dark:prose-blockquote:bg-sky-950/40",
  "prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-sky-400"
);
