import Link from "next/link";
import { blogListHref } from "@/lib/blogListUrl";
import { cn } from "@/lib/utils";

type Props = {
  currentPage: number;
  totalPages: number;
  category: string;
};

/**
 * Previous / next + compact page links for the blog index.
 */
export function BlogPagination({ currentPage, totalPages, category }: Props) {
  if (totalPages <= 1) return null;

  const linkClass =
    "inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-border/70 bg-card/40 px-3 text-sm font-medium text-foreground transition-colors hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  const pageNumbers = (): number[] => {
    const maxButtons = 7;
    if (totalPages <= maxButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages = new Set<number>([1, totalPages, currentPage]);
    let left = currentPage - 1;
    let right = currentPage + 1;
    while (pages.size < maxButtons && (left >= 1 || right <= totalPages)) {
      if (left >= 1) {
        pages.add(left);
        left -= 1;
      }
      if (pages.size >= maxButtons) break;
      if (right <= totalPages) {
        pages.add(right);
        right += 1;
      }
    }
    return [...pages].sort((a, b) => a - b);
  };

  const nums = pageNumbers();
  const items: (number | "ellipsis")[] = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const prev = nums[i - 1];
    if (i > 0 && prev !== undefined && n - prev > 1) {
      items.push("ellipsis");
    }
    items.push(n);
  }

  return (
    <nav
      className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between"
      aria-label="Blog list pagination"
    >
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Link
          href={blogListHref(Math.max(1, currentPage - 1), category)}
          aria-disabled={currentPage <= 1}
          className={cn(
            linkClass,
            currentPage <= 1 && "pointer-events-none opacity-40"
          )}
        >
          Previous
        </Link>
        {items.map((item, i) =>
          item === "ellipsis" ? (
            <span
              key={`e-${i}`}
              className="px-2 text-muted-foreground"
              aria-hidden
            >
              …
            </span>
          ) : (
            <Link
              key={item}
              href={blogListHref(item, category)}
              aria-current={item === currentPage ? "page" : undefined}
              className={cn(
                linkClass,
                item === currentPage &&
                  "border-foreground/30 bg-foreground text-background hover:bg-foreground/90"
              )}
            >
              {item}
            </Link>
          )
        )}
        <Link
          href={blogListHref(Math.min(totalPages, currentPage + 1), category)}
          aria-disabled={currentPage >= totalPages}
          className={cn(
            linkClass,
            currentPage >= totalPages && "pointer-events-none opacity-40"
          )}
        >
          Next
        </Link>
      </div>
      <p className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </p>
    </nav>
  );
}
