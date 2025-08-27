// src/components/about/aboutHero/aboutHero.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useFadeIn, useSlideIn } from "@/animation/aboutAnimate";

export default function AboutHero({ isVisible }) {
  const [contentRef, contentStyle] = useSlideIn("up", 200);
  const [statsRef, statsStyle] = useSlideIn("left", 400);

  // Hero stats data
  const stats = [
    { number: "15+", label: "Years Serving", delay: 0 },
    { number: "500+", label: "Projects Completed", delay: 100 },
    { number: "10k+", label: "Community Members", delay: 200 },
    { number: "24/7", label: "Dedicated Service", delay: 300 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div
          ref={contentRef}
          style={contentStyle}
          className="space-y-6 text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white font-montserrat leading-tight"
          >
            Building a Better{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Community
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-roboto leading-relaxed"
          >
            For over 15 years, Alimosho Central has been dedicated to serving
            our community with transparency, integrity, and unwavering
            commitment. Discover our journey, leadership, and achievements that
            make us who we are today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <button
              onClick={() => {
                document
                  .getElementById("biography")
                  ?.scrollIntoView({ behavior: "smooth" });
                window.location.hash = "#biography";
              }}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              Explore Our Story
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                window.location.hash = "#contact";
              }}
              className="px-8 py-3 border-2 border-primary text-primary dark:text-white rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Get Involved
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/img/placeholderMan.webp"
              alt="Alimosho Central Community Leadership"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9dfKZwSR6IhIttJDR5mC8f/9k="
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        ref={statsRef}
        style={statsStyle}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-24"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-3xl md:text-4xl font-bold text-primary font-montserrat">
              {stat.number}
            </div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-roboto mt-2">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
