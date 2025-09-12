// src/components/common/Header.jsx
"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Import custom hooks
import { useDropdown } from "@/utils/hooks/useDropdown";
import { useClickOutsideAndEscape } from "@/utils/hooks/useClickOutside";
import { useTheme } from "@/utils/hooks/useTheme";

// Import components
import DesktopNav from "./nav/desktopNav";
import MobileMenu from "./nav/mobileMenu";
import ThemeToggle from "./nav/themeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Custom hooks
  const { theme, toggleTheme, isLoading } = useTheme();
  const { activeDropdown, toggleDropdown, closeDropdown, isDropdownOpen } =
    useDropdown();

  // Close dropdowns when clicking outside
  useClickOutsideAndEscape([headerRef], closeDropdown, true);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
    // Close any open dropdowns when toggling mobile menu
    if (!menuOpen) {
      closeDropdown();
    }
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    closeDropdown();
  };

  // Prevent theme flash during SSR
  if (isLoading) {
    return (
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
              <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse md:hidden" />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-30 bg-white/95 dark:bg-gray-900/95 
                   backdrop-blur-sm border-b border-gray-200 dark:border-gray-700
                   transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/"
                className="flex items-center space-x-2 focus:outline-none focus:ring-2 
                          focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1"
                onClick={closeMobileMenu}
              >
                <div className="flex items-center">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    Alimosho Central
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <DesktopNav
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              closeDropdown={closeDropdown}
              isDropdownOpen={isDropdownOpen}
            />

            {/* Right Side Controls */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <ThemeToggle
                theme={theme}
                toggleTheme={toggleTheme}
                className="transition-opacity duration-200"
              />

              {/* Mobile Menu Button */}
              <motion.button
                onClick={toggleMobileMenu}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 
                          hover:bg-gray-100 dark:hover:bg-gray-800
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                          transition-colors duration-200"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <motion.div
                  animate={{ rotate: menuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={closeMobileMenu}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        isDropdownOpen={isDropdownOpen}
      />
    </>
  );
}
