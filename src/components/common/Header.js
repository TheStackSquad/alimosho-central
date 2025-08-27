// // src/components/common/Header.jsx
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { useDropdownManager } from "@/utils/dropdown";
// // Import the new sub-components
// import DesktopNav from "./nav/desktopNav";
// import MobileMenu from "./nav/mobileMenu";
// import ThemeToggle from "./nav/themeToggle";
// import { navItems } from "@/components/common/navigation";

// export default function Header() {
//   const [theme, setTheme] = useState("light");
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Use centralized dropdown manager
//   const { openDropdown, toggleDropdown, closeDropdown, isOpen, dropdownRef } =
//     useDropdownManager();

//   const menuRef = useRef(null);
//   const menuButtonRef = useRef(null);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme") || "light";
//     setTheme(storedTheme);
//     document.documentElement.classList.toggle("dark", storedTheme === "dark");
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         menuOpen &&
//         menuRef.current &&
//         !menuRef.current.contains(event.target) &&
//         menuButtonRef.current &&
//         !menuButtonRef.current.contains(event.target)
//       ) {
//         setMenuOpen(false);
//         // Close all dropdowns when menu closes
//         closeDropdown();
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuOpen, closeDropdown]);

//   // Close dropdowns when menu closes
//   useEffect(() => {
//     if (!menuOpen) {
//       closeDropdown();
//     }
//   }, [menuOpen, closeDropdown]);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   const handleMenuToggle = () => {
//     const newMenuOpen = !menuOpen;
//     setMenuOpen(newMenuOpen);

//     // Close all dropdowns when closing menu
//     if (!newMenuOpen) {
//       closeDropdown();
//     }
//   };

//   return (
//     <header className="w-full fixed top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="group">
//           <motion.div
//             className="text-xl font-display font-bold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-primary group-hover:scale-105"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Alimosho Central
//           </motion.div>
//         </Link>

//         {/* Desktop: Nav + Theme + Language grouped together */}
//         <div className="hidden lg:flex items-center gap-6">
//           <DesktopNav
//             navItems={navItems}
//             isOpen={isOpen}
//             toggleDropdown={toggleDropdown}
//             closeDropdown={closeDropdown}
//             dropdownRef={dropdownRef}
//           />

//           {/* Theme and Language switcher grouped closely */}
//           <div className="flex items-center gap-3">
//             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
//           </div>
//         </div>

//         {/* Mobile Icons: Language + Theme + Menu */}
//         <div className="flex items-center space-x-2 lg:hidden">
//           <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
//           <motion.button
//             ref={menuButtonRef}
//             onClick={handleMenuToggle}
//             aria-label="Toggle Menu"
//             whileTap={{ scale: 0.9 }}
//             className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
//           >
//             <motion.div
//               animate={{ rotate: menuOpen ? 180 : 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {menuOpen ? <X size={22} /> : <Menu size={22} />}
//             </motion.div>
//           </motion.button>
//         </div>
//       </div>

//       {/* Mobile Menu Panel */}
//       <div ref={menuRef}>
//         <MobileMenu
//           menuOpen={menuOpen}
//           setMenuOpen={setMenuOpen}
//           navItems={navItems}
//           isOpen={isOpen}
//           toggleDropdown={toggleDropdown}
//           closeDropdown={closeDropdown}
//         />
//       </div>
//     </header>
//   );
// }






// src/components/common/Header.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useDropdownManager } from "@/utils/dropdown";
// Import the new sub-components
import DesktopNav from "./nav/desktopNav";
import MobileMenu from "./nav/mobileMenu";
import ThemeToggle from "./nav/themeToggle";
import { navItems } from "@/components/common/navigation";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  // Use centralized dropdown manager
  const {
    openDropdown,
    toggleDropdown,
    closeDropdown,
    isOpen,
    dropdownRef
  } = useDropdownManager();

  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        // Close all dropdowns when menu closes
        closeDropdown();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, closeDropdown]);

  // Close dropdowns when menu closes
  useEffect(() => {
    if (!menuOpen) {
      closeDropdown();
    }
  }, [menuOpen, closeDropdown]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleMenuToggle = () => {
    const newMenuOpen = !menuOpen;
    setMenuOpen(newMenuOpen);

    // Close all dropdowns when closing menu
    if (!newMenuOpen) {
      closeDropdown();
    }
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <motion.div
            className="text-xl font-display font-bold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-primary group-hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Alimosho Central
          </motion.div>
        </Link>

        {/* Desktop: Nav + Theme + Language grouped together */}
        <div className="hidden lg:flex items-center gap-6">
          <DesktopNav
            navItems={navItems}
            isOpen={isOpen}
            toggleDropdown={toggleDropdown}
            closeDropdown={closeDropdown}
            dropdownRef={dropdownRef}
          />

          {/* Theme and Language switcher grouped closely */}
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>

        {/* Mobile Icons: Language + Theme + Menu */}
        <div className="flex items-center space-x-2 lg:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <motion.button
            ref={menuButtonRef}
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div ref={menuRef}>
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          navItems={navItems}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          closeDropdown={closeDropdown}
        />
      </div>
    </header>
  );
}