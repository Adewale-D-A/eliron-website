"use client";
// import useInView from "@/app/_hooks/use-in-view";
import { cn } from "@/app/_utils/cn";

export default function TransitionUp() {
  // const [ref, isInView] = useInView();
  return (
    <div
      // ref={ref}
      className=" w-full py-36 px-5 bg-primary/10 dark:bg-gray-700 lg:px-10 bg-right bg-no-repeat bg-cover bg-[url('/assets/pattern.png')]"
    >
      <div
        className={cn(
          " space-y-3.5 flex flex-col items-center w-full overflow-x-hidden overflow-y-hidden"
          // isInView ? "move-up" : "hidden"
        )}
      >
        <h2 className=" text-3xl lg:text-5xl font-bold text-center leading-relaxed max-w-4xl text-transparent bg-linear-45 from-secondary via-primary to-secondary dark:from-primary dark:via-[#eda6a9] dark:to-primary bg-clip-text">
          Eliron is not staff augmentation. We are judgment-led advisors
          ensuring stability when execution falters.
        </h2>
      </div>
    </div>
  );
}
