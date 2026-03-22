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
    <header className="mb-8">
      <h1 className="text-lg font-bold leading-snug tracking-tight text-gray-900 sm:text-xl md:text-2xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-gray-500">
        <time dateTime={date}>{displayDate}</time>
        <span className="mx-2 select-none" aria-hidden>
          ·
        </span>
        <span>{safeMinutes}min</span>
      </p>
    </header>
  );
}
