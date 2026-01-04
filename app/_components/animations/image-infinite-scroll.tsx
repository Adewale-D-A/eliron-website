"use client";
import Image from "next/image";
import partners from "@/app/_assets/partners.json";
import useIsMobileView from "@/app/_hooks/use-is-mobile";

export default function InfiniteScroll() {
  const [isMobile] = useIsMobileView();
  const width = isMobile ? 80 : 100;
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="w-full max-w-7xl space-y-5 rounded-2xl py-10 bg-linear-45 from-[#eaebec] via-[#bfd9f3] to-[#f7eeee] dark:from-dark-ash-900 dark:via-[#2c3e50] dark:to-dark-ash-900">
        <h3 className=" text-2xl font-bold text-center"> Our Partners</h3>
        <div className="w-full logos py-3 whitespace-nowrap  overflow-hidden relative before:absolute before:top-0 before:w-20 before:contents-[''] before:z-[2] before:h-full before:left-0 after:absolute after:top-0 after:w-20 after:contents-[''] after:z-[2]  after:h-full after:right-0">
          <div
            style={{ height: width + 10 }}
            className={`w-full whitespace-nowrap relative overflow-hidden`}
          >
            {partners.map(({ id, logo, name }, index) => (
              <div
                className={` logos-slide shadow-lg rounded-2xl  absolute`}
                key={id}
                style={
                  {
                    animationDelay: `calc(30s / ${partners?.length} * (${
                      partners?.length
                    } - ${index + 1}) * -1)`,
                    left: `max(calc(${width * 1.5}px * ${
                      partners?.length
                    }), 100%)`,
                    width: `${width}px`,
                  } as any
                }
              >
                <Image
                  key={id}
                  src={logo}
                  alt={name}
                  height={300}
                  width={300}
                  className={`w-full h-auto aspect-square object-contain rounded-2xl grayscale`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
