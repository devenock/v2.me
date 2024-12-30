import Image from "next/image";

interface Tool {
  name: string;
  icon: string;
}

interface ToolsGridProps {
  tools: Tool[];
}
export function ToolsGrid({ tools }: ToolsGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="flex flex-col items-center gap-2 md:gap-3"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16">
            <Image
              width={64}
              height={64}
              src={tool.icon}
              alt={tool.name}
              className="object-contain"
            />
          </div>
          <span className="text-xs sm:text-sm font-medium text-center">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  );
}
