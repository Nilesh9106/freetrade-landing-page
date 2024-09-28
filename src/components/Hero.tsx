"use client";
import { useGSAP } from "@gsap/react";
import AnimatedButton from "./AnimatedButton";
import gsap from "gsap";
import Image from "next/image";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const Hero = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  useGSAP(() => {
    gsap.from(".animate-hero", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    });
  });
  return (
    <div className="relative h-dvh w-full flex flex-col overflow-hidden gap-6 justify-center text-center items-center">
      {init && (
        <Particles
          options={{
            style: {
              position: "absolute",
            },
            background: {
              color: {
                value: "#0a0a0a",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
              },
              modes: {
                grab: {
                  distance: 100,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 100,
                enable: false,
                opacity: 0.5,
                width: 0.5,
              },
              move: {
                direction: "none",
                enable: false,
                random: true,
                speed: 6,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 1 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
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
      <Image
        src={
          "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/6698afb189c57f3c22c8ac49_footer.avif"
        }
        alt="Footer"
        width={1000}
        height={400}
        className="h-auto w-full absolute bottom-0"
      />
    </div>
  );
};
export default Hero;
