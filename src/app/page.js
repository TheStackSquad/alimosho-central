// src/app/page.js
"use client";

import { motion } from "framer-motion";
import {
  textVariants,
  wordVariants,
  descriptionVariants,
} from "@/animation/homePageAnimate";
import AnimatedText from "@/components/common/animatedText";
import pageData from "@/data/pageData";

// Using Next.js Font Optimization to prevent Cumulative Layout Shift
// It handles font loading and optimization automatically.
import { Montserrat, Roboto_Slab } from "next/font/google";

// Configure the fonts with their subsets
const montserrat = Montserrat({
  weight: ["700"], // Use only the bold weight for headings
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat", // CSS variable for Montserrat
});

const robotoSlab = Roboto_Slab({
  weight: ["400", "700"], // Use regular and bold weights for body text
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab", // CSS variable for Roboto Slab
});

export default function Home() {
  const { title, description } = pageData.home;

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 md:p-8 
      bg-gray-50 dark:bg-gray-950 transition-colors duration-500 
      ${montserrat.variable} ${robotoSlab.variable}
      font-body text-gray-800 dark:text-white`}
    >
      {/* Main Container with Animations */}
      <motion.div
        className="w-full text-center max-w-5xl"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        {/* Animated Title */}
        <h1
          className={`text-4xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-4 
          bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600`}
        >
          {title.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Animated Description */}
        <motion.p
          className={`text-base md:text-xl lg:text-2xl font-body font-normal mb-8 max-w-2xl mx-auto`}
          variants={descriptionVariants}
        >
          {description}
        </motion.p>
      </motion.div>

      {/* Animated Text Component */}
      <AnimatedText />

      {/* Placeholder for other page content */}
      <div className="mt-16 w-full max-w-5xl">
        {/* Other sections or components can go here */}
      </div>
    </div>
  );
}
