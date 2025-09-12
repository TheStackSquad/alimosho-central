// src/components/common/nav/mobileMenu.jsx
"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown } from "lucide-react";
import { navItems } from "@/data/navigationData";
import {
  mobileMenuVariants,
  backdropVariants,
  chevronVariants,
  staggerContainer,
  staggerItem,
} from "@/animation/navbarAnimate";
import DropdownMenu from "./dropdownMenu";

export default function MobileMenu({
  isOpen,
  onClose,
  activeDropdown,
  toggleDropdown,
  isDropdownOpen,
}) {
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const isActiveLink = (path) => {
    return pathname === path;
  };

  const isActiveParent = (item) => {
    if (isActiveLink(item.path)) return true;

    if (item.dropdown) {
      return item.dropdown.some(
        (dropdownItem) => dropdownItem.path && isActiveLink(dropdownItem.path)
      );
    }

    return false;
  };

  const handleLinkClick = () => {
    onClose();
  };

  const handleDropdownToggle = (itemId, event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleDropdown(itemId);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] 
                       bg-white dark:bg-gray-900 
                       shadow-xl z-50 md:hidden
                       overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Menu
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 
                          hover:bg-gray-100 dark:hover:bg-gray-800
                          focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Items */}
            <motion.nav
              className="p-4 space-y-2"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => {
                const isActive = isActiveParent(item);
                const hasDropdownItems =
                  item.hasDropdown && item.dropdown?.length > 0;

                return (
                  <motion.div
                    key={item.id}
                    variants={staggerItem}
                    className="space-y-1"
                  >
                    {hasDropdownItems ? (
                      <div>
                        <button
                          onClick={(e) => handleDropdownToggle(item.id, e)}
                          className={`
                            w-full flex items-center justify-between p-3 rounded-lg
                            font-medium transition-all duration-200
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                            ${
                              isActive
                                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }
                          `}
                          aria-expanded={isDropdownOpen(item.id)}
                          aria-controls={`${item.id}-dropdown`}
                        >
                          <span>{item.label}</span>
                          <motion.div
                            variants={chevronVariants}
                            animate={
                              isDropdownOpen(item.id) ? "open" : "closed"
                            }
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        </button>

                        {/* Mobile Dropdown */}
                        <DropdownMenu
                          items={item.dropdown}
                          isOpen={isDropdownOpen(item.id)}
                          onClose={handleLinkClick}
                          className="ml-4"
                          isMobile={true}
                        />
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={handleLinkClick}
                        className={`
                          block p-3 rounded-lg
                          font-medium transition-all duration-200
                          focus:outline-none focus:ring-2 focus:ring-blue-500
                          ${
                            isActive
                              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }
                        `}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </motion.nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
