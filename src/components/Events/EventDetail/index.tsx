import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Icon } from "@iconify/react";

interface ContentType {
  header: string | null;
  type: "html" | "pdf" | "doc" | "url";
  htmlContent: string | null;
  pdfContent: string | null;
  docContent: string | null;
  url: string | null;
  footer: string | null;
}

interface EventProps {
  title?: string;
  detail?: string;
  category?: string;
  location?: string;
  eventdate?: string;
  duration?: string;
  type?: string;
  entrants?: string;
  image?: any;
  gallery?: string[];
  video?: string;
  content?: ContentType | null;
}

const EventDetails: FC<EventProps> = ({
  title,
  detail,
  category,
  location,
  eventdate,
  duration,
  type,
  entrants,
  image,
  gallery,
  video,
  content
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loadingHtml, setLoadingHtml] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const formattedDate = eventdate
    ? format(new Date(eventdate), "MMM dd, yyyy")
    : "Date not available";

  const imagesPerView = 4;
  const totalImages = gallery?.length || 0;
  const maxIndex = Math.max(0, totalImages - imagesPerView);

  const handlePreviousGallery = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextGallery = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Load HTML content
  useEffect(() => {
    console.log("Content:", content);
    if (content?.type === "html" && content?.htmlContent) {
      setLoadingHtml(true);
      fetch(content.htmlContent)
        .then((res) => res.text())
        .then((data) => {
          setHtmlContent(data);
          setLoadingHtml(false);
        })
        .catch(() => setLoadingHtml(false));
    }
  }, [content]);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const openImageModal = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="sm:mt-28 pt-28 sm:pb-28 pb-12 dark:bg-dark">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        {/* Top Section: Hero Image and Info Sidebar */}
        <div className="grid grid-cols-12 gap-8">
          <div className="lg:col-span-9 col-span-12">
            <div className="flex gap-6 pt-4 md:pt-0 relative">
              <Image
                src={image}
                alt="image"
                className="rounded-lg mb-6"
                width={1170}
                height={766}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
              />
              {/* Event Title Overlay - No Background */}
              <div className="absolute top-6 left-6 px-6 py-3">
                <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {title}
                </h3>
              </div>
            </div>
            <p className="text-muted dark:text-white/60 text-base my-8">{detail}</p>
          </div>

          <div className="lg:col-span-3 md:col-span-5 sm:col-span-6 col-span-12 lg:mt-0 mt-8">
            <h4 className="text-darktext text-lg font-medium mb-6">Info</h4>
            <div className="pb-6 border-b border-border mb-6 dark:border-dark_border">
              <table>
                <tbody>
                  <tr className="">
                    <td>
                      <h5 className="text-muted dark:text-white/60 text-base pb-4">Location:</h5>
                    </td>
                    <td>
                      <p className="text-muted dark:text-white/60 text-base pb-4 pl-4">{location}</p>
                    </td>
                  </tr>
                  <tr className="">
                    <td>
                      <h5 className="text-muted dark:text-white/60 text-base pb-4">Date:</h5>
                    </td>
                    <td>
                      <p className="text-muted dark:text-white/60 text-base pb-4 pl-4">
                        {formattedDate}
                      </p>
                    </td>
                  </tr>
                  <tr className="">
                    <td>
                      <h5 className="text-muted dark:text-white/60 text-base pb-4">Duration:</h5>
                    </td>
                    <td>
                      <p className="text-muted dark:text-white/60 text-base pb-4 pl-4">{duration}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-lg font-medium text-darktext">Share</h5>
              <div className="flex items-center gap-4">
                <Link href="#">
                  <Image
                    src="/images/icons/icon-facebook.svg"
                    alt="icon"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/icons/icon-instagram.svg"
                    alt="icon"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/icons/icon-linkedin.svg"
                    alt="icon"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/icons/icon-twitter.svg"
                    alt="icon"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Activity Gallery Section */}
        {((gallery && gallery.length > 0) || video) && (
          <div className="mt-12">
            <h3 className="text-2xl font-medium text-darktext mb-6">Activity Gallery</h3>
            
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
              {/* Left Side - 4 Images in 2x2 Grid with Navigation */}
              {gallery && gallery.length > 0 && (
                <div className="relative">
                  {/* Left Arrow */}
                  {totalImages > imagesPerView && (
                    <button
                      onClick={handlePreviousGallery}
                      disabled={currentIndex === 0}
                      className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 ${
                        currentIndex === 0
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-primary hover:text-white"
                      }`}
                      style={{ left: '-20px' }}
                    >
                      <Icon icon="solar:arrow-left-linear" width="24" height="24" />
                    </button>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    {gallery.slice(currentIndex, currentIndex + imagesPerView).map((imgSrc, index) => (
                      <div 
                        key={currentIndex + index} 
                        className="relative overflow-hidden rounded-lg group aspect-square cursor-pointer"
                        onClick={() => openImageModal(imgSrc)}
                      >
                        <Image
                          src={imgSrc}
                          alt={`Gallery image ${currentIndex + index + 1}`}
                          width={300}
                          height={300}
                          quality={100}
                          className="w-full h-full object-cover group-hover:scale-110 duration-300 transition-transform"
                        />
                        {/* Zoom indicator on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Icon icon="solar:eye-bold" width="32" height="32" className="text-white" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Arrow */}
                  {totalImages > imagesPerView && (
                    <button
                      onClick={handleNextGallery}
                      disabled={currentIndex >= maxIndex}
                      className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 ${
                        currentIndex >= maxIndex
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-primary hover:text-white"
                      }`}
                      style={{ right: '-20px' }}
                    >
                      <Icon icon="solar:arrow-right-linear" width="24" height="24" />
                    </button>
                  )}
                </div>
              )}

              {/* Right Side - Video Card */}
              {video && (
                <div className="flex items-center">
                  {!isPlaying ? (
                    <div className="relative rounded-lg overflow-hidden w-full h-full min-h-[300px] group cursor-pointer" onClick={handlePlayVideo}>
                      {/* Video thumbnail - using first frame or poster */}
                      <video
                        src={video}
                        className="w-full h-full object-cover"
                        preload="metadata"
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-primary group-hover:bg-secondary rounded-full p-6 transition-all duration-300 transform group-hover:scale-110">
                          <Icon icon="solar:play-bold" width="32" height="32" className="text-white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative rounded-lg overflow-hidden w-full h-full">
                      <video
                        src={video}
                        controls
                        autoPlay
                        className="w-full h-full rounded-lg"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Content Section - Display based on content.type */}
        {content && (
          <div className="mt-16">
            {content.header && (
              <h3 className="text-2xl font-medium text-darktext mb-6">{content.header}</h3>
            )}

            {/* HTML Content */}
            {content.type === "html" && content.htmlContent && (
              <div>
                {loadingHtml ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <div
                    className="prose prose-lg max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />
                )}
              </div>
            )}

            {/* PDF Content */}
            {content.type === "pdf" && content.pdfContent && (
              <div className="border-2 border-primary rounded-lg p-8 text-center">
                <Icon icon="solar:document-pdf-bold" width="64" height="64" className="text-primary mx-auto mb-4" />
                <h4 className="text-lg font-medium text-darktext mb-4">PDF Document</h4>
                <a
                  href={content.pdfContent}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-secondary text-white font-medium rounded-md transition-colors duration-300"
                >
                  <Icon icon="solar:download-linear" width="20" height="20" />
                  Download PDF
                </a>
              </div>
            )}

            {/* DOC Content */}
            {content.type === "doc" && content.docContent && (
              <div className="border-2 border-primary rounded-lg p-8 text-center">
                <Icon icon="solar:document-bold" width="64" height="64" className="text-primary mx-auto mb-4" />
                <h4 className="text-lg font-medium text-darktext mb-4">Document</h4>
                <a
                  href={content.docContent}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-secondary text-white font-medium rounded-md transition-colors duration-300"
                >
                  <Icon icon="solar:download-linear" width="20" height="20" />
                  Download Document
                </a>
              </div>
            )}

            {/* URL Content - Iframe */}
            {content.type === "url" && content.url && (
              <div className="w-full h-screen">
                <iframe
                  src={content.url}
                  className="w-full h-full rounded-lg border border-border dark:border-dark_border"
                  title="Content"
                  allow="fullscreen"
                ></iframe>
              </div>
            )}

            {content.footer && (
              <div
                className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-border dark:border-dark_border"
                dangerouslySetInnerHTML={{ __html: content.footer }}
              />
            )}
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn p-4"
            onClick={closeImageModal}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors duration-300 z-10"
            >
              <Icon icon="solar:close-circle-bold" width="40" height="40" />
            </button>
            <div
              className="relative max-w-5xl max-h-[90vh] animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery image enlarged"
                width={1200}
                height={800}
                quality={100}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventDetails;
