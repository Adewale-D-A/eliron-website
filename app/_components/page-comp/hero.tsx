import ParticleAnimation from "@/app/_components/animations/particle-animations";
import BlurAndGradient from "../animations/blur-and-gradient";

export default function HeroBanner() {
  return (
    <div className=" w-full h-screen max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
      <div className="w-full  overflow-hidden absolute top-[0px] z-[-5] left-0  flex justify-center">
        <BlurAndGradient />
      </div>
      <div className=" space-y-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight">
          Execution Stability for Complex Programs Under Pressure
        </h2>
        <p className=" text-2xl">
          Independent advisory and delivery oversight for executives navigating
          high-stakes initiatives.
        </p>
      </div>
      <ParticleAnimation />
    </div>
  );
}
