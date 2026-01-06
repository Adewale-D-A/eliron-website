"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Logo } from "../logo";
import { X } from "lucide-react";
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
        className=" fixed top-0 right-0 z-50 backdrop-blur-2xl h-screen w-full flex"
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
          <div className="w-fit text-sm flex flex-col items-center gap-8 font-semibold">
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
          <CustomLink href="/contact-us">Let&apos;s talk</CustomLink>
        </div>
      </motion.div>
    );
  } else return;
}
