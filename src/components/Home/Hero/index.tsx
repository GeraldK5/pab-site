"use client"

import { useContext, useState, useRef, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Eventdata } from "@/app/api/data";
import DonationFormContext from "@/app/context/donationContext";
import { Test } from "./Test";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderHandle {
  slickNext(): void;
  slickPrev(): void;
}

const Hero = () => {
  const donationInfo = useContext(DonationFormContext);
  const sliderRef = useRef<SliderHandle>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter featured events only
  const featuredEvents = Eventdata.filter((event) => event.isFeatured);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden lg:mt-40 sm:mt-44 mt-20">
      <Slider ref={sliderRef} {...settings} className="w-full h-full">
        {featuredEvents.map((event, index) => (
          <div key={index} className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Background Image */}
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover w-full h-full"
              priority={index === 0}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content Container - Left Side */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 lg:max-w-[--breakpoint-xl]">
                <div className="max-w-[50vw]">
                  <div className="bg-black/50 backdrop-blur-sm p-8 md:p-10 border-b-4 border-yellow-400">
                    <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold leading-snug break-words">
                      {event.title}
                    </h2>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Left Navigation Button - Hidden on mobile */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 z-20"
        aria-label="Previous slide"
      >
        <Icon icon="mdi:chevron-left" fontSize={28} />
      </button>

      {/* Right Navigation Button - Hidden on mobile */}
      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 z-20"
        aria-label="Next slide"
      >
        <Icon icon="mdi:chevron-right" fontSize={28} />
      </button>

      {/* Slide Indicators - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {featuredEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => sliderRef.current?.slickGoTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
              ? "bg-yellow-400 w-8"
              : "bg-white/40 w-2 hover:bg-white/60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;