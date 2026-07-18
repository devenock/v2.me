import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data";

export const metadata = {
  title: "Projects",
  description: "A collection of my open source projects.",
};

export default function Page() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Projects</h1>
        <p className="mt-2 text-muted-foreground">
          A collection of things I&apos;ve built.
        </p>
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
