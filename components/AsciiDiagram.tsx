export function AsciiDiagram({ children }: { children: string }) {
  const content = children.replace(/^\n+/, "").replace(/\n+$/, "");

  return (
    <pre className="my-6 w-fit max-w-full overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm leading-relaxed text-gray-300 mx-auto">
      <code>{content}</code>
    </pre>
  );
}
