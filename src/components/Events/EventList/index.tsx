"use client"

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Eventdata } from "@/app/data/data";
import { format, isWithinInterval, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } from "date-fns";
import { useState, useEffect } from "react";

type DateFilter = "all" | "week" | "month" | "year";

const EventList = () => {
  const [selectedFilter, setSelectedFilter] = useState<DateFilter>("all");
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after mount to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter events based on selected date range
  const getFilteredEvents = () => {
    // During SSR, return all events sorted by date
    if (!isClient) {
      return Eventdata.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    const now = new Date();

    let filtered: typeof Eventdata;

    switch (selectedFilter) {
      case "week":
        filtered = Eventdata.filter((event) => {
          const eventDate = new Date(event.date);
          return isWithinInterval(eventDate, {
            start: startOfWeek(now),
            end: endOfWeek(now),
          });
        });
        break;
      case "month":
        filtered = Eventdata.filter((event) => {
          const eventDate = new Date(event.date);
          return isWithinInterval(eventDate, {
            start: startOfMonth(now),
            end: endOfMonth(now),
          });
        });
        break;
      case "year":
        filtered = Eventdata.filter((event) => {
          const eventDate = new Date(event.date);
          return isWithinInterval(eventDate, {
            start: startOfYear(now),
            end: endOfYear(now),
          });
        });
        break;
      default:
        filtered = Eventdata;
    }

    // Sort by date in descending order (latest first)
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  const displayedEvents = getFilteredEvents().slice(0, 6);

  return (
    <section className="lg:py-28 py-16 dark:bg-dark">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        {/* Filter Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-darktext dark:text-white">Events</h2>

          {/* Date Filter Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 text-darktext dark:text-white border border-border dark:border-dark_border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
              <Icon icon="solar:calendar-linear" width="18" height="18" />
              <span className="text-sm">
                {selectedFilter === "all" && "All Events"}
                {selectedFilter === "week" && "This Week"}
                {selectedFilter === "month" && "This Month"}
                {selectedFilter === "year" && "This Year"}
              </span>
              <Icon icon="solar:chevron-down-linear" width="16" height="16" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded border border-border dark:border-dark_border shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <button
                onClick={() => setSelectedFilter("all")}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${selectedFilter === "all" ? "bg-gray-100 dark:bg-gray-700 text-primary font-medium" : "text-darktext dark:text-white"
                  }`}
              >
                All Events
              </button>
              <button
                onClick={() => setSelectedFilter("week")}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${selectedFilter === "week" ? "bg-gray-100 dark:bg-gray-700 text-primary font-medium" : "text-darktext dark:text-white"
                  }`}
              >
                This Week
              </button>
              <button
                onClick={() => setSelectedFilter("month")}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${selectedFilter === "month" ? "bg-gray-100 dark:bg-gray-700 text-primary font-medium" : "text-darktext dark:text-white"
                  }`}
              >
                This Month
              </button>
              <button
                onClick={() => setSelectedFilter("year")}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${selectedFilter === "year" ? "bg-gray-100 dark:bg-gray-700 text-primary font-medium" : "text-darktext dark:text-white"
                  }`}
              >
                This Year
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {displayedEvents.map((item, index) => (
            <Link key={index} href={`/events/event-details?event=${item.slug}`} className="group" data-aos="fade-up" data-aos-delay={`${index * 120}`}>
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
              <h5 className="text-yellow-400 hover:text-warning text-base font-medium flex gap-3 items-center w-fit">
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
        <div className="flex justify-center mt-12">
          <Link
            href="/events/all"
            className="px-8 py-3 bg-primary hover:bg-secondary text-white font-medium rounded-md transition-colors duration-300 flex items-center gap-2"
          >
            See More
            <Icon
              icon="solar:arrow-right-linear"
              width="20"
              height="20"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventList;
