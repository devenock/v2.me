import Link from "next/link";
import { projects } from "@/data";
import { Badge } from "@/components/ui/badge";

function getProjectUrl(project: (typeof projects)[number]) {
  return project.liveUrl || project.githubUrl || "#";
}

export default function ProjectsSection() {
  const featured = projects.slice(0, 2);

  return (
    <section aria-label="Projects">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-bold text-foreground">Projects</h2>
        <Link
          href="/projects"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
        </Link>
      </div>

      <div className="mt-6 grid gap-6">
        {featured.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-border/60 bg-card/50 p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              <Link
                href={getProjectUrl(project)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                View →
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 6).map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

