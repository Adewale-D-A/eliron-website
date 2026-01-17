import { cn } from "@/app/_utils/cn";
import { ReactNode } from "react";

export default function ServicesHeroCards({
  icon,
  imgUrl,
  title,
  description,
  bgClassName,
}: {
  icon: ReactNode;
  imgUrl: string;
  title: string;
  description: string;
  bgClassName: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full min-h-96 rounded-2xl overflow-hidden bg-right bg-no-repeat bg-cover bg-secondary/60 dark:bg-black/50 bg-blend-overlay text-white",
        bgClassName,
      )}
    >
      {/* <Image
        src={imgUrl}
        alt="Background"
        className="w-full h-full object-cover"
        height={1000}
        width={1000}
      /> */}
      {/* <div className="absolute inset-0 bg-[#3b568a]/90 "></div> */}
      <div className="absolute left-0 bottom-10 z-10 p-4 lg:px-8 lg:pr-24 space-y-3">
        <div>
          <div
            className={cn(
              " rounded-full w-fit p-3 bg-primary/30 dark:bg-black/30",
            )}
          >
            {icon}
          </div>
          <h6 className=" font-semibold text-xl mt-3">{title}</h6>
        </div>
        <p className=" text-sm lg:text-lg">{description}</p>
      </div>
    </div>
  );
}
