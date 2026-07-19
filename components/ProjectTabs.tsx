import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { projects, ProjectCategory } from "@/data";

const TABS: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "api", label: "APIs" },
  { value: "cli", label: "CLIs" },
  { value: "web", label: "Web" },
];

export default function ProjectTabs() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="mb-8 h-auto flex-wrap gap-1 bg-muted/50 p-1">
        {TABS.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="px-5 py-2 text-sm font-medium"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {TABS.map((tab) => {
        const filtered =
          tab.value === "all"
            ? projects
            : projects.filter((p) => p.category === tab.value);
        return (
          <TabsContent key={tab.value} value={tab.value}>
            {filtered.length === 0 ? (
              <p className="py-12 text-center text-sm text-muted-foreground">
                No {tab.label.toLowerCase()} projects yet.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            )}
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
