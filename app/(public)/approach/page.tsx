import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";
import OurApproachAnimation from "@/app/_components/animations/our-jouney";

export const metadata: Metadata = metadataContent.approach;

export default function Approach() {
  return (
    <div className=" flex flex-col items-center  pt-28">
      <section className="w-full flex flex-col gap-5  justify-center items-center">
        <div className="w-full pt-10 lg:pt-16 pb-20 flex max-w-7xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <div className=" space-y-8">
            <h2 className="text-5xl lg:text-7xl text-center font-bold text-transparent bg-linear-45 from-secondary via-primary to-secondary dark:from-primary dark:via-[#eda6a9] dark:to-primary bg-clip-text">
              Our Approach
            </h2>
            <p className=" text-center max-w-xl text-lg">
              A Calm, Executive Approach to Stabilization
            </p>
          </div>
          <OurApproachAnimation />
        </div>
      </section>
    </div>
  );
}
