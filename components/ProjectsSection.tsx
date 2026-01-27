import Link from "next/link";
import { projects } from "@/data";
import { Badge } from "@/components/ui/badge";

function getProjectUrl(project: (typeof projects)[number]) {
  return project.liveUrl || project.githubUrl || "#";
}

export default function ProjectsSection() {
  const featuredOrder = ["dweaver", "Vendre", "Apitestdoc", "Event Management API"] as const;
  const featured = featuredOrder
    .map((title) => projects.find((p) => p.title === title))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  return (
    <section aria-label="Projects">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-bold text-foreground">Projects</h2>
      </div>

      <div className="mt-6 space-y-4">
        {featured.map((project) => (
          <div
            key={project.title}
            className="group rounded-lg border border-gray-200 bg-white/60 p-5 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-gray-950 transition-colors">
                    {project.title}
                  </h3>
                  <Link
                    href={getProjectUrl(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap"
                  >
                    View →
                  </Link>
                </div>
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 6).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

