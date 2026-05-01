"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import useInView from "@/app/_hooks/use-in-view";
import useIsMobileView from "@/app/_hooks/use-is-mobile";
import testimonials from "@/app/_assets/case-study.json";
import { cn } from "@/app/_utils/cn";
import { AirVent, Building, Construction, Wallet } from "lucide-react";

export default function Testimonials() {
  const [isMobile] = useIsMobileView();
  const [ref, isInView] = useInView();
  const boxRef = useRef(null) as any;
  const [currentSelection, setCurrentSelection] = useState(testimonials[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialMargin, setInitialMargin] = useState(0);

  const handleSelection = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      setCurrentSelection(testimonials[index]);
    },
    [testimonials],
  );

  useEffect(() => {
    if (isInView) {
      const item = boxRef?.current?.childNodes[currentIndex];
      item?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [isInView, currentIndex]);

  useEffect(() => {
    if (window) {
      setInitialMargin(window?.innerWidth / 2);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="w-full flex flex-col justify-center items-center gap-16 px-5 md:px-10"
    >
      <div className="w-full max-w-6xl px-5 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className=" flex flex-col gap-2 items-center text-center"
          >
            <button
              onClick={() => handleSelection(index)}
              className={cn(
                "p-3 lg:p-5 rounded-xl text-gray-200 bg-gray-300 hover:bg-secondary hover:text-white  hover:scale-110 transition-all cursor-pointer",
                currentSelection?.id === item?.id && "bg-secondary text-white",
              )}
            >
              {item?.id === 1 && <Construction className="size-7 lg:size-10" />}
              {item?.id === 2 && <AirVent className="size-7 lg:size-10" />}
              {item?.id === 3 && <Building className="size-7 lg:size-10" />}
              {item?.id === 4 && <Wallet className="size-7 lg:size-10" />}
            </button>
            <div className=" text-white">
              <span className=" font-bold">{item?.id}.</span>
              <p>{item?.sector}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full overflow-x-auto hide-scroll ">
        <div
          ref={boxRef}
          style={{
            paddingLeft: isMobile ? 0 : initialMargin,
          }}
          className="w-full flex flex-row items-stretch gap-5 lg:gap-10 transition-all overflow-x-auto hide-scroll "
        >
          {testimonials.map((item, index) => (
            <button
              onClick={() => handleSelection(index)}
              key={item.id}
              className={cn(
                " rounded-xl bg-white min-w-full lg:min-w-160 w-full p-6  flex flex-col  transition-all cursor-pointer opacity-30 hover:opacity-100",
                currentSelection?.id === item?.id && " bg-white opacity-100",
              )}
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{item.clientProfile}</p>

              <div className="mb-3">
                <h4 className="font-semibold text-orange">Challenge</h4>
                <p className="text-gray-600 text-sm">{item.challenge}</p>
              </div>

              <div className="mb-3">
                <h4 className="font-semibold text-orange">Solution</h4>
                <p className="text-gray-600 text-sm">{item.solution}</p>
              </div>

              <div className="mb-3">
                <h4 className="font-semibold text-orange">Results</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {item.results?.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>

              <blockquote className="italic text-gray-700 border-l-4 border-orange pl-4 mt-4">
                “{item.feedback}”
              </blockquote>
            </button>
          ))}
          <button
            className={cn(
              "opacity-0 min-w-full lg:min-w-[30rem] w-full hidden lg:block",
            )}
          ></button>
        </div>
      </div>
    </div>
  );
}
