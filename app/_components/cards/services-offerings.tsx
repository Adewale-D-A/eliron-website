import { ArrowRight, Dot } from "lucide-react";
import { ReactNode } from "react";
import CustomLink from "../button/link";

export default function ServiceOfferingsCard({
  id,
  icon,
  pricing,
  title,
  description,
  items,
  ctaTitle,
}: {
  id: string;
  icon: ReactNode;
  pricing: { base_price: string; duration: string };
  title: string;
  description: string;
  items: { title: string; content: string[] }[];
  ctaTitle: string;
}) {
  return (
    <div className=" w-full rounded-lg border backdrop-blur-sm border-gray-300 dark:border-gray-600 p-7 space-y-8 hover:scale-105 transition-all flex flex-col justify-between">
      <div className=" space-y-8">
        <div className=" flex justify-between items-center gap-3">
          <div
            className={" rounded-full w-fit p-3 bg-green-500/20 text-green-500"}
          >
            {icon}
          </div>

          {/* <h2 className=" font-bold text-4xl">
            {pricing.base_price}
            <span className=" text-xs text-gray-500">/ {pricing.duration}</span>
          </h2> */}
        </div>
        <div className=" space-y-4 ">
          <h4 className=" font-bold text-lg">{title}</h4>
          <p className="">{description}</p>
          {items.map(({ title, content }, idx) => (
            <div key={idx} className=" space-y-2.5">
              <h6 className=" font-bold">{title}</h6>
              <ul className="">
                {content.map((it, indx) => (
                  <li key={indx} className=" flex items-center">
                    <Dot className=" min-w-8 min-h-8" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-end">
        <CustomLink
          href={`/contact-us?tier_id=${id}`}
          variant={"transparent"}
          className="backdrop-blur-sm "
        >
          <span className="text-xs lg:text-sm space-x-2.5 w-full flex items-center gap-2.5">
            {ctaTitle}
            <ArrowRight />
          </span>
        </CustomLink>
      </div>
    </div>
  );
}
