import { cn } from "@/app/_utils/cn";
import { LucideIcon } from "lucide-react";

export default function ServiceDoesNotCards({
  title,
  description,
  Icon,
  iconClassname,
}: {
  title: string;
  description: string;
  Icon: LucideIcon;
  iconClassname: string;
}) {
  return (
    <div className="p-2 rounded-2xl shadow-2xl shadow-primary/40 space-y-6 px-5 py-10">
      <div className={cn(" rounded-full w-fit p-3", iconClassname)}>
        {<Icon />}
      </div>
      <div className=" space-y-4">
        <h4 className=" font-bold text-lg uppercase text-gray-700 dark:text-white border-b pb-2 border-gray-500/30">
          {title}
        </h4>
        <p className=" text-gray-700 dark:text-white">{description}</p>
      </div>
    </div>
  );
}
