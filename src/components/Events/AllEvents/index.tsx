"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Eventdata } from "@/app/api/data";
import { format } from "date-fns";

const ITEMS_PER_PAGE = 12;

const PaginatedEventList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Eventdata.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEvents = Eventdata.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="lg:py-28 py-16 dark:bg-dark">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-darktext mb-4">All Activities</h2>
          <p className="text-muted dark:text-white/60">
            Showing {startIndex + 1} - {Math.min(endIndex, Eventdata.length)} of {Eventdata.length} activities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {currentEvents.map((item, index) => (
            <Link 
              key={index} 
              href={`/events/${item.slug}`} 
              className="group" 
              data-aos="fade-up" 
              data-aos-delay={`${index * 120}`}
            >
              <div className="relative overflow-hidden mb-8">
                <Image
                  src={item.image}
                  alt="image"
                  width={350}
                  height={200}
                  className="w-full h-auto group-hover:scale-110 duration-300 scale-[1.01]" 
                />
                <div className="px-3 py-2 bg-linear-to-r from-primary to-secondary absolute z-1 top-3 right-3 rounded-sm">
                  <p className="text-white text-sm mb-0 text-center">
                    <span className="block ">
                      {format(new Date(item.date), "MMM")}
                    </span>
                    <span className="block text-2xl">
                      {format(new Date(item.date), "dd")}
                    </span>
                  </p>
                </div>
              </div>
              <h4 className="text-lg font-medium mb-6 group-hover:text-primary">
                {item.title}
              </h4>
              <p className="text-muted dark:text-white/60 text-base mb-6">{item.text}</p>
              <h5 className="text-error hover:text-warning text-base font-medium flex gap-3 items-center w-fit">
                Learn More
                <span>
                  <Icon
                    icon="solar:arrow-right-linear"
                    width="20"
                    height="20"
                  />
                </span>
              </h5>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-300 ${
              currentPage === 1
                ? "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-secondary text-white"
            }`}
          >
            <Icon
              icon="solar:arrow-left-linear"
              width="20"
              height="20"
            />
            Previous
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`w-10 h-10 rounded-md font-medium transition-all duration-300 ${
                  currentPage === page
                    ? "bg-primary text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-darktext dark:text-white hover:bg-primary hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-secondary text-white"
            }`}
          >
            Next
            <Icon
              icon="solar:arrow-right-linear"
              width="20"
              height="20"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaginatedEventList;
