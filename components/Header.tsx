import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-3 px-4 sm:px-6 lg:px-8">
      <nav className="flex flex-wrap items-center justify-between">
        <Link href="/" className="w-28 sm:w-32">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            layout="responsive"
          />
        </Link>
        <div className="flex space-x-4 mt-3 sm:mt-0">
          <Link
            href="/projects"
            className="hover:text-gray-600 text-xs sm:text-sm"
          >
            PROJECTS
          </Link>
          <Link
            href="/stack"
            className="hover:text-gray-600 text-xs sm:text-sm"
          >
            TECH STACK
          </Link>
        </div>
      </nav>
    </header>
  );
}
