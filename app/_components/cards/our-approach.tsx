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
          className=" w-full shadow-lg dark:shadow-gray-700 rounded-3xl lg:rounded-full flex items-center gap-4 p-4"
        >
          <div className=" rounded-full p-4 bg-secondary dark:bg-primary w-fit text-white">
            {icon}
          </div>
          <div>
            <h6 className=" font-bold text-lg">{title}</h6>
            <p>{description}</p>
          </div>
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
      icon={<Pyramid className="size-10 lg:size-14" />}
      title="Stabilize"
      description="Immediate clarity, cadence, and control."
      position={0}
    />
  );
}

export function OurApproachCardTwo() {
  return (
    <OurApproachCard
      icon={<Joystick className="size-10 lg:size-14" />}
      title="Control"
      description="Weekly operating rhythm, reporting, and escalation."
      position={1}
    />
  );
}
export function OurApproachCardThree() {
  return (
    <OurApproachCard
      icon={<ChartNetwork className="size-10 lg:size-14" />}
      title="Proof of Concept"
      description="Pilots with clinics, labs, and diagnostic centers validated our core automation and data-capture features."
      position={0}
    />
  );
}

export function OurApproachCardFour() {
  return (
    <OurApproachCard
      icon={<RefreshCcw className="size-10 lg:size-14" />}
      title="Transition"
      description="Smooth exit, leaving systems sustainable."
      position={1}
    />
  );
}
