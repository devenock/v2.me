export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full py-8 sm:py-10">
      <div className="max-w-4xl mx-auto w-full px-0 sm:px-0">
        <div className="rounded-2xl bg-white border border-gray-200/70 shadow-sm px-6 py-10 sm:px-10 sm:py-12">
          {children}
        </div>
      </div>
    </div>
  );
}
