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
      <div className=" space-y-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight">
          Execution Stability for Complex Programs Under Pressure
        </h2>
        <p className="text-lg lg:text-2xl">
          Independent advisory and delivery oversight for executives navigating
          high-stakes initiatives.
        </p>
        <CustomLink href="/approach" variant={"transparent"}>
          <span className=" space-x-2.5 w-full flex items-center gap-2.5">
            Explore Our Approach <ArrowRight />
          </span>
        </CustomLink>
      </div>
      <ParticleAnimation className={"hidden lg:block"} />
    </div>
  );
}
