"use client";
import React, { useRef } from "react";
import Card from "./RippleCard";
import { Check } from "lucide-react";
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";
import AnimatedButton2 from "./AnimatedButton2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    name: "Basic",
    price: "£0.00",
    accounts: ["General Investment Account"],
    benefits: {
      title: "Benefits",
      data: [
        "A great way to try Freetrade before transferring your ISA or pension",
        "Unlimited commission-free trades. Other charges may apply.",
        "Trade USD and EUR stocks at the exchange rate + 0.99% FX fee",
        "Access to a selection of Freetrade's 6,200+ global stocks and ETFs",
        "1% AER on up to £1,000 uninvested cash",
        "Fractional US shares",
        "Access to mobile app and web platform",
      ],
    },
    buttonLabel: "GET BASIC NOW",
    buttonLink: "#",
  },
  {
    name: "Standard",
    price: "£4.99",
    billedAnnually: "£59.88 BILLED ANNUALLY",
    accounts: ["General Investment Account", "Stocks and shares ISA"],
    benefits: {
      title: "Everything in Basic and:",
      data: [
        "Everything in Basic and:",
        "Access to 6,200+ stocks and ETFs",
        "A lower FX fee of 0.59% on non-GBP trades",
        "3% AER on up to £2,000 uninvested cash",
        "Automated order types, including recurring orders",
        "More stats and analysis, including analyst ratings and EPS estimates",
      ],
    },
    buttonLabel: "GET STANDARD NOW",
    buttonLink: "#",
  },
  {
    name: "Plus",
    price: "£9.99",
    billedAnnually: "£119.88 BILLED ANNUALLY",
    accounts: [
      "General Investment Account",
      "Stocks and shares ISA",
      "Personal pension",
    ],
    benefits: {
      title: "Everything in Standard and:",
      data: [
        "Everything in Standard and:",
        "A lower FX fee of 0.39% on non-GBP trades",
        "Priority customer service",
        "5% AER on up to £3,000 uninvested cash",
      ],
    },
    buttonLabel: "GET PLUS NOW",
    buttonLink: "#",
  },
];

const Pricing = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(".card", {
        y: 80,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
        },
      });
    },
    { scope: container }
  );
  return (
    <div className="relative overflow-hidden">
      <Image
        src={
          "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/667e66c3ba817f78b760afbe_Pricing%20Gradient.avif"
        }
        alt="Footer"
        width={1000}
        height={400}
        className="h-auto w-full -z-10 absolute  -top-20 left-0"
      />
      <div className="text-center my-10">
        <div className="text-4xl">Pick the plan that suits you best</div>
        <div className="my-3 text-lg">
          <span className="text-pink-400">Save 17%</span> when you choose an
          annual subscription.
        </div>
      </div>
      <div
        ref={container}
        className="max-w-6xl grid lg:grid-cols-3 grid-cols-1 gap-4 mx-auto"
      >
        {pricingPlans.map((plan, index) => (
          <Card key={index} className="p-6 card flex flex-col gap-6">
            <div className="h-44 flex flex-col gap-1 border-b border-neutral-800">
              <h3 className="text-2xl text-pink-500 ">{plan.name}</h3>
              <p className="text-5xl my-2">
                {plan.price} <span className="text-xs -ml-1 mb-1">/MONTH</span>
              </p>
            </div>
            <div className="flex flex-col gap-6 min-h-36">
              <div>Accounts</div>
              <ul className="flex flex-col gap-2">
                {plan.accounts.map((account, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <Check size={14} />{" "}
                    <span className="text-sm">{account}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <div>{plan.benefits.title}</div>
              <ul className="flex flex-col gap-2">
                {plan.benefits.data.map((account, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <Check size={14} />{" "}
                    <span className="text-sm">{account}</span>
                  </li>
                ))}
              </ul>
            </div>
            {index == 0 ? (
              <Link
                className="rounded-md border mt-auto border-neutral-800 uppercase px-5 py-3 bg-neutral-900/60 hover:bg-neutral-900 transition-all w-fit tracking-widest"
                href={plan.buttonLink}
              >
                {plan.buttonLabel}
              </Link>
            ) : (
              <AnimatedButton className="mt-auto">
                {plan.buttonLabel}
              </AnimatedButton>
            )}
          </Card>
        ))}
      </div>
      <div className="flex flex-col justify-center my-8">
        <AnimatedButton2 className="rounded-full mx-auto">
          Compare Plans
        </AnimatedButton2>
      </div>
    </div>
  );
};

export default Pricing;
