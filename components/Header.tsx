"use client";

import Link from "next/link";
import Image from "next/image";
import { navData } from "@/data";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-border/60">
      <nav className="flex flex-wrap items-center justify-between">
        <Link 
          href="/" 
          className="w-28 sm:w-32 transition-opacity hover:opacity-80"
        >
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
        <div className="mt-3 flex flex-wrap items-center gap-4 sm:mt-0 sm:gap-6 md:gap-8">
          {navData.map((item) => {
            const isInternal = item.url.startsWith("/");
            const isActive =
              isInternal &&
              (pathname === item.url ||
                (item.url !== "/" && pathname.startsWith(item.url + "/")));
            return (
              <Link
                href={item.url}
                key={item.url}
                target={isInternal ? undefined : "_blank"}
                rel={isInternal ? undefined : "noopener noreferrer"}
                className={`
                  relative text-sm font-medium tracking-wide
                  transition-all duration-200 ease-in-out
                  ${isActive 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                  }
                  group
                `}
              >
                <span className="relative">
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground rounded-full" />
                  )}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground/80 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left" />
                </span>
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
