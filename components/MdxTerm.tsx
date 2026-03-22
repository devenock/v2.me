import { cn } from "@/lib/utils";

export type MdxTermVariant = "accent" | "neutral" | "emphasis";

type Props = {
  children: React.ReactNode;
  variant?: MdxTermVariant;
  className?: string;
};

/**
 * Highlights important terms with color (light theme first; dark: ready for theme toggle).
 * Use instead of excessive **bold** for scan-friendly vocabulary.
 */
export function MdxTerm({
  children,
  variant = "accent",
  className,
}: Props) {
  return (
    <span
      className={cn(
        "not-prose rounded px-1 py-0.5 font-medium not-italic",
        variant === "accent" &&
          "bg-sky-100/90 text-sky-950 dark:bg-sky-900/70 dark:text-sky-50",
        variant === "neutral" &&
          "bg-slate-200/80 text-slate-900 dark:bg-slate-700/90 dark:text-slate-50",
        variant === "emphasis" &&
          "bg-violet-100/90 text-violet-950 dark:bg-violet-900/70 dark:text-violet-50",
        className
      )}
    >
      {children}
    </span>
  );
}
