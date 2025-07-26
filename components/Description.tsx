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
        Hi there! I&lsquo;m Enock, a Software & DevOps Engineer with over 5 years of
        full-stack experience. I build scalable, reliable applications — and in
        my spare time, I contribute to open-source projects that help developers
        level up. My work focuses on system architecture, DevOps practices, and
        building resilient, production-ready systems. I also write about DevOps,
        cloud infrastructure, web development, and navigating life as a software
        engineer.
      </p>
      <p className="mt-1 text-gray-800 text-sm sm:text-base leading-relaxed">
        👉 Dive into my{" "}  <Link
          target="_blank"
          href="https://github.com/devenock"
          className="text-blue-600 hover:underline"
        >
          projects
        </Link>{" "} or check out my latest{" "} <Link href="/blog" className="text-blue-600 hover:underline">
          articles
        </Link>{" "} to learn more.
      </p>
    </div>
  );
}
