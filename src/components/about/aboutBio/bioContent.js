// src/components/about/aboutBio/bioContent.js
"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useFadeIn, useStaggerAnimation } from "@/animation/aboutAnimate";
import { bioData } from "@/data/bioData";
import { getIcon } from "@/utils/icons";

export default function BioContent() {
  const [containerRef, isVisible] = useFadeIn();
  const [timelineRef, visibleTimelineItems] = useStaggerAnimation(
    bioData.timeline.length,
    150
  );
  const [highlightsRef, visibleHighlightItems] = useStaggerAnimation(
    bioData.highlights.length,
    100
  );

  return (
    <div ref={containerRef} className="space-y-16">
      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-roboto leading-relaxed">
          {bioData.introduction}
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div ref={timelineRef} className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-blue-300 h-full rounded-full" />

        <div className="space-y-12">
          {bioData.timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                index < visibleTimelineItems
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      {getIcon(item.icon, 20, "text-primary")}
                    </div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white font-montserrat">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-montserrat mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-roboto">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10" />

              {/* Spacer for opposite side */}
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Highlights Section */}
      <div ref={highlightsRef} className="max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white font-montserrat mb-12"
        >
          Our Core Values
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bioData.highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={
                index < visibleHighlightItems
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {getIcon(highlight.icon, 28, "text-primary")}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white font-montserrat mb-3">
                {highlight.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 font-roboto text-sm">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-montserrat mb-4">
          Join Our Journey
        </h3>
        <p className="text-gray-600 dark:text-gray-300 font-roboto mb-6">
          Be part of our continuing story as we work together to build a
          stronger, more vibrant community for everyone.
        </p>
        <button
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
            window.location.hash = "#contact";
          }}
          className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Get Involved Today
        </button>
      </motion.div>
    </div>
  );
}
