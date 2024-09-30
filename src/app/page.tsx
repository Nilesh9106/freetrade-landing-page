"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Check,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Plus,
  Star,
  Twitter,
} from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Slider from "react-slick";

gsap.registerPlugin(ScrollTrigger);

type AnimatedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      {...props}
      ref={ref}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (ref.current) {
          ref.current.style.background = `radial-gradient(circle 40px at ${x}px ${y}px, #D358D7, #8658d7 100%)`;
        }
      }}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.background = `#8658d7`;
        }
      }}
      className={`bg-[#8658d7] text-white py-3 px-5 rounded ${className} `}
    >
      {children}
    </button>
  );
};

const AnimatedButton2: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`bg-white text-black group hover:bg-neutral-900 relative hover:text-white transition-all py-3 px-5 rounded-full ${className} `}
    >
      <span className="absolute group-hover:-inset-[1px] block duration-500  -z-20 rounded-full  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 "></span>
      {children}
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between z-50  xl:px-20 px-10 h-20 bg-neutral-950/50 backdrop-blur-md">
      <div className="font-semibold px-5  text-lg tracking-wide">Freetrade</div>
      <ul className="flex max-lg:hidden gap-6 items-center">
        <li className="nav-item">Stocks and Shares ISA</li>
        <li className="nav-item">Personal Pension</li>
        <li className="nav-item">General Investment Account</li>
      </ul>
      <div className="flex max-lg:hidden gap-6 items-center">
        <div className="nav-item">Support</div>
        <div className="nav-item">Log in</div>
        <AnimatedButton className="text-sm uppercase">
          Get Started
        </AnimatedButton>
      </div>
      <Menu className="lg:hidden" />
    </nav>
  );
};

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
        <Image
          src={
            "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/66d59fbe4799f44fbd88620f_Group%20316132198.avif"
          }
          alt="Apple Stock"
          width={800}
          height={800}
          className="w-full h-auto"
        />
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

type Props = {
  title: string;
  description: string;
  button: {
    text: string;
    href: string;
  };
  image: string;
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
        <Image
          src={props.image}
          width={800}
          height={800}
          priority={true}
          alt="Mobile Stock"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

const OpenYourAccount = () => {
  return (
    <div className="py-24 flex flex-col gap-10 justify-center items-center text-center">
      <div>
        <h3 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl uppercase font-extrabold tracking-tighter  font-sans">
          Your gateway to
        </h3>
        <h3 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl uppercase font-extrabold tracking-tighter  font-sans">
          commission-free investing
        </h3>
      </div>
      <AnimatedButton2 className="uppercase tracking-widest md:text-lg max-sm:text-sm px-6">
        Open your Account now
      </AnimatedButton2>
    </div>
  );
};

const accordionData = [
  {
    title: "Stock and shares ISA",
    description:
      "An ISA, or Individual Savings Account, is a flexible and tax-efficient way to invest in thousands of global stocks and ETFs. Invest up to £20,000 each year, free of capital gains tax or UK dividend tax.",
    button: {
      text: "Open an ISA",
      href: "#",
    },
    image:
      "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/66cdb1451ddb397f172cc409_ISA%20(1).avif",
  },
  {
    title: "Personal pension",
    description:
      "A SIPP, or Self-Invested Personal Pension, lets you save for your future in a tax-efficient way. Get tax relief on the first £60,000 you contribute each year. Contribute up to 100% of your annual income.",
    button: {
      text: "Open an SIPP",
      href: "#",
    },
    image:
      "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/66cde2278a2bbd090799cc4e_SIPP%20graphic.avif",
  },
  {
    title: "General Investment Account",
    description:
      "A General Investment Account, or GIA, is for investing outside tax-efficient wrappers like ISAs or SIPPs. There’s no limit to how much you can invest in your Freetrade GIA.",
    button: {
      text: "Open an GIA",
      href: "#",
    },
    image:
      "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/66ceb9c28651f6f72bf1fbbf_gia%20illustration.avif",
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
                  width={500}
                  height={500}
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

const reviews = [
  {
    title: "Great platform",
    description: "Great platform, easy to use",
    username: "John Doe",
    date: "9 September",
    rating: 5,
  },
  {
    title: "Excellent service",
    description: "The customer service is top-notch.",
    username: "Jane Smith",
    date: "10 September",
    rating: 5,
  },
  {
    title: "User-friendly",
    description: "The interface is very user-friendly.",
    username: "Alice Johnson",
    date: "11 September",
    rating: 4,
  },
  {
    title: "Highly recommend",
    description: "I highly recommend this platform.",
    username: "Bob Brown",
    date: "12 September",
    rating: 5,
  },
  {
    title: "Good experience",
    description: "Had a good experience overall.",
    username: "Charlie Davis",
    date: "13 September",
    rating: 4,
  },
  {
    title: "Very satisfied",
    description: "I am very satisfied with the service.",
    username: "Diana Evans",
    date: "14 September",
    rating: 5,
  },
  {
    title: "Great features",
    description: "The features are great and easy to use.",
    username: "Frank Green",
    date: "15 September",
    rating: 4,
  },
  {
    title: "Fantastic",
    description: "Fantastic platform, highly recommend.",
    username: "Grace Harris",
    date: "16 September",
    rating: 5,
  },
  {
    title: "Love it",
    description: "I love using this platform.",
    username: "Henry Jackson",
    date: "17 September",
    rating: 5,
  },
  {
    title: "Very intuitive",
    description: "The platform is very intuitive.",
    username: "Ivy King",
    date: "18 September",
    rating: 4,
  },
  {
    title: "Exceptional",
    description: "The service is exceptional.",
    username: "Jack Lee",
    date: "19 September",
    rating: 5,
  },
];

const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  useEffect(() => {
    // as screen goes
    const handleResize = () => {
      if (window.innerWidth < 440) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="py-10 xl:px-20 md:px-10 px-5">
      <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-extrabold tracking-tighter text-center">
        JOIN OVER 1.5 MILLION USERS
      </h1>
      <div className="mt-16 px-3">
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToShow}
        >
          {reviews.map((review, index) => (
            <div key={index} className="p-5 flex flex-col gap-3 items-center">
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <div key={index} className="p-1 rounded bg-green-500">
                    <Star key={index} size={14} />
                  </div>
                ))}
              </div>
              <div className="text-lg font-bold">{review.title}</div>
              <div className="text-sm">{review.description}</div>
              <div className="text-sm">
                {review.username}{" "}
                <span className="text-neutral-400">{review.date}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      {...props}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (ref.current) {
          ref.current.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, #2F2F2F, #151515 100%)`;
        }
      }}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.background = `#151515`;
        }
      }}
      className={`rounded-lg border border-neutral-800 bg-[#151515] ${className}`}
    >
      {children}
    </div>
  );
};

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

const StartNow = () => {
  return (
    <div className="py-24 flex flex-col gap-10 justify-center items-center text-center">
      <div>
        <h3 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl uppercase font-extrabold tracking-tighter  font-sans">
          You’re just minutes away from
        </h3>
        <h3 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl uppercase font-extrabold tracking-tighter  font-sans">
          commission-free investing
        </h3>
      </div>
      <AnimatedButton className="uppercase tracking-widest rounded-full md:text-lg max-sm:text-sm px-6">
        start now
      </AnimatedButton>
      <p className="uppercase tracking-wider">
        When you invest, your capital is at risk
      </p>
    </div>
  );
};

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
          start: "top 70%",
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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PortfolioBuilder />
      <div className="relative overflow-hidden py-10">
        <Image
          src={
            "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/66b6288de425899557f5dbc0_Group%20316132191.avif"
          }
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
          image={
            "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/66d1d8462ddc2baf9cb0726f_image%2048.avif"
          }
        />

        <GetStarted
          title="Your wealth, your wayz"
          description="Pick the plan that suits you best and add tax-wrapped accounts to keep more of any gains."
          button={{
            href: "#",
            text: "Get started",
          }}
          image={
            "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/66d14a8eff60cb0c66142c5a_Plans.avif"
          }
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
          image={
            "https://cdn.prod.website-files.com/66289cd2c30bc8d40bd60733/66d14af4378d15d4c19c1108_tablet%20phone.avif"
          }
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
