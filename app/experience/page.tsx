import ExperienceSection from "@/components/ExperienceSection";

export const metadata = {
  title: "Experience",
  description: "My professional experience as a software engineer.",
};

export default function ExperiencePage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <ExperienceSection />
      </div>
    </div>
  );
}
