import dynamic from "next/dynamic";

export const InfiniteScroll = dynamic(
  () => import("@/app/_components/animations/image-infinite-scroll"),
  {
    loading: () => <p>Our partners...</p>,
    ssr: false,
  }
);
export const BlurAndGradient = dynamic(
  () => import("@/app/_components/animations/blur-and-gradient"),
  {
    loading: () => <p></p>,
    ssr: false,
  }
);
export const ParticleAnimation = dynamic(
  () => import("@/app/_components/animations/particle-animations"),
  {
    loading: () => <p></p>,
    ssr: false,
  }
);
