/** ~200 words per minute for technical reading. */
const WORDS_PER_MINUTE = 200;

/**
 * Estimates read time from markdown/MDX source (strips code-ish noise loosely).
 */
export function estimateReadingMinutesFromMarkdown(source: string): number {
  const withoutImports = source.replace(
    /^import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*/gm,
    ""
  );
  const withoutExports = withoutImports.replace(
    /^export\s+const\s+metadata\s*=\s*\{[\s\S]*?\};?\s*/m,
    ""
  );
  const words = withoutExports
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  return minutes;
}
