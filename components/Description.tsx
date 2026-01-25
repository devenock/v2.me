import Link from "next/link";
import Socials from "@/components/Socials";
import { IoBriefcaseOutline } from "react-icons/io5";

export default function Description() {
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-4xl font-bold mb-3 text-foreground">
        ENOCK OMONDI
      </h1>
      <p className="text-muted-foreground mb-2 flex items-center text-sm sm:text-base">
        <IoBriefcaseOutline className="mr-3" />
        Senior Software Engineer
      </p>
      <p className="mb-4 text-muted-foreground text-sm sm:text-base">
        6+ years of full-stack experience
      </p>
      <p className="text-muted-foreground mb-6 text-sm sm:text-base">
        <span>📍 Nairobi, Kenya • 🇰🇪</span>
      </p>
      <Socials />
      <div className="space-y-4 mt-6">
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Hi there! I&lsquo;m Enock, a Software Engineer with over 6 years of
          full-stack experience. I build scalable, reliable applications. In my
          spare time, I contribute to open-source projects that help developers
          level up. My work focuses on system architecture, DevOps practices, and
          building resilient, production-ready systems. I also write about Backend
          Systems, Golang, web development, and navigating life as a software
          engineer.
        </p>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          👉 Dive into my{" "}
          <Link
            href="/projects"
            className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors duration-200 font-medium"
          >
            projects
          </Link>{" "}
          or check out my latest{" "}
          <Link 
            href="/blog" 
            className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors duration-200 font-medium"
          >
            articles
          </Link>{" "}
          to learn more.
        </p>
      </div>
    </div>
  );
}
