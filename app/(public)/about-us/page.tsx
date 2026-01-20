import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";
import OurApproachAnimation from "@/app/_components/animations/our-jouney";
// import Image from "next/image";
// import principles from "@/app/_assets/principles.json";
// import Team from "@/app/_components/cards/team";
// import leadership from "@/app/_assets/team.json";

export const metadata: Metadata = metadataContent.about;

export default function AboutUs() {
  return (
    <div className=" flex flex-col items-center  pt-28 ">
      <section className="w-full flex flex-col gap-5  justify-center items-center overflow-hidden">
        <div className="w-full pt-10 lg:pt-16 pb-20 flex max-w-7xl px-5 flex-col justify-center items-center gap-16">
          <div className=" space-y-8">
            <h2 className="text-5xl lg:text-7xl text-center font-bold text-transparent bg-linear-45 from-secondary via-primary to-secondary dark:from-primary dark:via-[#eda6a9] dark:to-primary bg-clip-text">
              About Us
            </h2>
            <p className=" text-center max-w-xl text-lg">
              Eliron exists to deliver execution stability for executives
              managing complex programs under pressure.
            </p>
          </div>
          <OurApproachAnimation />
        </div>
      </section>

      {/* <section className="w-full pt-24 flex flex-col gap-5 justify-center items-center bg-gray-100 dark:bg-gray-700 py-24">
        <div className="w-full flex max-w-7xl flex-col justify-center items-center gap-5 px-5 lg:px-10 space-y-10">
          <h4 className=" text-2xl lg:text-4xl font-bold text-transparent bg-linear-45 from-secondary via-primary to-secondary dark:from-primary dark:via-[#eda6a9] dark:to-primary bg-clip-text">
            Principles
          </h4>
          <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className=" lg:pr-0 flex justify-end h-full">
              <Image
                src={"/assets/principles.jpg"}
                alt="mobile app"
                height={300}
                width={300}
                className=" w-full lg:w-[70%] h-auto rounded-2xl"
              />
            </div>
            <div className=" flex flex-col gap-16 lg:gap-28">
              <div className=" flex flex-col gap-10">
                {principles.map((item) => (
                  <div key={item?.id} className=" flex flex-col gap-3">
                    <div className=" font-bold">
                      <span className=" text-lg">{item?.id}.</span>
                      <h6 className=" text-2xl">{item?.title}</h6>
                    </div>
                    <p>{item?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="w-full pt-24 flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex max-w-7xl flex-col justify-center items-center gap-5 px-5 lg:px-10">
          <h4 className=" text-2xl lg:text-4xl font-bold text-transparent bg-linear-45 from-secondary via-primary to-secondary dark:from-primary dark:via-[#eda6a9] dark:to-primary bg-clip-text">
            Meet the team
          </h4>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {leadership.map(
              ({ id, image, name, position, linkedin, twitter }) => (
                <div key={id}>
                  <Team
                    id={id}
                    image={image}
                    position={position}
                    name={name}
                    linkedin={linkedin}
                    twitter={twitter}
                    email=""
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section> */}
    </div>
  );
}
