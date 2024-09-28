"use client";
import acc3 from "@/assets/acc3.avif";
import gsap from "gsap";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const accordionData = [
  {
    title: "Stock and shares ISA",
    description:
      "An ISA, or Individual Savings Account, is a flexible and tax-efficient way to invest in thousands of global stocks and ETFs. Invest up to £20,000 each year, free of capital gains tax or UK dividend tax.",
    button: {
      text: "Open an ISA",
      href: "#",
    },
    image: acc3,
  },
  {
    title: "Personal pension",
    description:
      "A SIPP, or Self-Invested Personal Pension, lets you save for your future in a tax-efficient way. Get tax relief on the first £60,000 you contribute each year. Contribute up to 100% of your annual income.",
    button: {
      text: "Open an SIPP",
      href: "#",
    },
    image: acc3,
  },
  {
    title: "General Investment Account",
    description:
      "A General Investment Account, or GIA, is for investing outside tax-efficient wrappers like ISAs or SIPPs. There’s no limit to how much you can invest in your Freetrade GIA.",
    button: {
      text: "Open an GIA",
      href: "#",
    },
    image: acc3,
  },
];

const Accordion = () => {
  const [current, setCurrent] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (current === index) {
      // Close the current item if it's clicked again
      gsap.to(`#acc${index}`, { height: 0, opacity: 0, duration: 0.5 });
      setCurrent(null);
    } else {
      // Close the previously open item (if any)
      if (current !== null) {
        gsap.to(`#acc${current}`, { height: 0, opacity: 0, duration: 0.5 });
      }
      // Open the clicked item
      gsap.to(`#acc${index}`, { height: "auto", opacity: 1, duration: 0.5 });
      setCurrent(index);
    }
  };
  return (
    <>
      <div className="lg:px-20 sm:px-10 px-5 flex max-md:flex-col">
        <div className="md:flex-1 max-md:w-full border-t border-b border-neutral-800">
          {accordionData.map((data, index) => (
            <div
              key={index}
              className="border-b flex flex-col border-neutral-800 overflow-hidden"
            >
              <div
                onClick={() => {
                  handleClick(index);
                }}
                className="flex cursor-pointer py-10 pr-10 justify-between items-center"
              >
                <span className="text-2xl">{data.title}</span>
                <Plus size={24} />
              </div>
              <div
                id={`acc${index}`}
                className={`grid accordion-content  gap-3 ${
                  current == index && "pb-10"
                } pr-10 overflow-hidden h-0 opacity-0`}
              >
                <p>{data.description}</p>
                <Link
                  className="rounded-md border border-neutral-800 uppercase px-5 py-3 bg-neutral-900/60 hover:bg-neutral-900 transition-all w-fit tracking-widest"
                  href={data.button.href}
                >
                  {data.button.text}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="md:flex-1 max-md:w-full min-h-[340px]  relative md:border-l md:border-t border-b border-neutral-800">
          {accordionData.map((data, index) => {
            return (
              <div
                key={index}
                className="w-full h-full p-3 absolute top-0 right-0 flex flex-col items-center justify-center"
              >
                <Image
                  src={data.image}
                  alt="acc3"
                  className={`w-auto mx-auto h-[80%] my-auto transition-all ${
                    current != index ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <p className="uppercase text-neutral-300 tracking-widest font-light xl:px-44 lg:px-40 md:px-32 px-8 py-20">
        ISA and SIPP eligibility rules apply. US dividends received into your
        SIPP may be subject to US withholding tax.
        <br />
        <br />
        A SIPP is a pension designed for you to save until your retirement and
        is for people who want to make their own investment decisions. You can
        normally only draw your pension from age 55 (57 from 2028), except in
        special circumstances.
        <br />
        <br />
        At present, Freetrade only supports Uncrystallised Fund Pension Lump
        Sums (UFPLS) for customers who wish to withdraw funds from their SIPP
        after their 55th birthday. We strongly encourage you to seek financial
        advice before making any withdrawals from your SIPP.
      </p>
    </>
  );
};

export default Accordion;
