import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToolsGrid } from "@/components/ToolsGrid";
import { Databases, Frameworks, Languages, Tools } from "@/data";

export default function Stack() {
  return (
    <div className="min-h-screen py-5">
      <Tabs defaultValue="languages" className="w-full">
        <TabsList className="w-full max-w-4xl mx-auto mb-12 py-4">
          <TabsTrigger value="languages" className="flex-1 text-lg">
            Programming Languages
          </TabsTrigger>
          <TabsTrigger value="frameworks" className="flex-1 text-lg">
            Frameworks & Libraries
          </TabsTrigger>
          <TabsTrigger value="databases" className="flex-1 text-lg">
            Databases
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex-1 text-lg">
            Tools
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
      </Tabs>
    </div>
  );
}
