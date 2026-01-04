import { cn } from "@/app/_utils/cn";
import { ReactNode } from "react";

export default function FacilitiesCard({
  id,
  title,
  description,
  icon,
  textClassName,
  bgClassName,
}: {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  textClassName: string;
  bgClassName: string;
}) {
  return (
    <div className=" w-full relative rounded-lg border border-gray-100 dark:border-gray-600 p-7 space-y-8 hover:border-secondary hover:cursor-pointer">
      <span className=" absolute right-5 top-0 text-9xl font-bold opacity-10">
        {id}
      </span>{" "}
      <div
        className={cn(" rounded-full w-fit p-3", bgClassName, textClassName)}
      >
        {icon}
      </div>
      <div className=" space-y-2">
        <h4 className=" font-bold text-lg">{title}</h4>
        <p className="">{description}</p>
      </div>
    </div>
  );
}
