"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import AnimatedButton2 from "./AnimatedButton2";
import appleStock from "@/assets/apple-stock.avif";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Tax-wrapped accounts",
  "Unlimited commission-free trades",
  "Direct access to UK Treasury bills",
  "Easy to use on desktop and mobile",
  "Voted Best online trading platform six years running at the British Bank Awards",
];

const PortfolioBuilder: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from("#left", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
      });
      gsap.from("#right", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
      });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="md:p-20 p-5 flex  max-lg:flex-col gap-5 flex-nowrap"
    >
      <div id="left" className="lg:w-[460px] w-full flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="uppercase text-sm tracking-wide">
            Award-winning platform
          </p>
          <h2 className="font-extrabold text-4xl tracking-tighter">
            BUILD A PORTFOLIO TO MEET YOUR GOALS
          </h2>
          <p className="text-lg">
            Invest commission-free in thousands of UK, US, and European stocks
            and ETFs.
          </p>
        </div>
        <ul className="grid gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-2 items-center">
              <Check size={20} />
              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>
        <AnimatedButton2 className="my-4 w-fit uppercase tracking-widest">
          Start Now
        </AnimatedButton2>
        <div className="my-2 flex gap-5">
          <Image
            src={
              "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/667ba78838831c6a4212e9c8_boring%20money.avif"
            }
            alt="Boring"
            width={80}
            height={80}
            className="rounded-full max-sm:h-16 max-sm:w-16"
          />
          <Image
            src={
              "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/669a5fa02f4e79c4f967a082_665ee5ec2f33c30686a82f1f_british-bank-new-p-500.webp"
            }
            alt="Boring"
            width={300}
            height={80}
            className="rounded-full w-auto max-sm:h-16"
          />
        </div>
      </div>
      <div id="right" className="flex-1 flex gap-10 flex-col justify-between">
        <Image src={appleStock} alt="Apple Stock" className="w-full h-auto" />
        <div className="flex justify-end">
          <div>
            <p className="uppercase text-sm font-thin tracking-widest">
              stock group Other charges may apply.
            </p>
            <p className="uppercase text-sm font-thin tracking-widest">
              Always do your own research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBuilder;
