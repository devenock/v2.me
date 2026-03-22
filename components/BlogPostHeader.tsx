import { format, isValid, parseISO } from "date-fns";

type BlogPostHeaderProps = {
  title: string;
  /** ISO date string */
  date: string;
  /** Whole minutes, shown as e.g. 5min */
  minutes: number;
};

export function BlogPostHeader({ title, date, minutes }: BlogPostHeaderProps) {
  const parsed = parseISO(date);
  const displayDate = isValid(parsed)
    ? format(parsed, "MMM d, yyyy")
    : date;

  const safeMinutes = Math.max(1, Math.round(minutes));

  return (
    <header className="not-prose mb-8">
      <h1 className="text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-xl md:text-2xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        <time dateTime={date}>{displayDate}</time>
        <span className="mx-2 select-none" aria-hidden>
          ·
        </span>
        <span>{safeMinutes}min</span>
      </p>
    </header>
  );
}
