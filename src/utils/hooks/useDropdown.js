// src/utils/hooks/useDropdown.js

import { useState, useCallback } from "react";

export function useDropdown() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle specific dropdown
  const toggleDropdown = useCallback((dropdownId) => {
    setActiveDropdown((current) =>
      current === dropdownId ? null : dropdownId
    );
  }, []);

  // Open specific dropdown
  const openDropdown = useCallback((dropdownId) => {
    setActiveDropdown(dropdownId);
  }, []);

  // Close all dropdowns
  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Check if specific dropdown is open
  const isDropdownOpen = useCallback(
    (dropdownId) => {
      return activeDropdown === dropdownId;
    },
    [activeDropdown]
  );

  // Check if any dropdown is open
  const isAnyDropdownOpen = activeDropdown !== null;

  return {
    activeDropdown,
    toggleDropdown,
    openDropdown,
    closeDropdown,
    isDropdownOpen,
    isAnyDropdownOpen,
  };
}
