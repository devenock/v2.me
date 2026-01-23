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
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">ENOCK OMONDI</h1>
          <p className="text-gray-600 mb-2 flex items-center">
            <IoBriefcaseOutline className="mr-3" />
            Senior Software Engineer
          </p>
          <p className="text-gray-600 mb-4 flex items-center">
            <IoLocationOutline className="mr-3" />
            Nairobi, Kenya • 🇰🇪
          </p>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            6+ years of full-stack experience
          </p>
          <Socials />
        </div>
      </div>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
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
        <h2 className="text-2xl font-bold mb-6">Areas of Expertise</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Backend Development
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Building robust APIs and microservices using Golang, Node.js, and Express.
              Experience with RESTful APIs, GraphQL, and real-time systems using WebSockets.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              System Architecture
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Designing scalable, distributed systems with a focus on reliability,
              performance, and maintainability. Experience with microservices architecture
              and cloud-native applications.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              DevOps & Infrastructure
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Setting up CI/CD pipelines, containerization with Docker, and deploying
              applications on cloud platforms like AWS. Focus on automation and
              infrastructure as code.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Database Design
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Working with both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases.
              Experience with database optimization, indexing, and query performance tuning.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
        <div className="space-y-8">
          {skills
            .filter((skillGroup) => skillGroup.title !== "Mobile App Development")
            .map((skillGroup) => (
              <div key={skillGroup.title}>
                <h3 className="text-base font-semibold mb-3 text-gray-800">
                  {skillGroup.title}
                </h3>
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-3">
                  {skillGroup.items.map((skill) => {
                    // Map /skills/ paths to /images/ since icons are in /images/
                    const iconPath = skill.icon.replace("/skills/", "/images/");
                    return (
                      <div
                        key={skill.title}
                        className="flex flex-col items-center justify-center aspect-square p-2 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-sm transition-all duration-200 group cursor-default"
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
      <section className="text-center py-8 border-t border-gray-200">
        <p className="text-gray-700 mb-4">
          Interested in learning more about my work?
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/blog"
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            Read Articles
          </Link>
        </div>
      </section>
    </div>
  );
}
