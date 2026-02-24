"use client";

import { Logo } from "../logo";
import CustomLink from "../button/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/_utils/cn";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./mobile-menu";
import menuItems from "@/app/_assets/menu-items.json";
import useGetScrolled from "@/app/_hooks/use-get-scrolled";
import { useScrollReveal } from "@/app/_hooks/use-in-view";

export default function NavMenu() {
  const pathname = usePathname();
  const [scrolled] = useGetScrolled({ offset: 50 });
  useScrollReveal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav
        className={cn(
          "w-full flex justify-center fixed top-0 left-0 z-50 transition-all overflow-x-clip",
          scrolled || pathname !== "/"
            ? " bg-[#0f1b33f7] backdrop-blur-md shadow-md"
            : "",
        )}
      >
        <div className="flex w-full max-w-7xl justify-between items-center gap-4 px-5 lg:px-10 py-2">
          <button
            title="hamburger drawer"
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="block md:hidden text-orange hover:text-orange-hover transition-colors"
          >
            <Menu />
          </button>
          <Logo />
          <div className=" flex items-center gap-5 ">
            <div className="w-fit hidden text-sm lg:flex max-w-lg items-center lg:gap-8 font-semibold">
              {menuItems.map((item) => (
                <Link
                  href={item?.url}
                  key={item?.id}
                  className={cn(
                    " hover:text-white text-gray-300 transition-all",
                    // pathname.includes(item?.url) && "text-primary",
                  )}
                >
                  {item?.label}
                </Link>
              ))}
            </div>
            <CustomLink href="/contact-us">Talk To Us</CustomLink>
          </div>
        </div>
      </nav>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}
