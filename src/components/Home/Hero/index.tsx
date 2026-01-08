"use client"

import { useContext, useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Eventdata } from "@/app/data/data";
import { Test } from "./Test";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderHandle {
  slickNext(): void;
  slickPrev(): void;
}

const Hero = () => {
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
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden lg:mt-20 sm:mt-22 mt-10">
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
            <div className="absolute inset-0 bg-black/15"></div>

            {/* Content Container - Below Center */}
            <div className="absolute inset-0 flex items-center pt-15">
              <div className="flex container mx-auto px-4 lg:max-w-[--breakpoint-xl]">
                <div className="max-w-[50vw]">
                  <div className="bg-black/50 backdrop-blur-sm p-4 md:p-5 lg:p-6 border-b-4 border-yellow-400">
                    <h2 className="text-white text-xs md:text-sm lg:text-base font-semibold leading-snug line-clamp-2">
                      {event.title}
                    </h2>
                    <p className="text-white text-xs md:text-xs lg:text-sm mt-2 line-clamp-2">
                      {event.text}
                    </p>
                  </div>
                  {/* Read More Link */}
                  <Link href={`/events/event-details?event=${event.slug}`}>
                    <div className="flex items-end gap-2 mt-4 cursor-pointer hover:opacity-80 transition-opacity">
                      <span className="text-primary font-bold text-sm">Read More</span>
                      <Icon icon="solar:arrow-right-linear" className="text-primary text-base" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Left Navigation Button - Simple Arrow */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 items-center justify-center text-white transition-all duration-300 z-10 hover:text-yellow-400"
        aria-label="Previous slide"
      >
        <Icon icon="mdi:chevron-left" fontSize={48} />
      </button>

      {/* Right Navigation Button - Simple Arrow */}
      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 items-center justify-center text-white transition-all duration-300 z-10 hover:text-yellow-400"
        aria-label="Next slide"
      >
        <Icon icon="mdi:chevron-right" fontSize={48} />
      </button>

      {/* Slide Indicators - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {featuredEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => { }}
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