import Image from "next/image";
import Description from "@/components/Description";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
        <div className="w-48 h-48 sm:w-64 sm:h-64 relative rounded-full overflow-hidden shrink-0 ring-2 ring-gray-200/50 shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <Image
            src="/images/profile.jpg"
            alt="Enock Omondi"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <Description />
      </div>

      <div className="mt-16 max-w-4xl mx-auto space-y-16">
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </div>
  );
}
