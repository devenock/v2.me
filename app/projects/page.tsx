import SortSelect from "@/components/SortSelect";
import ProjectCard from "@/components/ProjectCard";
import {projects} from "@/data";

export default function Page() {
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            <p className="text-gray-600">
            Here you'll find a collection of my open source projects focused on helping people learn programming,
            algorithms, and machine learning.
            </p>
            <div className="flex items-center justify-between mb-8">
                <SortSelect/>
                <div className="flex items-center gap-2">
                    <span>Total stars:</span>
                    <span className="flex items-center font-semibold">
            ⭐ 244.6K
          </span>
                </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    )
}

