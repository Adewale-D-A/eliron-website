import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";
import ServicesHeroCards from "@/app/_components/cards/services-hero";
import {
  ArrowRightLeft,
  Brain,
  BriefcaseBusiness,
  ClipboardClock,
  HandGrab,
  Puzzle,
  Pyramid,
  Wheat,
  X,
} from "lucide-react";
import ServiceDoesNotCards from "@/app/_components/cards/does-not-cards";

export const metadata: Metadata = metadataContent.services;

export default function Services() {
  return (
    <div className=" flex flex-col items-center  pt-28">
      <section className="w-full flex flex-col gap-5  justify-center items-center">
        <div className="w-full pt-10 lg:pt-16 pb-20 flex max-w-7xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <h2 className="text-5xl lg:text-7xl text-center font-bold text-transparent bg-linear-45 from-secondary via-primary to-secondary dark:from-primary dark:via-[#eda6a9] dark:to-primary bg-clip-text">
            Our Services Pillars
          </h2>
          <p className=" text-center max-w-xl text-lg">
            Eliron provides independent oversight and stabilization for complex,
            high-stakes programs. We do not replace your teams — we empower
            them.
          </p>
          <div className=" w-full space-y-5 mt-10">
            <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
              {[
                {
                  icon: <Pyramid className="size-6" />,
                  imgUrl: "/services/stabilization.jpg",
                  title: "Program Stabilization",
                  bgClassName: "bg-[url('/services/stabilization.jpg')]",
                  description:
                    "Diagnose weak delivery, establish cadence, restore control.",
                },
                {
                  icon: <BriefcaseBusiness className="size-6" />,
                  imgUrl: "/services/support.jpg",
                  bgClassName: "bg-[url('/services/support.jpg')]",
                  title: "Executive Support",
                  description:
                    "Advisory for directors, VPs, sponsors under pressure.",
                },
                {
                  icon: <Brain className="size-6" />,
                  imgUrl: "/services/decision.jpg",
                  bgClassName: "bg-[url('/services/decision.jpg')]",
                  title: "Escalation & Decision Protocols",
                  description:
                    "Clear pathways for executive decisions when stakes are high.",
                },
                {
                  icon: <ArrowRightLeft className="size-6" />,
                  title: "Transition Oversight",
                  imgUrl: "/services/transition.jpg",
                  bgClassName: "bg-[url('/services/transition.jpg')]",
                  description:
                    "Smooth handoff and exit process after stabilization.",
                },
              ].map((item) => (
                <ServicesHeroCards key={item?.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-5 justify-center items-center bg-linear-45 from-[#e1cbcc] via-[#b6eaee] dark:via-[#5592a1] to-[#6d73f0]">
        <div className="w-full relative py-36 flex max-w-7xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <span className=" font-bold text-[20rem] absolute text-primary left-0 top-0 opacity-10">
            X
          </span>
          <div className="w-full flex flex-col gap-4 max-w-[500px] text-center items-center">
            <h4 className="text-4xl font-semibold leading-none lg:leading-tight ">
              What Eliron Does{" "}
              <span className=" text-5xl font-bold text-red-500">NOT</span> Do
            </h4>
            <p className="">
              At Eliron, clarity comes not only from what we deliver but also
              from what we deliberately avoid.
            </p>
          </div>
          <div className=" w-full grid grid-col-1 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Staff Augmentation",
                description:
                  "Eliron is not a staffing agency; we strengthen existing teams through executive-level oversight.",
                Icon: Puzzle,
                iconClassname: "bg-[#3C91E6]/15 text-[#3C91E6]",
              },
              {
                title: "Hands-on Project Management Execution",
                description:
                  "We don’t act as daily project managers; we advise and stabilize at the executive level.",
                Icon: HandGrab,
                iconClassname: "bg-[#F25F5C]/15 text-[#F25F5C]",
              },
              {
                title: "Hourly Work",
                description:
                  "Eliron avoids hourly billing, focusing on retainer-based engagements for sustained outcomes.",
                Icon: ClipboardClock,
                iconClassname: "bg-[#9A031E]/15 text-[#9A031E]",
              },
              {
                title: "Consumer Services",
                description:
                  "We don’t serve individuals; Eliron partners with executives and organizations managing complex programs.",
                Icon: Wheat,
                iconClassname: "bg-[#43AA8B]/15 text-[#43AA8B]",
              },
            ].map((item) => (
              <ServiceDoesNotCards key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
