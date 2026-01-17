"use client";

import CustomLink from "../button/link";
import { ArrowRight } from "lucide-react";
import {
  ParticleAnimation,
  BlurAndGradient,
} from "@/app/_components/dynamic-imports";

export default function HeroBanner() {
  return (
    <div className=" w-full lg:h-screen max-w-7xl grid grid-cols-1 lg:grid-cols-2 pt-28 lg:pt-10 items-start lg:items-center gap-4 px-5 lg:px-10">
      <div className="w-full  overflow-hidden absolute top-[0px] z-[-5] left-0  flex justify-center">
        <BlurAndGradient />
      </div>
      <div className=" space-y-10 text-center lg:text-left">
        <h2 className="text-3xl md:text-4l lg:text-5xl font-bold  leading-tight">
          Enterprise-Grade Consulting and Intellectual Property for High-Risk
          Project Delivery
        </h2>
        <p className="text-lg lg:text-xl">
          Practical frameworks, tools, and advisory support designed for
          professionals and leaders accountable for complex, high-risk projects.
        </p>
        <CustomLink href="/approach" variant={"transparent"}>
          <span className="text-xs lg:text-sm space-x-2.5 w-full flex items-center gap-2.5">
            Get the Project Controls & Delivery Playbook <ArrowRight />
          </span>
        </CustomLink>
      </div>
      <ParticleAnimation className={"hidden lg:block"} />
    </div>
  );
}
