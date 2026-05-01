"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Logo } from "../logo";
import { ChevronRight, X } from "lucide-react";
import CustomLink from "../button/link";
import menuItems from "@/app/_assets/menu-items.json";
import { cn } from "@/app/_utils/cn";
import Link from "next/link";

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Function;
}) {
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  if (isMenuOpen) {
    return (
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        exit={{ x: 100 }}
        transition={{ duration: 0.2 }}
        className=" fixed top-0 right-0 z-50 h-screen bg-navy/45 backdrop-blur-2xl  w-full flex"
      >
        <div className="h-screen p-4 w-full flex flex-col gap-16 px-10">
          <div className="flex justify-between gap-5">
            <Logo />
            <button
              type="button"
              title="close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-10 h-10  hover:text-primary-500 hover:rotate-180 transition-all hover:cursor-pointer" />
            </button>
          </div>
          <div className="w-fit text-sm flex flex-col items-start gap-8 font-semibold">
            {menuItems.map((item) => (
              <div key={item?.id} className=" group relative hover:bg-red-600">
                <Link
                  href={item.children ? "#" : item?.url}
                  key={item?.id}
                  className={cn(
                    " hover:text-white text-gray-300 transition-all flex items-center gap-2",
                    // pathname.includes(item?.url) && "text-primary",
                  )}
                >
                  {item?.label}
                  {item.children && (
                    <ChevronRight className=" w-4 h-4 transition-all group-hover:rotate-90" />
                  )}
                </Link>
                {item.children && (
                  <div className="w-full flex flex-col pl-5">
                    {item.children?.map((child) => (
                      <Link
                        href={child?.url}
                        key={child.id}
                        className=" text-white border-b border-gray-500 py-1 p-2 transition-all"
                      >
                        {child?.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <CustomLink href="/contact-us">Let&apos;s talk</CustomLink>
        </div>
      </motion.div>
    );
  } else return;
}
