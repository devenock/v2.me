"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navData } from "@/data";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinkClass = (url: string) => {
    const isActive =
      pathname === url || (url !== "/" && pathname.startsWith(url + "/"));
    return `relative text-sm font-medium tracking-wide transition-all duration-200 ease-in-out group ${
      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="w-24 shrink-0 transition-opacity hover:opacity-80 sm:w-28"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="h-auto w-full dark:brightness-0 dark:invert"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navData.map((item) => (
              <Link
                href={item.url}
                key={item.url}
                target={item.url.startsWith("/") ? undefined : "_blank"}
                rel={item.url.startsWith("/") ? undefined : "noopener noreferrer"}
                className={navLinkClass(item.url)}
              >
                <span className="relative">
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-foreground transition-transform duration-200 ease-in-out origin-left ${
                      pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url + "/"))
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </span>
              </Link>
            ))}

            <Link
              href="/hire-me"
              className={`rounded-md border px-4 py-1.5 text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === "/hire-me"
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-transparent text-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden rounded-md p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-border/60 py-4 space-y-1">
            {navData.map((item) => {
              const isActive =
                pathname === item.url ||
                (item.url !== "/" && pathname.startsWith(item.url + "/"));
              return (
                <Link
                  href={item.url}
                  key={item.url}
                  target={item.url.startsWith("/") ? undefined : "_blank"}
                  rel={item.url.startsWith("/") ? undefined : "noopener noreferrer"}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/hire-me"
                className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  pathname === "/hire-me"
                    ? "bg-foreground text-background"
                    : "border border-border text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
