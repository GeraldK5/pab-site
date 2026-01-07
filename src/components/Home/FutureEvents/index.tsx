"use client"

import { useRef, useState } from "react";
import { Eventdata } from "@/app/api/data";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderHandle {
  slickNext(): void;
  slickPrev(): void;
}

const FutureEvents = () => {
  const sliderRef = useRef<SliderHandle>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter featured events
  const featuredEvents = Eventdata.filter((event) => event.isFeatured);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="lg:py-10 py-8 dark:bg-dark">
      <div className="container mx-auto lg:max-w-[--breakpoint-xl] px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-3" data-aos="fade-left">
            Featured Events
          </h2>
          <p className="text-base text-muted dark:text-white/60 mx-auto lg:max-w-60%">
            Join us at local events to make a difference! Connect, volunteer, and support our mission in your community.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Carousel */}
          <Slider ref={sliderRef} {...settings}>
            {featuredEvents.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    {/* Date Badge */}
                    <div className="flex items-center gap-2 text-sm text-muted dark:text-white/60 mb-4">
                      <Icon icon="mdi:calendar" width="20" height="20" />
                      <span>{format(new Date(item.date), "dd MMM, yyyy")}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-semibold mb-4 line-clamp-2 hover:text-primary transition-colors duration-200">
                      <Link href={`/events/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h4>

                    {/* Description */}
                    <p className="text-muted dark:text-white/60 text-sm mb-6 line-clamp-3">
                      {item.text}
                    </p>

                    {/* Learn More Link */}
                    <Link 
                      href={`/events/${item.slug}`}
                      className="text-error hover:text-warning text-base font-medium flex gap-2 items-center w-fit group"
                    >
                      Learn More
                      <Icon
                        icon="solar:arrow-right-linear"
                        width="20"
                        height="20"
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 hover:bg-primary hover:text-white text-gray-800 dark:text-white rounded-lg shadow-lg transition-all duration-300 z-10 border-2 border-gray-200 dark:border-gray-700"
            aria-label="Previous slides"
          >
            <Icon icon="mdi:chevron-left" fontSize={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 hover:bg-primary hover:text-white text-gray-800 dark:text-white rounded-lg shadow-lg transition-all duration-300 z-10 border-2 border-gray-200 dark:border-gray-700"
            aria-label="Next slides"
          >
            <Icon icon="mdi:chevron-right" fontSize={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FutureEvents;