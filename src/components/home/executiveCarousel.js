// src/components/home/executiveCarousel


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { carouselItems } from "@/data/pageData";

const ExecutiveCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      Leadership: "bg-blue-500",
      Infrastructure: "bg-emerald-500",
      Healthcare: "bg-red-500",
      Technology: "bg-purple-500",
      Community: "bg-orange-500",
    };
    return colors[category] || "bg-slate-500";
  };

  const currentItem = carouselItems[currentSlide];

  return (
    <div
      className="floating-container p-6 mt-8 h-full bg-white dark:bg-slate-800 transition-colors"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold font-montserrat text-slate-800 dark:text-slate-100 transition-colors">
            News & Updates
          </h3>
          <div
            className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(
              currentItem.category
            )}`}
          >
            {currentItem.category}
          </div>
        </div>

        {/* Main Card Content */}
        {/* Changed from flex-row to flex-col for a stacked layout */}
        <div className="flex-1 relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 flex flex-col">
          {/* Image Section - now full width */}
          <div className="w-full relative aspect-video">
            <div className="absolute inset-0">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className={`object-cover transition-all duration-700 ${
                  currentItem.type === "executive"
                    ? "object-center"
                    : "object-cover hover:scale-105"
                }`}
                priority={currentSlide === 0}
              />
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
            </div>

            {/* Date badge for news/events */}
            {currentItem.date && (
              <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 px-2 py-1 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-200">
                {formatDate(currentItem.date)}
              </div>
            )}

            {/* Executive badge overlay */}
            {currentItem.type === "executive" && (
              <div className="absolute bottom-3 left-3 bg-blue-600/90 px-2 py-1 rounded-lg text-xs font-medium text-white">
                Executive Team
              </div>
            )}
          </div>

          {/* Content Section - now full width and with padding */}
          <div className="w-full p-4 md:p-6 flex-1 flex flex-col justify-center">
            <div className="space-y-3">
              <h4 className="text-lg font-bold font-montserrat text-slate-800 dark:text-slate-100 leading-tight">
                {currentItem.title}
              </h4>

              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {currentItem.subtitle}
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-300 font-roboto-slab leading-relaxed line-clamp-3">
                {currentItem.description}
              </p>

              {/* Action buttons for different content types */}
              <div className="pt-2">
                {currentItem.type === "executive" ? (
                  <button className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                    View Profile →
                  </button>
                ) : currentItem.type === "news" ? (
                  <button className="text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-medium transition-colors">
                    Read Full Article →
                  </button>
                ) : (
                  <button className="text-xs text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium transition-colors">
                    Event Details →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-4">
          {/* Slide indicators */}
          <div className="flex space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-blue-600 w-6"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-blue-400 dark:hover:bg-blue-500"
                }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex space-x-2">
            <button
              onClick={() =>
                goToSlide(
                  currentSlide > 0 ? currentSlide - 1 : carouselItems.length - 1
                )
              }
              className="p-1 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              <svg
                className="w-4 h-4 text-slate-600 dark:text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                goToSlide((currentSlide + 1) % carouselItems.length)
              }
              className="p-1 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              <svg
                className="w-4 h-4 text-slate-600 dark:text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveCarousel;
