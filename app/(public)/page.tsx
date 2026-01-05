import { Metadata } from "next";
import HeroBanner from "../_components/page-comp/hero";
import metadataContent from "@/app/_assets/seo-meta-data.json";
import OurPartners from "../_components/page-comp/partners";
import { HandFist, Joystick, Triangle } from "lucide-react";
import FacilitiesCard from "../_components/cards/facilities";
import TransitionUp from "../_components/animations/transition-up";

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
            <h4 className="text-4xl font-semibold leading-none lg:leading-tight">
              What we bring
            </h4>
          </div>
          <div className=" w-full grid grid-col-1 lg:grid-cols-3 gap-5">
            {[
              {
                id: 1,
                title: "Stabilize Programs",
                description:
                  "We bring clarity and cadence when delivery weakens.",
                icon: <Triangle />,
                textClassName: "text-[#1e2939] dark:text-[#bfd9f3]",
                bgClassName: "bg-[#1e2939]/10 dark:bg-[#bfd9f3]/10",
              },
              {
                id: 2,
                title: "Support Executives",
                description:
                  "Trusted partner for directors, VPs, and sponsors.",
                icon: <HandFist />,
                textClassName: "text-[#66C61C]",
                bgClassName: "bg-[#66C61C]/10",
              },
              {
                id: 3,
                title: "Ensure Control",
                description:
                  "Escalation protocols and oversight that protect outcomes.",
                icon: <Joystick />,
                textClassName: "text-[#940000]",
                bgClassName: "bg-[#940000]/10",
              },
            ].map((item) => (
              <FacilitiesCard {...item} key={item?.id} />
            ))}
          </div>
        </div>
      </section>
      <TransitionUp />
    </div>
  );
}
