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
        "rounded px-1 py-0.5 font-medium not-italic",
        variant === "accent" &&
          "bg-sky-100/90 text-sky-950 dark:bg-sky-950/50 dark:text-sky-100",
        variant === "neutral" &&
          "bg-slate-200/80 text-slate-900 dark:bg-slate-800/80 dark:text-slate-100",
        variant === "emphasis" &&
          "bg-violet-100/90 text-violet-950 dark:bg-violet-950/50 dark:text-violet-100",
        className
      )}
    >
      {children}
    </span>
  );
}
