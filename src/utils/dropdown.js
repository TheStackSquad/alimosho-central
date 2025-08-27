// src/utils/dropdown.js
"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export const useDropdownManager = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = useCallback((dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  }, []);

  const closeDropdown = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  const isOpen = useCallback(
    (dropdownName) => {
      return openDropdown === dropdownName;
    },
    [openDropdown]
  );

  return {
    openDropdown,
    toggleDropdown,
    closeDropdown,
    isOpen,
    dropdownRef,
  };
};
