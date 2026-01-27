import IntroSection from "@/components/IntroSection";
// import ExperienceSection from "@/components/ExperienceSection";
// import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <IntroSection />
      </div>

      <div className="mt-16 max-w-4xl mx-auto space-y-16">
        {/* <ExperienceSection /> */}
        {/* <ProjectsSection /> */}
      </div>
    </div>
  );
}
