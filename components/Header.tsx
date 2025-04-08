"use client";

import Link from "next/link";
import Image from "next/image";
import { navData } from "@/data";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="py-3 px-4 sm:px-6 lg:px-8">
      <nav className="flex flex-wrap items-center justify-between">
        <Link href="/" className="w-28 sm:w-32">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
        <div className="flex space-x-4 mt-3 sm:mt-0">
          {navData.map((item) => {
            const isActive = pathname.includes(item.url);
            return (
              <Link
                href={item.url}
                key={item.url}
                className={`${isActive ? "active" : ""} [&.active]:text-gray-600 hover:text-gray-600 uppercase text-xs font-bold sm:text-sm`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
