import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToolsGrid } from "@/components/ToolsGrid";
import { Analytics, Databases, Frameworks, Languages, Tools } from "@/data";

export const metadata = {
  title: "Expertise",
  description: "Technologies and tools I work with across projects and professional experience.",
};

export default function ExpertisePage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Expertise</h1>
        <p className="mt-2 text-muted-foreground">
          Technologies I use across projects and professional work.
        </p>

        <div className="mt-10">
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="mb-10 h-auto flex-wrap gap-1 bg-muted/50 p-1">
              <TabsTrigger value="languages" className="px-5 py-2 text-sm font-medium">
                Languages
              </TabsTrigger>
              <TabsTrigger value="frameworks" className="px-5 py-2 text-sm font-medium">
                Frameworks
              </TabsTrigger>
              <TabsTrigger value="databases" className="px-5 py-2 text-sm font-medium">
                DBs &amp; ORMs
              </TabsTrigger>
              <TabsTrigger value="tools" className="px-5 py-2 text-sm font-medium">
                Tools & Infra
              </TabsTrigger>
              <TabsTrigger value="analytics" className="px-5 py-2 text-sm font-medium">
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="languages">
              <ToolsGrid tools={Languages} />
            </TabsContent>
            <TabsContent value="frameworks">
              <ToolsGrid tools={Frameworks} />
            </TabsContent>
            <TabsContent value="databases">
              <ToolsGrid tools={Databases} />
            </TabsContent>
            <TabsContent value="tools">
              <ToolsGrid tools={Tools} />
            </TabsContent>
            <TabsContent value="analytics">
              <ToolsGrid tools={Analytics} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
