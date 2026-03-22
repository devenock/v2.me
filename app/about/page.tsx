import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/Socials";
import { IoBriefcaseOutline, IoLocationOutline } from "react-icons/io5";
import { skills } from "@/data";

export default function About() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-4xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
        <div className="w-48 h-48 sm:w-64 sm:h-64 relative rounded-full overflow-hidden shrink-0">
          <Image
            src="/images/profile.jpg"
            alt="Enock Omondi"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            ENOCK OMONDI
          </h1>
          <p className="mb-2 flex items-center text-muted-foreground">
            <IoBriefcaseOutline className="mr-3" />
            Senior Software Engineer
          </p>
          <p className="mb-4 flex items-center text-muted-foreground">
            <IoLocationOutline className="mr-3" />
            Nairobi, Kenya • 🇰🇪
          </p>
          <p className="mb-6 text-sm text-muted-foreground sm:text-base">
            6+ years of full-stack experience
          </p>
          <Socials />
        </div>
      </div>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-foreground">About Me</h2>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            Hi there! I&lsquo;m Enock, a Software Engineer with over 6 years of
            full-stack experience, currently transitioning into a Software Architect role.
            I specialize in building scalable, reliable applications that stand the test
            of time.
          </p>
          <p>
            My journey in software engineering has been focused on system architecture,
            backend development, and DevOps practices. I have a deep passion for
            designing resilient, production-ready systems that can handle real-world
            challenges. Over the years, I&lsquo;ve worked extensively with technologies
            like Golang, Node.js, and various cloud platforms to deliver robust solutions.
          </p>
          <p>
            In my spare time, I contribute to open-source projects that help developers
            level up their skills. I believe in the power of knowledge sharing and
            community-driven development. I also write about Backend Systems, Golang,
            web development, and navigating life as a software engineer.
          </p>
          <p>
            As I transition into software architecture, I&lsquo;m focusing on designing
            systems that are not just functional, but also maintainable, scalable, and
            aligned with business goals. I enjoy solving complex problems and turning
            them into elegant, well-architected solutions.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          Areas of Expertise
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-muted/50 p-6">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              Backend Development
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Building robust APIs and microservices using Golang, Node.js, and Express.
              Experience with RESTful APIs, GraphQL, and real-time systems using WebSockets.
            </p>
          </div>
          <div className="rounded-lg bg-muted/50 p-6">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              System Architecture
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Designing scalable, distributed systems with a focus on reliability,
              performance, and maintainability. Experience with microservices architecture
              and cloud-native applications.
            </p>
          </div>
          <div className="rounded-lg bg-muted/50 p-6">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              DevOps & Infrastructure
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Setting up CI/CD pipelines, containerization with Docker, and deploying
              applications on cloud platforms like AWS. Focus on automation and
              infrastructure as code.
            </p>
          </div>
          <div className="rounded-lg bg-muted/50 p-6">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              Database Design
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Working with both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases.
              Experience with database optimization, indexing, and query performance tuning.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          Technical Skills
        </h2>
        <div className="space-y-8">
          {skills
            .filter((skillGroup) => skillGroup.title !== "Mobile App Development")
            .map((skillGroup) => (
              <div key={skillGroup.title}>
                <h3 className="mb-3 text-base font-semibold text-foreground">
                  {skillGroup.title}
                </h3>
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-3">
                  {skillGroup.items
                    .filter((skill) => skill.icon)
                    .map((skill) => {
                      // Map /skills/ paths to /images/ since icons are in /images/
                      const iconPath = skill.icon!.replace("/skills/", "/images/");
                      return (
                        <div
                          key={skill.title}
                          className="group flex aspect-square cursor-default flex-col items-center justify-center rounded-lg bg-muted/50 p-2 transition-all duration-200 hover:bg-muted hover:shadow-sm"
                          title={skill.title}
                        >
                          <Image
                            src={iconPath}
                            alt={skill.title}
                            width={28}
                            height={28}
                            className="object-contain w-7 h-7"
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-border py-8 text-center">
        <p className="mb-4 text-muted-foreground">
          Interested in learning more about my work?
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/blog"
            className="rounded-md border border-border px-6 py-2 font-medium text-foreground transition-colors duration-200 hover:bg-muted"
          >
            Read Articles
          </Link>
        </div>
      </section>
    </div>
  );
}
