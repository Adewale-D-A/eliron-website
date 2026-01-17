import { Metadata } from "next";
import HeroBanner from "../_components/page-comp/hero";
import metadataContent from "@/app/_assets/seo-meta-data.json";
import OurPartners from "../_components/page-comp/partners";
import { ArrowRight, HandFist, Triangle } from "lucide-react";
import PrepositionCard from "../_components/cards/preposition";
import CustomLink from "@/app/_components/button/link";
import { Download } from "lucide-react";

export const metadata: Metadata = metadataContent.home;

export default function Home() {
  return (
    <div className=" flex flex-col items-center">
      <HeroBanner />
      <section className="w-full my-10 flex items-center justify-center">
        <OurPartners />
      </section>

      <section className="w-full bg-gray-100 dark:bg-gray-900 py-24 flex flex-col gap-5 justify-center items-center ">
        <div className="w-full flex max-w-7xl px-5 lg:px-0 flex-col justify-center items-center gap-16">
          <div className="w-full flex flex-col gap-4 text-center items-center">
            <h4 className="text-2xl lg:text-3xl font-semibold leading-none lg:leading-tight">
              What We Do
            </h4>
            <p className=" max-w-4xl text-md lg:text-lg">
              Eliron provides institutional consulting and proprietary delivery
              frameworks that help organisations and project leaders navigate
              the most complex project challenges with clarity, consistency, and
              measurable results.
            </p>
          </div>
          <div className=" w-full grid grid-col-1 lg:grid-cols-2 gap-5">
            {[
              {
                id: 1,
                title: "Who We Serve",
                description:
                  "Professionals accountable for project outcomes, including:",
                icon: <Triangle />,
                textClassName: "text-[#1e2939] dark:text-[#bfd9f3]",
                bgClassName: "bg-[#1e2939]/10 dark:bg-[#bfd9f3]/10",
                items: [
                  "Project Managers (PMs)",
                  "Project Controls Managers (PCMs)",
                  "Consultants and delivery leaders driving high-risk or mission-critical initiatives",
                ],
              },
              {
                id: 2,
                title: "Outcomes You Can Expect",
                description: "Our clients consistently achieve:",
                icon: <HandFist />,
                textClassName: "text-[#66C61C]",
                bgClassName: "bg-[#66C61C]/10",
                items: [
                  "Proven delivery playbooks grounded in enterprise practice",
                  "Tools and frameworks that scale across teams and organisations",
                  "Expert advisory support to reduce risk and improve execution confidence",
                ],
              },
            ].map((item) => (
              <PrepositionCard {...item} key={item?.id} />
            ))}
          </div>
        </div>
      </section>
      <div className=" w-full py-36 px-5 bg-primary/10 dark:bg-gray-700 lg:px-10 bg-right bg-no-repeat bg-cover bg-[url('/assets/pattern.png')]">
        <div
          className={
            " space-y-3.5 flex flex-col items-center w-full overflow-x-hidden overflow-y-hidden"
          }
        >
          <h2 className=" text-3xl lg:text-5xl font-bold text-center leading-relaxed max-w-4xl text-transparent bg-linear-45 from-secondary via-primary to-secondary dark:from-primary dark:via-[#eda6a9] dark:to-primary bg-clip-text">
            Eliron is not staff augmentation. We are judgment-led advisors
            ensuring stability when execution falters.
          </h2>
          <div className=" flex items-center gap-7 flex-col lg:flex-row">
            <CustomLink
              href="/assets/brochure.pdf"
              className="flex items-center gap-2.5"
              download
            >
              Access the Playbook <Download className=" animate-bounce" />
            </CustomLink>
            <CustomLink
              href="/approach"
              variant={"transparent"}
              className="backdrop-blur-sm "
            >
              <span className="text-xs lg:text-sm space-x-2.5 w-full flex items-center gap-2.5">
                Contact Us for Advisory & Licensing
                <ArrowRight />
              </span>
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
}
