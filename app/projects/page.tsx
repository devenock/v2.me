import ProjectTabs from "@/components/ProjectTabs";

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
        <div className="mt-8">
          <ProjectTabs />
        </div>
      </div>
    </div>
  );
}
