// src/components/about/sections/sectionWrapper.js
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useFadeIn } from "@/animation/aboutAnimate";

export default function SectionWrapper({
  id,
  title,
  children,
  setRef,
  className = "",
}) {
  const [ref, isVisible] = useFadeIn(200);

  return (
    <section
      id={id}
      ref={(el) => {
        ref.current = el;
        setRef(id)(el);
      }}
      className={`relative ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-montserrat">
            {title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Section Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
