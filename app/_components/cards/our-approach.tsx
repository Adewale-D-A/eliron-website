"use client";
import {
  ChartNetwork,
  HeartPulse,
  Joystick,
  Pyramid,
  RefreshCcw,
} from "lucide-react";
import { ReactNode } from "react";
import useInView from "@/app/_hooks/use-in-view";
import { motion } from "framer-motion";

export function OurApproachCard({
  icon,
  title,
  description,
  position = 0,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  position?: 1 | 0;
}) {
  const [ref, isInView] = useInView();

  return (
    <div ref={ref}>
      {isInView ? (
        <motion.div
          initial={{ x: Boolean(position) ? "200vw" : "-100vw" }} // start off-screen to the left
          animate={{ x: 0 }} // animate into position
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 2000,
          }}
          className=" w-full shadow-lg dark:shadow-gray-700 rounded-3xl  flex flex-col items-start gap-4 p-4"
        >
          <div className=" flex items-center space-x-4">
            <div className=" rounded-full p-3 bg-secondary dark:bg-primary w-fit text-white">
              {icon}
            </div>
            <h6 className=" font-bold text-2xl">{title}</h6>
          </div>
          <p className=" text-lg px-2">{description}</p>
        </motion.div>
      ) : (
        <div className=" w-full h-28"></div>
      )}
    </div>
  );
}
export function OurApproachCardOne() {
  return (
    <OurApproachCard
      icon={<Pyramid className="size-6 lg:size-8" />}
      title="Our Purpose"
      description="Eliron exists to elevate project delivery performance in environments where ambiguity and risk are norms, not exceptions. We help organisations and senior delivery professionals apply institutional quality frameworks that reduce uncertainty, boost predictability, and align execution to strategic intent."
      position={0}
    />
  );
}

export function OurApproachCardTwo() {
  return (
    <OurApproachCard
      icon={<Joystick className="size-6 lg:size-8" />}
      title="Our Approach"
      description="Eliron’s methodology is built on proven delivery science and real-world experience. We focus on practicality over theory, offering tools and playbooks that support decision-making, provide clarity in complexity, and standardise excellence across teams."
      position={1}
    />
  );
}
export function OurApproachCardThree() {
  return (
    <OurApproachCard
      icon={<ChartNetwork className="size-6 lg:size-8" />}
      title="Who We Are Not"
      description="We are not a personal brand, career-coaching service, or job search platform. Eliron is institutional, enterprise-safe, and tailored for organisations and professionals who lead momentous projects and programmes."
      position={0}
    />
  );
}

export function OurApproachCardFour() {
  return (
    <OurApproachCard
      icon={<RefreshCcw className="size-6 lg:size-8" />}
      title="Our Commitment"
      description="We prioritise rigor, repeatability, and results. Every product and advisory engagement is designed to support sustainable performance improvements at scale."
      position={1}
    />
  );
}
