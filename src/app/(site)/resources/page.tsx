"use client"

import { getResources } from "@/app/data/data";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

const ITEMS_PER_PAGE = 5;

export default function ResourcesPage() {
    const resources = getResources();
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(resources.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedResources = resources.slice(startIndex, endIndex);

    return (
        <section className="sm:mt-28 pt-28 sm:pb-28 pb-12 dark:bg-dark">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-darktext dark:text-white mb-4">Resources</h1>
                    <p className="text-muted dark:text-white/60 text-lg">
                        Download our strategic plans, reports, and documentation to stay informed about our initiatives.
                    </p>
                </div>

                {/* Resources Table */}
                <div className="overflow-x-auto rounded-lg shadow-lg">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border dark:border-dark_border bg-gray-50 dark:bg-gray-800">
                                <th className="px-6 py-4 text-left font-semibold text-darktext dark:text-white">Title</th>
                                <th className="px-6 py-4 text-left font-semibold text-darktext dark:text-white">Description</th>
                                <th className="px-6 py-4 text-left font-semibold text-darktext dark:text-white">Date</th>
                                <th className="px-6 py-4 text-center font-semibold text-darktext dark:text-white">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedResources.map((resource, index) => (
                                <tr
                                    key={index}
                                    className={`border-b border-border dark:border-dark_border transition-colors ${index % 2 === 0
                                        ? "bg-white dark:bg-gray-900"
                                        : "bg-gray-50 dark:bg-gray-800"
                                        } hover:bg-gray-100 dark:hover:bg-gray-700`}
                                >
                                    <td className="px-6 py-4 font-medium text-darktext dark:text-white">
                                        {resource.title}
                                    </td>
                                    <td className="px-6 py-4 text-muted dark:text-white/60 text-sm">
                                        {resource.description}
                                    </td>
                                    <td className="px-6 py-4 text-muted dark:text-white/60 text-sm">
                                        {new Date(resource.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <Link
                                            href={resource.docUrl}
                                            download
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary text-white font-medium rounded-md transition-colors duration-300"
                                        >
                                            <Icon icon="solar:download-linear" width="18" height="18" />
                                            Download
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8">
                        <button
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-2 border border-border dark:border-dark_border rounded text-darktext dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <Icon icon="solar:arrow-left-linear" width="18" height="18" />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-2 rounded transition-colors ${currentPage === page
                                        ? "bg-primary text-white"
                                        : "border border-border dark:border-dark_border text-darktext dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-2 border border-border dark:border-dark_border rounded text-darktext dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <Icon icon="solar:arrow-right-linear" width="18" height="18" />
                        </button>
                    </div>
                )}

                {/* Empty State */}
                {resources.length === 0 && (
                    <div className="text-center py-12">
                        <Icon
                            icon="solar:document-text-linear"
                            width="64"
                            height="64"
                            className="text-muted mx-auto mb-4"
                        />
                        <p className="text-muted dark:text-white/60 text-lg">
                            No resources available at this time.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
