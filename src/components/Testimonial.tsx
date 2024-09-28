"use client";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import Slider from "react-slick";

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

export default Testimonial;
