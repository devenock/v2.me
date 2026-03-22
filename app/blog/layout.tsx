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
          Subtle shell: blends with page (body is gray-100) instead of a stark white card.
        */}
        <div className="rounded-xl border border-gray-200/35 bg-gray-50/50 px-5 py-9 sm:px-8 sm:py-10 shadow-none">
          {children}
        </div>
      </div>
      <BlogScrollToTop />
    </div>
  );
}
