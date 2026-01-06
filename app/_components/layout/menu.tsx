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

export default function NavMenu() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full backdrop-blur-2xl flex justify-center fixed top-0 left-0 z-50 transition-all shadow-sm shadow-primary overflow-x-clip nav-into">
        <div className="flex w-full max-w-screen-xl justify-between items-center gap-4 px-5 lg:px-10 py-2">
          <button
            title="hamburger drawer"
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="block md:hidden"
          >
            <Menu />
          </button>
          <Logo />
          <div className="w-fit hidden text-sm lg:flex max-w-lg items-center lg:gap-16 font-semibold">
            {menuItems.map((item) => (
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
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}
