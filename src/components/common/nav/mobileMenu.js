// src/components/common/nav/mobileMenu.jsx
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { getIcon } from "@/utils/icons";
import { mobileMenuVariants, itemVariants } from "@/animation/navbarAnimate";

// Sub-component for a single mobile nav link
const NavLink = ({ item, handleMobileLinkClick }) => {
  const pathname = usePathname();
  const isActive = item.path === pathname;

  // In DesktopNav.jsx and MobileMenu.jsx, update the navigation handlers:

  const handleNavigation = (path, closeDropdown) => {
    if (path.includes("#")) {
      // For hash links, we need to handle smooth scrolling
      const [basePath, hash] = path.split("#");
      if (window.location.pathname === basePath) {
        // We're already on the page, scroll to section
        scrollToSection(hash);
      } else {
        // Navigate to page first, then scroll to section
        window.location.href = path;
      }
    } else {
      // Regular navigation
      window.location.href = path;
    }
    closeDropdown();
  };

  return (
    <motion.div variants={itemVariants} className="w-full">
      <Link
        href={item.path}
        onClick={handleMobileLinkClick}
        className={`block w-full px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-200
          ${
            isActive
              ? "bg-gray-100 dark:bg-gray-800 text-primary dark:text-primary"
              : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white"
          }`}
      >
        {item.label}
      </Link>
    </motion.div>
  );
};

// Sub-component for a single mobile dropdown item
const DropdownItem = ({ item, handleMobileLinkClick }) => {
  return (
    <motion.li className="w-full" variants={itemVariants}>
      <Link href={item.path} onClick={handleMobileLinkClick}>
        <div
          className="flex items-center px-4 py-3 gap-3 transition-all duration-200 rounded-lg
          hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
        >
          <span className="text-gray-500 dark:text-gray-400">
            {getIcon(item.icon, 22)}
          </span>
          <span className="font-medium text-gray-800 dark:text-white">
            {item.label}
          </span>
        </div>
      </Link>
    </motion.li>
  );
};

export default function MobileMenu({
  menuOpen,
  setMenuOpen,
  navItems,
  isOpen,
  toggleDropdown,
  closeDropdown,
}) {
  const handleMobileLinkClick = () => {
    setMenuOpen(false);
    closeDropdown();
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.nav
          className="lg:hidden bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-700 px-4 py-4 space-y-2 font-cinzel text-sm text-gray-700 dark:text-gray-300"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const dropdownName = item.label.toLowerCase();
            const isDropdownOpen = isOpen(dropdownName);

            return (
              <div key={item.label} className="w-full">
                {item.dropdown ? (
                  // Dropdown Parent Item
                  <div className="flex flex-col">
                    <div className="flex items-center w-full">
                      <Link
                        href={item.path}
                        onClick={handleMobileLinkClick}
                        className="flex-1 text-left block relative px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300
                        hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white"
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(dropdownName);
                        }}
                        className="p-3 mr-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        aria-label={`Toggle ${item.label} dropdown`}
                        aria-expanded={isDropdownOpen}
                      >
                        <motion.div
                          animate={{
                            rotate: isDropdownOpen ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </button>
                    </div>

                    {/* Dropdown content */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-2">
                            <ul className="flex flex-col space-y-1">
                              {item.dropdown.map((subItem) => (
                                <DropdownItem
                                  key={subItem.id}
                                  item={subItem}
                                  handleMobileLinkClick={handleMobileLinkClick}
                                />
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // Regular Nav Link
                  <NavLink
                    item={item}
                    handleMobileLinkClick={handleMobileLinkClick}
                  />
                )}
              </div>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
