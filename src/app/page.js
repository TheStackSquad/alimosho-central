// src/app/page.js

"use client";

import MetricsContainer from "@/components/home/metricsContainer";
import ExecutiveCarousel from "@/components/home/executiveCarousel";
import CtaCard from "@/components/home/ctaCard";
import MarriageRegistry from "@/components/home/marriageRegistry";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col md:flex-row gap-6">
        {/*
          Right Column: 30% width, for Executive Carousel and CTA
          This column now has `order-1` to appear first on mobile
        */}
        <div className="order-1 w-full md:w-[30%] h-full">
          {/* Container A - Executive Carousel + CTA */}
          <div className="h-full flex flex-col gap-4">
            <div className="flex-[0.7]">
              <ExecutiveCarousel />
            </div>
            <div className="flex-[0.3]">
              <CtaCard />
            </div>
          </div>
        </div>

        {/*
          Left Column: 70% width, for Metrics and Marriage Registry
          This column now has `order-2` to appear second on mobile
        */}
        <div className="order-2 flex flex-col gap-6 w-full md:w-[70%]">
          {/* Container B - Metrics (50% height) */}
          <div className="h-1/2">
            <MetricsContainer />
          </div>

          {/* Container C - Marriage Registry (remaining height) */}
          <div className="h-1/2 flex-1">
            <MarriageRegistry />
          </div>
        </div>
      </div>
    </main>
  );
}
