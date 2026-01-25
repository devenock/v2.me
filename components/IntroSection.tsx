import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

export default function IntroSection() {
  return (
    <section aria-label="Intro" className="w-full">
      <div className="rounded-2xl bg-black px-6 py-10 sm:px-10 sm:py-14">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-start">
          <div>
            <p className="text-xs tracking-[0.22em] text-zinc-500 uppercase">
              Hello
            </p>

            <div className="mt-6 space-y-6 text-[15px] sm:text-base leading-7 text-zinc-400">
              <p>
                I&apos;m{" "}
                <span className="text-zinc-100 font-medium">Enock Omondi</span>.
                I work as a{" "}
                <span className="text-zinc-100 font-medium">
                  Senior Software Engineer
                </span>
                , where I focus on backend systems and production-ready
                architecture.
              </p>
              <p>
                When I&apos;m not shipping code, I&apos;m deepening my systems
                understanding — currently transitioning into{" "}
                <span className="text-zinc-100 font-medium">
                  Software Architecture
                </span>{" "}
                by designing scalable, resilient platforms and sharing what I
                learn along the way.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-400">
              <Link
                href="mailto:enock.omondi@gmail.com"
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <IoMailOutline className="h-4 w-4" />
                <span className="underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400">
                  enock.omondi@gmail.com
                </span>
              </Link>
              <Link
                href="https://x.com/dev_enock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <FaXTwitter className="h-4 w-4" />
                <span className="underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400">
                  @dev_enock
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/enock-omondi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <AiFillLinkedin className="h-4 w-4" />
                <span className="underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400">
                  enock-omondi
                </span>
              </Link>
            </div>

            <div className="mt-4 text-sm text-zinc-400">
              <Link
                href="https://github.com/devenock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <AiOutlineGithub className="h-4 w-4" />
                <span className="underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400">
                  devenock
                </span>
              </Link>
            </div>

            <div className="mt-10 h-px w-full bg-zinc-800/60" />
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full overflow-hidden ring-1 ring-zinc-800">
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

