"use client"

import Link from "next/link";
import { Eventdata, getResources } from "@/app/data/data";
import BlogCard from "./EventCard";

const HomeUpdates = () => {
    const events = Eventdata
        .filter(event => !event.isFeatured)
        .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB.getTime() - dateA.getTime(); // Most recent first
        })
        .slice(0, 3);
    const resources = getResources().slice(0, 3);
    const youtubeVideoId = "https://www.youtube.com/watch?v=9-fp0Av8D1w";

    const handleDownload = (docUrl: string) => {
        const link = document.createElement('a');
        link.href = docUrl;
        link.download = docUrl.split('/').pop() || 'document';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const truncateText = (text: string, maxLength: number = 80) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <section className="lg:py-28 py-16 dark:bg-dark">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                {/* Main Heading */}
                <div className="text-start mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                        Stay Up to Date with Productivity Acceleration Bureau
                    </h2>
                </div>

                {/* Video and Events Columns */}
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 mb-2">
                    {/* Video Column */}
                    <div className="" data-aos="fade-right">
                        <h3 className="text-xl font-medium mb-4">Video Updates & News</h3>
                        <div className="aspect-video w-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/5P1362K5WAU?si=rfpeVXhw2xj-a2q-"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </div>

                    {/* Upcoming Events Column */}
                    <div className="lg:mt-0 mt-8">
                        <div className="flex justify-between items-center border-b border-border dark:border-dark_border focus:border-primary dark:focus:border-primary dark:bg-dark pb-6 mb-8 focus-visible:outline-none-10">
                            <h4 className="text-base mb-0">
                                News, Updates and Activities
                            </h4>
                            <Link href="/events" className="text-error hover:text-warning text-base">
                                View all
                            </Link>
                        </div>
                        {events.map((event, i) => (
                            <div key={i} className="lg:mb-10 mb-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                <BlogCard event={event} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Resources Section */}
                <div>
                    <h3 className="text-2xl font-bold mb-2 text-left">Resources</h3>
                    <p className="text-base text-muted dark:text-white/60 mb-8">
                        Resources for download by PAB
                    </p>
                    <div className="space-y-4">
                        {resources.map((resource, index) => (
                            <div
                                key={index}
                                onClick={() => handleDownload(resource.docUrl)}
                                className="flex items-center justify-between p-4 border-b border-border dark:border-dark_border hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-all duration-300 group"
                            >
                                <div className="flex-1">
                                    <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">{resource.title}</h4>
                                    <p className="text-base text-muted dark:text-white/60">
                                        {truncateText(resource.description)}
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-primary group-hover:translate-x-1 group-hover:text-primary transition-all duration-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeUpdates;