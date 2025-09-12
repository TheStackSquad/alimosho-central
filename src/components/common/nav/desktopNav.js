// src/components/common/nav/desktopNav.jsx
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { navItems } from "@/data/navigationData";
import {
  chevronVariants,
  navItemHover,
  navItemTap,
} from "@/animation/navbarAnimate";
import DropdownMenu from "./dropdownMenu";

export default function DesktopNav({
  activeDropdown,
  toggleDropdown,
  closeDropdown,
  isDropdownOpen,
}) {
  const pathname = usePathname();
  const dropdownRefs = useRef({});

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

  const handleDropdownToggle = (itemId, event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleDropdown(itemId);
  };

  const handleMouseEnter = (itemId) => {
    if (itemId && navItems.find((item) => item.id === itemId)?.hasDropdown) {
      toggleDropdown(itemId);
    }
  };

  const handleMouseLeave = () => {
    // Small delay to prevent accidental closing when moving to dropdown
    setTimeout(() => {
      closeDropdown();
    }, 150);
  };

  return (
    <nav className="hidden md:flex items-center space-x-1" role="navigation">
      {navItems.map((item) => {
        const isActive = isActiveParent(item);
        const hasDropdownItems = item.hasDropdown && item.dropdown?.length > 0;

        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            ref={(el) => (dropdownRefs.current[item.id] = el)}
          >
            {hasDropdownItems ? (
              <motion.button
                onClick={(e) => handleDropdownToggle(item.id, e)}
                whileHover={navItemHover}
                whileTap={navItemTap}
                className={`
                  flex items-center gap-1 px-4 py-2 rounded-lg
                  font-medium transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  ${
                    isActive
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                `}
                aria-expanded={isDropdownOpen(item.id)}
                aria-haspopup="true"
                id={`${item.id}-dropdown-button`}
              >
                <span>{item.label}</span>
                <motion.div
                  variants={chevronVariants}
                  animate={isDropdownOpen(item.id) ? "open" : "closed"}
                >
                  <ChevronDown size={16} className="ml-1" />
                </motion.div>
              </motion.button>
            ) : (
              <motion.div whileHover={navItemHover} whileTap={navItemTap}>
                <Link
                  href={item.path}
                  className={`
                    block px-4 py-2 rounded-lg
                    font-medium transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    ${
                      isActive
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    }
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </motion.div>
            )}

            {/* Dropdown Menu */}
            {hasDropdownItems && (
              <DropdownMenu
                items={item.dropdown}
                isOpen={isDropdownOpen(item.id)}
                onClose={closeDropdown}
                className="top-full left-0 mt-1"
                isMobile={false}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
