"use client";

import { Logo } from "../logo";
import CustomLink from "../button/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/_utils/cn";

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <nav className="w-full backdrop-blur-2xl flex justify-center fixed top-0 left-0 z-50 transition-all shadow-sm shadow-primary overflow-x-clip nav-into">
      <div className="flex w-full max-w-screen-xl justify-between items-center gap-4 px-3 py-2">
        <Logo />
        <div className="w-full hidden text-sm lg:flex max-w-lg items-center justify-between font-semibold">
          {[
            {
              id: "1",
              label: "Services",
              url: "/services",
            },
            {
              id: "2",
              label: "Approach",
              url: "/approach",
            },
            {
              id: "3",
              label: "About Us",
              url: "/about-us",
            },
          ].map((item) => (
            <Link
              href={item?.url}
              key={item?.id}
              className={cn(
                " hover:text-primary transition-all",
                pathname.includes(item?.url) && "text-primary"
              )}
            >
              {item?.label}
            </Link>
          ))}
        </div>
        <div className=" flex items-center gap-5">
          <CustomLink href="/contact-us">Talk To Us</CustomLink>
        </div>
      </div>
    </nav>
  );
}
