import { BlogScrollToTop } from "@/components/BlogScrollToTop";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full py-8 sm:py-10">
      <div className="max-w-4xl mx-auto w-full">
        {/*
          Subtle shell: blends with page background in light and dark.
        */}
        <div className="rounded-xl border border-border/50 bg-card/40 px-5 py-9 shadow-none backdrop-blur-sm sm:px-8 sm:py-10 dark:bg-card/25">
          {children}
        </div>
      </div>
      <BlogScrollToTop />
    </div>
  );
}
