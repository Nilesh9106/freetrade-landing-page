"use client";
import { useGSAP } from "@gsap/react";
import AnimatedButton2 from "./AnimatedButton2";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  title: string;
  description: string;
  button: {
    text: string;
    href: string;
  };
  image: StaticImageData;
};

const GetStarted = (props: Props) => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from("#left", {
        x: -70,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
      });
      gsap.from("#right", {
        x: 70,
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
    <div ref={container} className="flex max-lg:flex-col gap-8 md:p-20 p-5">
      <div
        id="left"
        className="flex flex-col gap-4 lg:w-[40%] w-full mac-lg:text-center max-lg:items-center justify-center"
      >
        <h2 className="font-extrabold xl:text-6xl lg:text-5xl text-4xl uppercase tracking-tighter">
          {props.title}
        </h2>
        <p className="tracking-wide">{props.description}</p>
        <AnimatedButton2 className="my-4 w-fit  uppercase tracking-widest">
          {props.button.text}
        </AnimatedButton2>
      </div>
      <div id="right" className="flex-1">
        <Image src={props.image} alt="Mobile Stock" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default GetStarted;
