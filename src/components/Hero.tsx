"use client";
import { useGSAP } from "@gsap/react";
import AnimatedButton from "./AnimatedButton";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".animate-hero", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    });
  });
  return (
    <div className="h-dvh w-full flex flex-col gap-6 justify-center text-center items-center">
      <h1 className="xl:text-8xl animate-hero lg:text-7xl text-5xl font-extrabold tracking-tighter  font-sans">
        INVESTING. SIMPLIFIED.
      </h1>
      <p className="animate-hero tracking-wide text-lg">
        Your commission-free, self-directed investment platform.
      </p>
      <AnimatedButton className="animate-hero rounded-full uppercase tracking-widest">
        open your Account now
      </AnimatedButton>
      <p className="uppercase animate-hero text-sm tracking-wide">
        When you invest, your capital is at risk. Other charges may apply.
      </p>
    </div>
  );
};
export default Hero;
