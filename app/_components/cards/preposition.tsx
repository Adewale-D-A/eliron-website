import { cn } from "@/app/_utils/cn";
import { Dot } from "lucide-react";
import { ReactNode } from "react";

export default function PrepositionCard({
  id,
  title,
  description,
  icon,
  textClassName,
  bgClassName,
  items,
}: {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  textClassName: string;
  bgClassName: string;
  items: string[];
}) {
  return (
    <div className=" w-full relative rounded-lg border border-gray-300 dark:border-gray-600 p-7 space-y-8 hover:scale-105 transition-all">
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
        <ul className=" space-y-2 lg:px-3 shadow py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
          {items.map((it, indx) => (
            <li key={indx} className=" flex items-center">
              <Dot className=" min-w-8 min-h-8" /> {it}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
