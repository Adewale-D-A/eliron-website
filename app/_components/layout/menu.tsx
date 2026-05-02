"use client";

import { Logo } from "../logo";
import CustomLink from "../button/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/_utils/cn";
import { ChevronDown, Menu } from "lucide-react";
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
          "w-full flex justify-center fixed top-0 left-0 z-50 transition-all bg-white text-gray-800 ",
          // scrolled || pathname !== "/"
          //   ? " bg-[#0f1b33f7] backdrop-blur-md shadow-md"
          //   : "",
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
          <Logo variant="dark" />
          <div className="w-fit flex items-center gap-5 ">
            <div className=" hidden text-sm lg:flex items-center lg:gap-8 font-semibold">
              {menuItems.map((item) => (
                <div key={item?.id} className=" group relative">
                  <Link
                    href={item.children ? "#" : item?.url}
                    className={cn(
                      " hover:text-orange text-gray-600 transition-all flex items-center gap-2",
                      // pathname.includes(item?.url) && "text-primary",
                    )}
                  >
                    {item?.label}{" "}
                    {item.children && (
                      <ChevronDown className=" w-4 h-4 rotate-180 transition-all group-hover:rotate-0" />
                    )}
                  </Link>
                  {item.children && (
                    <div className="w-40 hidden group-hover:block absolute top-0 pt-8 right-0 ">
                      <div className="w-full bg-white rounded-lg flex flex-col shadow shadow-orange">
                        {item.children?.map((child) => (
                          <Link
                            href={child?.url}
                            key={child.id}
                            className=" text-navy hover:bg-orange hover:text-white border-b border-gray-300 py-2 p-2 transition-all"
                          >
                            {child?.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
