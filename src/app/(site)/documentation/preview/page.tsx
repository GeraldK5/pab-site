"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function DocumentPreviewPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filePath = searchParams.get("file");
  const title = searchParams.get("title");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (!filePath) {
      router.push("/documentation");
    }
  }, [filePath, router]);

  if (!filePath) {
    return null;
  }

  return (
    <main className="h-screen bg-[#f8f9fa] dark:bg-dark flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-border dark:border-dark_border bg-white dark:bg-dark_bg px-6 py-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md border border-border dark:border-dark_border hover:bg-muted/40"
            aria-label="Toggle outline"
          >
            <Icon icon="mdi:menu" className="text-xl" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Document Preview
            </h1>
            {title && (
              <p className="text-sm text-midnight_text dark:text-white/60">
                {title}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={`/api/download/document?file=${encodeURIComponent(filePath.replace(/^\//, ""))}`}
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-white hover:bg-primary/90"
          >
            <Icon icon="mdi:file-download-outline" />
            Download
          </a>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-border dark:border-dark_border hover:bg-muted/40"
          >
            <Icon icon="mdi:arrow-left" />
            Back
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Document Outline */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-0"
          } border-r border-border dark:border-dark_border bg-white dark:bg-dark_bg overflow-y-auto transition-all duration-300 flex-shrink-0`}
        >
          <div className="p-4">
            {/* Sidebar content can be added here */}
          </div>
        </aside>

        {/* PDF Viewer - Main Area */}
        <div className="flex-1 overflow-auto flex justify-center items-start p-6 bg-[#f8f9fa] dark:bg-dark">
          <div className="w-full bg-white dark:bg-dark_bg rounded-lg shadow-xl overflow-hidden border border-border dark:border-dark_border">
            <embed
              src={filePath}
              type="application/pdf"
              width="100%"
              height="100%"
              className="w-full h-full"
              style={{ minHeight: "calc(100vh - 160px)" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
