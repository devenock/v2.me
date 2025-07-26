import Link from "next/link";
import Socials from "@/components/Socials";
import { IoBriefcaseOutline } from "react-icons/io5";

export default function Description() {
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">ENOCK OMONDI</h1>
      <p className="text-gray-600 mb-2 flex items-center">
        <IoBriefcaseOutline className="mr-3" />
        Software && DevOps Engineer
      </p>
      <p className="mb-4">5+ years of full-stack experience</p>
      <p className="text-gray-600 mb-6">
        <span>📍 Nairobi, Kenya • 🇰🇪</span>
      </p>
      <Socials />
      <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
        Hi there! I&lsquo;m Enock. I work as a full-time software engineer. In
        my spare time I do open-sourcing. Most of my open-source{" "}
        <Link target="_blank" href="https://github.com/devenock" className="text-blue-600 hover:underline">
          projects
        </Link>{" "}
        are focused on helping people learn how to build scalable applications
        and upskill. You can also use these projects to learn different
        application architecture and syntax. You can start by exploring my{" "}
        <Link href="/blog" className="text-blue-600 hover:underline">
          articles
        </Link>{" "}
        about life, web-development and scalable systems.
      </p>
    </div>
  );
}
