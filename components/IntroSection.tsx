import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const linkClass =
  "font-medium text-foreground underline underline-offset-4 decoration-border transition-colors hover:text-foreground/90 hover:decoration-muted-foreground";

export default function IntroSection() {
  return (
    <section aria-label="Intro" className="w-full">
      <div className="rounded-xl border border-border/50 bg-card/40 px-5 py-9 shadow-none backdrop-blur-sm sm:px-8 sm:py-12 dark:bg-card/25">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Hello
            </p>

            <div className="mt-6 space-y-6 text-[15px] leading-7 text-muted-foreground sm:text-base">
              <p>
                I&apos;m{" "}
                <span className="font-medium text-foreground">Enock Omondi</span>.
                I work as a{" "}
                <span className="font-medium text-foreground">
                  Lead Software Engineer
                </span>{" "}
                at{" "}
                <Link
                  href="https://www.altech-rdc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Altech Group
                </Link>
                , where I focus on backend and production-ready systems.
              </p>
              <p>
                When I&apos;m not shipping code, I&apos;m deepening my systems
                understanding — transitioning into a{" "}
                <span className="font-medium text-foreground">
                  Software Architect
                </span>{" "}
                by designing scalable, resilient platforms and sharing what
                I learn along the way.
              </p>

              <p>
                You can find some of my work on{" "}
                <Link
                  href="https://github.com/devenock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  GitHub
                </Link>{" "}
                or read about my articles{" "}
                <Link href="/blog" rel="noopener noreferrer" className={linkClass}>
                  here
                </Link>
                .
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <Link
                href="mailto:enockomondi305@gmail.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <IoMailOutline className="h-4 w-4" />
                <span className="underline underline-offset-4 decoration-border hover:decoration-muted-foreground">
                  enockomondi305@gmail.com
                </span>
              </Link>
              <Link
                href="https://x.com/dev_enock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <FaXTwitter className="h-4 w-4" />
                <span className="underline underline-offset-4 decoration-border hover:decoration-muted-foreground">
                  @dev_enock
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/enock-omondi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <AiFillLinkedin className="h-4 w-4" />
                <span className="underline underline-offset-4 decoration-border hover:decoration-muted-foreground">
                  enock-omondi
                </span>
              </Link>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              <Link
                href="https://github.com/devenock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <AiOutlineGithub className="h-4 w-4" />
                <span className="underline underline-offset-4 decoration-border hover:decoration-muted-foreground">
                  devenock
                </span>
              </Link>
            </div>

            <div className="mt-10 h-px w-full bg-border/60" />
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-none ring-1 ring-border/60 sm:h-48 sm:w-48">
              <Image
                src="/images/profile.jpg"
                alt="Enock Omondi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
