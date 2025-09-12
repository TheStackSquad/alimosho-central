// src/components/common/nav/dropdownMenu.jsx
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  dropdownVariants,
  staggerContainer,
  staggerItem,
} from "@/animation/navbarAnimate";

export default function DropdownMenu({
  items = [],
  isOpen,
  onClose,
  className = "",
  isMobile = false,
}) {
  const router = useRouter();

  const handleItemClick = (item) => {
    if (item.isLogout) {
      // Handle logout logic here
      console.log("Logout clicked");
      // TODO: Implement actual logout functionality
      onClose();
      return;
    }

    if (item.path) {
      router.push(item.path);
    }

    onClose();
  };

  const handleKeyDown = (event, item) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleItemClick(item);
    }
  };

  if (!items.length) return null;

  const baseClasses = `
    absolute z-50 min-w-[200px] 
    bg-white dark:bg-gray-800 
    border border-gray-200 dark:border-gray-700
    rounded-lg shadow-lg
    py-1 overflow-hidden
  `;

  const mobileClasses = `
    relative z-10 w-full
    bg-gray-50 dark:bg-gray-700
    border-l-4 border-blue-500
    rounded-none shadow-none
    py-2 mt-2
  `;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="dropdown"
          variants={isMobile ? staggerContainer : dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`
            ${isMobile ? mobileClasses : baseClasses}
            ${className}
          `}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={isMobile ? staggerItem : undefined}
              className="relative"
            >
              {item.path ? (
                <Link
                  href={item.path}
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 px-4 py-2.5
                    text-gray-700 dark:text-gray-200
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    hover:text-gray-900 dark:hover:text-white
                    transition-colors duration-150
                    focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700
                    ${
                      isMobile
                        ? "py-3 border-b border-gray-200 dark:border-gray-600 last:border-b-0"
                        : ""
                    }
                  `}
                  role="menuitem"
                  tabIndex={0}
                >
                  {item.icon && (
                    <span className="text-lg flex-shrink-0" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ) : (
                <button
                  onClick={() => handleItemClick(item)}
                  onKeyDown={(e) => handleKeyDown(e, item)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-2.5
                    text-left
                    ${
                      item.isLogout
                        ? "text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }
                    hover:text-gray-900 dark:hover:text-white
                    transition-colors duration-150
                    focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700
                    ${
                      isMobile
                        ? "py-3 border-b border-gray-200 dark:border-gray-600 last:border-b-0"
                        : ""
                    }
                  `}
                  role="menuitem"
                  tabIndex={0}
                >
                  {item.icon && (
                    <span className="text-lg flex-shrink-0" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  <span className="font-medium">{item.label}</span>
                </button>
              )}

              {/* Separator line for desktop */}
              {!isMobile && index < items.length - 1 && (
                <div className="border-b border-gray-100 dark:border-gray-700" />
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
