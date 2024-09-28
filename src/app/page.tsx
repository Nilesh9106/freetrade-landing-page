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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PortfolioBuilder />
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
      <Accordion />
      <Testimonial />
      <Pricing />
      <StartNow />
      <Footer />
    </>
  );
}
