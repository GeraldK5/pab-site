"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { DocNavigation } from "./DocNavigation";

type DocumentItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  version: string;
  format: string;
  size: string;
  updated: string;
  fileUrl: string;
};

const ITEMS_PER_PAGE = 10;

export const Introduction = () => {
  const [docNavbarOpen, setDocNavbarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const documents: DocumentItem[] = [
    {
      id: "1",
      title: "Bukedi Strategic Plan",
      description:
        "The Bukedi Strategic Plan aims to transform Bukedi sub-region into a prosperous and resilient region by 2040. .",
      category: "Region Strategic Plan",
      version: "v1",
      format: "PDF",
      size: "2.4 MB",
      updated: "August 2025",
      fileUrl: "/docs/doc.pdf",
    },
    {
      id: "2",
      title: "Summary of Bukedi Strategic Plan",
      description:
        "This strategic plan introduces a comprehensive blueprint aimed at transforming Bukedi into an economically viable and resilient region.",
      category: "Summary Document",
      version: "v1.1",
      format: "PDF",
      size: "1.8 MB",
      updated: "November 2025",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "3",
      title: "Report for Conducting the Kibalo for 200 Enterprises",
      description:
        "The primary aim of the exercise was to identify the top 100 most profitable enterprises..",
      category: "Design System",
      version: "v3.4.1",
      format: "PDF",
      size: "1.2 MB",
      updated: "December 2025",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "4",
      title: "Bukedi Sub-Region Presidential Tour Report",
      description: "Report provides an overview of the presidential visit to the Bukedi sub-region. It highlights key activities, engagements with local leaders and communities, and the outcomes of the tour",
      category: "Presidential Visit Report",
      version: "v1",
      format: "PDF",
      size: "1.5 MB",
      updated: "September 2025",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "5",
      title: "Agro Science Park Report",
      description: "The Agro Science Park Report provides an overview of Busitema Agro science park activities, initiatives, and developments within the Agro Science Park",
      category: "Reference",
      version: "v1",
      format: "PDF",
      size: "1.6 MB",
      updated: "December 2025",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "6",
      title: "Commercialisation of the Value Chain Analysis and Kibalo Tools",
      description: "The Report for Commercialisation of the Value Chain Analysis and Kibalo Tools outlines the strategies and activities aimed at promoting the use and adoption of the value chain analysis frameworks and Kibalo tools.",
      category: "Technical Guide",
      version: "v3.1.2",
      format: "PDF",
      size: "2.0 MB",
      updated: "January 2026",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "7",
      title: "Finalization of Activities on Commodity Value Chain Report",
      description: "",
      category: "ReferenceThe Report for Finalization of Activities on Commodity Value Chain summarizes the concluding activities undertaken to complete the commodity value chain analysis",
      version: "v1",
      format: "PDF",
      size: "900 KB",
      updated: "November 2025",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "8",
      title: "Citrus, Mango, Banana, and Coffee Value Chain Analysis Validation Report",
      description: ". The report highlights stakeholder feedback, cross-checks of production and marketing data, and confirmation of the proposed interventions..",
      category: "Technical Guide",
      version: "v2.2.0",
      format: "PDF",
      size: "1.3 MB",
      updated: "June 2025",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "9",
      title: "Responsive Layouts and Tailwind Utilities",
      description: "How to use Tailwind utilities to build responsive layouts in Endeavor projects.",
      category: "Design System",
      version: "v3.4.0",
      format: "PDF",
      size: "1.1 MB",
      updated: "December 2025",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "10",
      title: "Endeavor – Internationalization Guide",
      description: "Instructions to implement multilingual support using i18n in Next.js.",
      category: "Technical Guide",
      version: "v1.0.0",
      format: "PDF",
      size: "1.4 MB",
      updated: "January 2026",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "11",
      title: "Unit Testing with Jest",
      description: "Describes how to write unit tests for React components and hooks using Jest.",
      category: "Reference",
      version: "v5.0.1",
      format: "PDF",
      size: "1.7 MB",
      updated: "January 2026",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "12",
      title: "Endeavor CSS Best Practices",
      description: "Provides guidelines for writing maintainable CSS with Tailwind in the project.",
      category: "Design System",
      version: "v3.4.2",
      format: "PDF",
      size: "1.0 MB",
      updated: "December 2025",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "13",
      title: "Next.js Routing Patterns",
      description: "Explains the routing structure and dynamic route handling in Endeavor Next.js.",
      category: "Technical Guide",
      version: "v12.1.0",
      format: "PDF",
      size: "1.8 MB",
      updated: "January 2026",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "14",
      title: "Endeavor GraphQL Integration",
      description: "Guide for integrating GraphQL APIs into the Next.js project using Apollo Client.",
      category: "Reference",
      version: "v4.0.0",
      format: "PDF",
      size: "2.0 MB",
      updated: "December 2025",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "15",
      title: "Endeavor State Patterns",
      description: "Explains state management design patterns for scalability in the template.",
      category: "Technical Guide",
      version: "v2.5.0",
      format: "PDF",
      size: "1.6 MB",
      updated: "January 2026",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "16",
      title: "Accessibility Guidelines",
      description: "A guide to making Endeavor applications accessible and WCAG-compliant.",
      category: "Reference",
      version: "v1.0.0",
      format: "PDF",
      size: "1.2 MB",
      updated: "January 2026",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "17",
      title: "Endeavor SEO Best Practices",
      description: "Details strategies to make the Next.js application SEO-friendly.",
      category: "Technical Guide",
      version: "v1.3.0",
      format: "PDF",
      size: "1.3 MB",
      updated: "December 2025",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "18",
      title: "Endeavor Performance Optimization",
      description: "Tips and patterns for optimizing the performance of Next.js applications.",
      category: "Technical Guide",
      version: "v2.1.0",
      format: "PDF",
      size: "2.1 MB",
      updated: "January 2026",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "19",
      title: "Component Library Guidelines",
      description: "Guidelines for creating reusable React components in the Endeavor template.",
      category: "Reference",
      version: "v3.0.0",
      format: "PDF",
      size: "1.9 MB",
      updated: "December 2025",
      fileUrl: "/docs/doc1.pdf",
    },
    {
      id: "20",
      title: "Endeavor Error Handling Patterns",
      description: "How to handle client-side and server-side errors consistently in the application.",
      category: "Technical Guide",
      version: "v1.2.0",
      format: "PDF",
      size: "1.5 MB",
      updated: "January 2026",
      fileUrl: "/docs/doc1.pdf",
    },
  ];

  const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedDocs = documents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      {/* Overlay */}
      {docNavbarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setDocNavbarOpen(false)}
        />
      )}

      <section id="documents" className="scroll-m-28 md:scroll-m-[180px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              Publications & Documentation
            </h2>
            <p className="text-sm text-midnight_text dark:text-white/60 mt-1">
              Official publications, implementation guides, and reference material
            </p>
          </div>

          <button
            onClick={() => setDocNavbarOpen(true)}
            className="lg:hidden"
            aria-label="Open documentation menu"
          >
            <Icon icon="gg:menu-right" className="text-3xl" />
          </button>
        </div>

        {/* Document list */}
        <div className="space-y-4">
          {paginatedDocs.map((doc) => (
            <article
              key={doc.id}
              className="border border-border dark:border-dark_border rounded-md p-5 hover:bg-muted/40 transition"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                <div className="max-w-3xl">
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {doc.title}
                  </h3>

                  <p className="text-sm text-midnight_text dark:text-white/60 mt-1">
                    {doc.description}
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-xs text-midnight_text dark:text-white/50">
                    <span><strong>Type:</strong> {doc.category}</span>
                    <span><strong>Version:</strong> {doc.version}</span>
                    <span><strong>Updated:</strong> {doc.updated}</span>
                    <span><strong>Format:</strong> {doc.format}</span>
                    <span><strong>Size:</strong> {doc.size}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`/api/download/document?file=${encodeURIComponent(doc.fileUrl.replace(/^\//, ""))}`}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-white hover:bg-primary/90"
                  >
                  <Icon icon="mdi:file-download-outline" />
                    Download
                  </a>

                  <a
                    href={`/documentation/preview?file=${encodeURIComponent(doc.fileUrl)}&title=${encodeURIComponent(doc.title)}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-border dark:border-dark_border hover:bg-muted/40"
                  >
                    <Icon icon="mdi:eye-outline" />
                    Preview
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 text-sm border rounded disabled:opacity-50"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .slice(0, 5)
              .map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 text-sm rounded ${
                    currentPage === page
                      ? "bg-primary text-white"
                      : "border hover:bg-muted/40"
                  }`}
                >
                  {page}
                </button>
              ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 text-sm border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </section>

      {/* Mobile navigation */}
      <aside
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-white dark:bg-dark z-50 transform transition-transform ${
          docNavbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">Documentation Menu</h3>
          <button onClick={() => setDocNavbarOpen(false)}>
            <Icon icon="mdi:close" className="text-2xl" />
          </button>
        </div>
        <nav className="p-4">
          <DocNavigation />
        </nav>
      </aside>
    </>
  );
};
