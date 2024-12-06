import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {ToolsGrid} from "@/components/ToolsGrid";
import {backendTools, cloudTools, deploymentTools, frontendTools} from "@/data";

export default function Stack() {
    return (
        <div className="min-h-screen bg-teal-900 text-white py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-teal-400 mb-4">Crafting Excellence with</h3>
                    <h2 className="text-4xl font-bold">Modern Tools</h2>
                </div>
                <Tabs defaultValue="frontend" className="w-full">
                    <TabsList className="w-full max-w-2xl mx-auto mb-12 bg-teal-800">
                        <TabsTrigger value="frontend" className="flex-1 text-lg">Frontend</TabsTrigger>
                        <TabsTrigger value="backend" className="flex-1 text-lg">Backend</TabsTrigger>
                        <TabsTrigger value="cloud" className="flex-1 text-lg">Cloud</TabsTrigger>
                        <TabsTrigger value="deployment" className="flex-1 text-lg">Deployment</TabsTrigger>
                    </TabsList>
                    <TabsContent value="frontend">
                        <ToolsGrid tools={frontendTools} />
                    </TabsContent>
                    <TabsContent value="backend">
                        <ToolsGrid tools={backendTools} />
                    </TabsContent>
                    <TabsContent value="cloud">
                        <ToolsGrid tools={cloudTools} />
                    </TabsContent>
                    <TabsContent value="deployment">
                        <ToolsGrid tools={deploymentTools} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

