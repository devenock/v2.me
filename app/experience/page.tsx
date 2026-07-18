import ExperienceSection from "@/components/ExperienceSection";

export const metadata = {
  title: "Experience",
  description: "My professional experience as a software engineer.",
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <ExperienceSection />
    </div>
  );
}
