"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(".animate", {
        y: 100,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
        },
      });
    },
    { scope: container }
  );
  return (
    <>
      <Image
        src={
          "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/6698afb189c57f3c22c8ac49_footer.avif"
        }
        alt="Footer"
        width={1000}
        height={400}
        className="h-auto w-full"
      />
      <footer ref={container} className=" py-8 px-4 md:py-12 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-2 md:flex md:justify-between lg:block">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Freetrade</h2>
              <p className="text-xs md:text-sm mb-4 md:max-w-80 lg:w-auto">
                Freetrade is your gateway to commission-free investing. Join
                over 1.5 million users using the Best online trading platform,
                as voted at the British Bank Awards for six years running.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-600 mb-2 text-sm md:text-base">
                ACCOUNTS
              </h3>
              <ul className="space-y-1 text-xs md:text-sm">
                <li>
                  <Link href="#">Stocks and shares ISA</Link>
                </li>
                <li>
                  <Link href="#">Personal pension</Link>
                </li>
                <li>
                  <Link href="#">General investment</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-600 mb-2 text-sm md:text-base">
                CUSTOMER SUPPORT
              </h3>
              <ul className="space-y-1 text-xs md:text-sm">
                <li>
                  <Link href="#">Contact</Link>
                </li>
                <li>
                  <Link href="#">Community</Link>
                </li>
                <li>
                  <Link href="#">Complaints</Link>
                </li>
                <li>
                  <Link href="#">Here for you</Link>
                </li>
                <li>
                  <Link href="#">Investment risk</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-600 mb-2 text-sm md:text-base">
                RESOURCES
              </h3>
              <ul className="space-y-1 text-xs md:text-sm">
                <li>
                  <Link href="#">Dictionary</Link>
                </li>
                <li>
                  <Link href="#">Compare plans</Link>
                </li>
                <li>
                  <Link href="#">Free share</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-600 mb-2 text-sm md:text-base">
                COMPANY
              </h3>
              <ul className="space-y-1 text-xs md:text-sm">
                <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="animate border-t border-gray-700 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">
                  IMPORTANT INFORMATION
                </h3>
                <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
                  <ul className="space-y-1">
                    <li>
                      <Link href="#">T&Cs</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy policy</Link>
                    </li>
                    <li>
                      <Link href="#">Cookie policy</Link>
                    </li>
                    <li>
                      <Link href="#">Order execution policy</Link>
                    </li>
                  </ul>
                  <ul className="space-y-1">
                    <li>
                      <Link href="#">Conflicts of interest</Link>
                    </li>
                    <li>
                      <Link href="#">Execution venues</Link>
                    </li>
                    <li>
                      <Link href="#">Keeping your money safe</Link>
                    </li>
                    <li>
                      <Link href="#">MIFIDPRU disclosures</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="text-xs mb-4">
                  Freetrade does not provide investment advice and individual
                  investors should make their own decisions or seek independent
                  advice. The value of investments can go down as well as up and
                  you may receive back less than your original investment.
                  Freetrade is a trading name of Freetrade Limited, which is a
                  member firm of the London Stock Exchange and is authorised and
                  regulated by the Financial Conduct Authority. Registered in
                  England and Wales (no. 09797821).
                </p>
                <p className="text-xs">
                  © 2024 Freetrade. All rights reserved. The Apple logo is a
                  trademark of Apple Inc. App Store is a service mark of Apple
                  Inc. Google Play and the Google Play logo are trademarks of
                  Google LLC.
                </p>
              </div>
            </div>
          </div>

          <div className="flex animate justify-end mt-8">
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-gray-300">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
