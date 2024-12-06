interface Tool {
    name: string;
    icon: string;
}

interface ToolsGridProps {
    tools: Tool[];
}

export function ToolsGrid({ tools }: ToolsGridProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
            {tools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img
                            src={tool.icon}
                            alt={tool.name}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="text-sm font-medium text-center">{tool.name}</span>
                </div>
            ))}
        </div>
    )
}

