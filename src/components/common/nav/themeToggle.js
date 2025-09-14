// src/components/common/nav/themeToggle.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { themeToggleVariants } from "@/animation/navbarAnimate";

export default function ThemeToggle({ theme, toggleTheme, className = "" }) {
  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-checked={theme === "dark"}
      role="switch"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className={`
  relative p-3 rounded-xl
  bg-gray-100 dark:bg-gray-800
  hover:bg-gray-200 dark:hover:bg-gray-700
  border border-gray-200 dark:border-gray-600
  text-gray-600 dark:text-gray-300
  hover:text-gray-800 dark:hover:text-gray-100
  transition-all duration-300 ease-out
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  shadow-sm hover:shadow-md
  ${className}
`}
    >
      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 dark:opacity-10"
        animate={{
          opacity: theme === "dark" ? 0 : 0.1,
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 dark:opacity-10"
        animate={{
          opacity: theme === "dark" ? 0.1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon container */}
      <motion.div
        variants={themeToggleVariants}
        animate={theme === "dark" ? "dark" : "light"}
        className="relative z-10"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 180 : 0,
            opacity: 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-yellow-500 drop-shadow-sm" />
          ) : (
            <Moon
              size={20}
              className="text-slate-600 dark:text-slate-300 drop-shadow-sm"
            />
          )}
        </motion.div>
      </motion.div>

      {/* Tooltip-like indicator */}
      <motion.div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                   bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 
                   text-xs px-2 py-1 rounded opacity-0 pointer-events-none
                   whitespace-nowrap"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {theme === "dark" ? "Light mode" : "Dark mode"}
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 
                       border-4 border-transparent border-t-gray-900 dark:border-t-gray-100"
        />
      </motion.div>
    </motion.button>
  );
}
