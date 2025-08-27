// src/components/common/nav/DesktopNav.jsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { getIcon } from "@/utils/icons";
import { NavDropdown } from "@/utils/hooks/navDropdown";

// Sub-component for a single navigation link
const NavLink = ({ item }) => {
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
    <Link
      href={item.path}
      className={`
        relative py-2 px-3 transition-colors duration-300 font-medium whitespace-nowrap
        before:content-[''] before:absolute before:left-1/2 before:-bottom-0.5 before:h-0.5
        before:transition-all before:duration-300 before:ease-out before:-translate-x-1/2 before:rounded-full
        ${
          isActive
            ? "text-primary dark:text-primary before:w-full before:bg-primary dark:before:bg-primary"
            : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:before:w-full hover:before:bg-primary dark:hover:before:bg-primary"
        }
      `}
    >
      {item.label}
    </Link>
  );
};

export default function DesktopNav({
  navItems,
  isOpen,
  toggleDropdown,
  closeDropdown,
  dropdownRef,
}) {
  const handleDropdownClick = (e, dropdownName) => {
    e.preventDefault();
    toggleDropdown(dropdownName);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-2 font-cinzel text-gray-700 dark:text-gray-300 text-sm">
      {navItems.map((item) => {
        if (item.dropdown) {
          const dropdownName = item.label.toLowerCase();
          const isDropdownOpen = isOpen(dropdownName);

          return (
            <div key={item.label} className="relative z-20" ref={dropdownRef}>
              <div className="flex items-center">
                {/* Main button for the dropdown parent */}
                <button
                  onClick={(e) => handleDropdownClick(e, dropdownName)}
                  className={`relative py-2 px-3 transition-colors duration-300 font-medium whitespace-nowrap
                    before:content-[''] before:absolute before:left-1/2 before:-bottom-0.5 before:h-0.5
                    before:transition-all before:duration-300 before:ease-out before:-translate-x-1/2 before:rounded-full
                    ${
                      isDropdownOpen
                        ? "text-primary dark:text-primary before:w-full before:bg-primary dark:before:bg-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:before:w-full hover:before:bg-primary dark:hover:before:bg-primary"
                    }
                  `}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <motion.span
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-2 inline-block"
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
              </div>

              {/* The Dropdown Panel */}
              <NavDropdown
                items={item.dropdown}
                isOpen={isDropdownOpen}
                onClose={() => closeDropdown()}
                basePath={item.path}
                getIcon={getIcon}
              />
            </div>
          );
        } else {
          return <NavLink key={item.path} item={item} />;
        }
      })}
    </nav>
  );
}
