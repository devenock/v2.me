import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToolsGrid } from "@/components/ToolsGrid";
import { Databases, Frameworks, Languages, Tools } from "@/data";

export default function Stack() {
  return (
    <div className="min-h-screen py-5">
      <Tabs defaultValue="languages" className="w-full">
        <TabsList className="w-full mx-auto mb-12 py-6 h-auto gap-2">
          <TabsTrigger value="languages" className="flex-1 text-lg py-3 px-6">
            Programming Languages
          </TabsTrigger>
          <TabsTrigger value="frameworks" className="flex-1 text-lg py-3 px-6">
            Frameworks & Libraries
          </TabsTrigger>
          <TabsTrigger value="databases" className="flex-1 text-lg py-3 px-6">
            Databases
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex-1 text-lg py-3 px-6">
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
