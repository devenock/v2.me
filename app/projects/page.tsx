import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data";

export default function Page() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="mb-8 text-4xl font-bold text-foreground">Projects</h1>
      <p className="text-muted-foreground">
        Here you&lsquo;ll find a collection of my open source projects.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
