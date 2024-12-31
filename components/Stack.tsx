import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToolsGrid } from "@/components/ToolsGrid";
import { Databases, Frameworks, Languages, Tools } from "@/data";

export default function Stack() {
  return (
    <div className="min-h-screen py-5 px-4 md:px-0">
      <Tabs defaultValue="languages" className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-12">
          <TabsTrigger
            value="languages"
            className="text-sm md:text-lg py-2 px-4"
          >
            Programming Languages
          </TabsTrigger>
          <TabsTrigger
            value="frameworks"
            className="text-sm md:text-lg py-2 px-4"
          >
            Frameworks & Libraries
          </TabsTrigger>
          <TabsTrigger
            value="databases"
            className="text-sm md:text-lg py-2 px-4"
          >
            Databases
          </TabsTrigger>
          <TabsTrigger value="tools" className="text-sm md:text-lg py-2 px-4">
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
