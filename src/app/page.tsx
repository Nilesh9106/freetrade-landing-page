import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OpenYourAccount from "@/components/OpenYourAccount";
import PortfolioBuilder from "@/components/PortfolioBuilder";
import Pricing from "@/components/Pricing";
import StartNow from "@/components/StartNow";
import Testimonial from "@/components/Testimonial";
import mobileStock from "@/assets/2mobile-stock.avif";
import pricing from "@/assets/pricing.avif";
import tabletstock from "@/assets/tabletstock.avif";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import getStartedImage from "@/assets/get-started.avif";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PortfolioBuilder />
      <div className="relative overflow-hidden py-10">
        <Image
          src={getStartedImage}
          alt="Footer"
          width={1000}
          height={400}
          className="h-auto w-full z-0 absolute  -top-32 -right-32"
        />
        <Image
          src={
            "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/66b639ec1b172a6ffca98200_Gradient1.webp"
          }
          alt="Footer"
          width={1000}
          height={400}
          className="h-auto md:w-1/2 z-0 absolute  bottom-0 left-0"
        />
        <GetStarted
          title="The home of unlimited free trades"
          description="Make your money go further with unlimited commission-free trades, fractional shares, and interest on uninvested cash."
          button={{
            href: "#",
            text: "Get started",
          }}
          image={mobileStock}
        />

        <GetStarted
          title="Your wealth, your wayz"
          description="Pick the plan that suits you best and add tax-wrapped accounts to keep more of any gains."
          button={{
            href: "#",
            text: "Get started",
          }}
          image={pricing}
        />
      </div>
      <div className="relative">
        <Image
          src={
            "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/66b629c4328cd5480062242b_Screenshot%202024-08-09%20at%2020.07.26.png"
          }
          alt="Footer"
          width={1000}
          height={400}
          className="h-auto w-full -z-10 absolute  -top-1/3 left-0"
        />
        <GetStarted
          title="Refreshingly simple"
          description="Open your account in minutes. Manage your portfolio with ease on iOS, Android, or your web browser. Use automated tools to invest regularly."
          button={{
            href: "#",
            text: "Get started",
          }}
          image={tabletstock}
        />
        <OpenYourAccount />
      </div>
      <Accordion />
      <Testimonial />
      <Pricing />
      <StartNow />
      <Footer />
    </>
  );
}
