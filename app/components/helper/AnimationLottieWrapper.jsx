"use client";

import dynamic from "next/dynamic";

// Dynamically import AnimationLottie with SSR disabled (client-only)
const AnimationLottie = dynamic(() => import("./animation-lottie"), { ssr: false });

export default function AnimationLottieWrapper(props) {
  return <AnimationLottie {...props} />;
}
