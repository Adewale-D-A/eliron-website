import Link from "next/link";
import { Logo } from "../logo";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function FooterMenu() {
  return (
    <footer className=" w-full flex justify-center py-16 lg:py-24 ">
      <div className="w-full max-w-screen-xl flex flex-col items-center justify-center gap-8">
        <Logo />
        <div className=" w-full flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-8 flex-wrap">
          {[
            {
              id: 1,
              label: "Our Services",
              url: "/services",
            },
            {
              id: 2,
              label: "Who we are",
              url: "/about-us",
            },
            {
              id: 3,
              label: "News & Updates",
              url: "#",
            },
            {
              id: 4,
              label: "Support",
              url: "/contact-us",
            },
            {
              id: 5,
              label: "Privacy Policy",
              url: "#",
            },
          ].map((section) => (
            <Link
              key={section?.id}
              href={section?.url}
              className=" font-semibold"
            >
              {section?.label}
            </Link>
          ))}
        </div>
        <div className="w-full border-t border-gray-300 dark:border-gray-700 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 flex-wrap py-10">
          <Link
            target="_blank"
            rel="noreferrer"
            href={"mailto:info@eliron.com"}
          >
            © 2025 ELIRON. All rights reserved.
          </Link>
          <div className=" flex items-center gap-4">
            {[
              {
                id: 1,
                icon: <Linkedin className="w-4 h-4" />,
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/eliron",
              },
              {
                id: 2,
                icon: <Twitter className="w-4 h-4" />,
                title: "X",
                url: "https://x.com/eliron",
              },
              {
                id: 3,
                icon: <Instagram className="w-4 h-4" />,
                title: "Instagram",
                url: "https://www.instagram.com/eliron",
              },
            ].map(({ id, icon, url, title }) => (
              <Link
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                title={title}
                className=" p-2 rounded-full hover:scale-125 transition-all text-primary"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
