"use client";

import Link from "next/link";
import Image from "next/image";
import { navData } from "@/data";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200/50">
      <nav className="flex flex-wrap items-center justify-between">
        <Link 
          href="/" 
          className="w-28 sm:w-32 transition-opacity hover:opacity-80"
        >
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
        <div className="flex items-center space-x-6 sm:space-x-8 mt-3 sm:mt-0">
          {navData.map((item) => {
            const isActive = 
              pathname === item.url || 
              (item.url !== "/" && pathname.startsWith(item.url + "/"));
            return (
              <Link
                href={item.url}
                key={item.url}
                className={`
                  relative uppercase text-xs font-semibold sm:text-sm
                  transition-all duration-200 ease-in-out
                  ${isActive 
                    ? "text-gray-900" 
                    : "text-gray-500 hover:text-gray-900"
                  }
                  group
                `}
              >
                <span className="relative">
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full" />
                  )}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left" />
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
