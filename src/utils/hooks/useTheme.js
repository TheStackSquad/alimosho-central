// src/utils/hooks/useTheme.js

import { useState, useEffect, useCallback } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);

  // step 1: Define applyTheme with useCallback to prevent re-creation on every render.
  // This function modifies the DOM directly to apply the theme class.
  const applyTheme = useCallback((newTheme) => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      if (newTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, []);

  // step 2: Define the theme toggle function with useCallback for stability.
  // It flips the current theme and updates state and localStorage.
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (error) {
      console.warn("Failed to save theme preference:", error);
    }
  }, [theme, applyTheme]);

  // step 3: Define a function to set a specific theme, wrapped in useCallback.
  // It validates the theme, updates state and localStorage.
  const setThemeMode = useCallback(
    (newTheme) => {
      if (newTheme !== "light" && newTheme !== "dark") {
        console.warn("Invalid theme mode:", newTheme);
        return;
      }
      setTheme(newTheme);
      applyTheme(newTheme);
      try {
        localStorage.setItem("theme", newTheme);
      } catch (error) {
        console.warn("Failed to save theme preference:", error);
      }
    },
    [applyTheme]
  );

  // step 4: Use a single useEffect hook to handle initial theme loading and system preference changes.
  // This combines the logic from your two original useEffects and ensures they run once on mount.
  useEffect(() => {
    const initializeTheme = () => {
      try {
        const storedTheme = localStorage.getItem("theme");
        if (
          storedTheme &&
          (storedTheme === "light" || storedTheme === "dark")
        ) {
          setTheme(storedTheme);
          applyTheme(storedTheme);
        } else {
          const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;
          const systemTheme = prefersDark ? "dark" : "light";
          setTheme(systemTheme);
          applyTheme(systemTheme);
          localStorage.setItem("theme", systemTheme);
        }
      } catch (error) {
        console.warn(
          "Theme initialization failed, falling back to light theme:",
          error
        );
        setTheme("light");
        applyTheme("light");
      } finally {
        setIsLoading(false);
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      const storedTheme = localStorage.getItem("theme");
      if (!storedTheme) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
      }
    };

    initializeTheme();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [applyTheme]);

  // step 5: Return all public state and functions.
  return {
    theme,
    toggleTheme,
    setTheme: setThemeMode,
    isLoading,
    isDark: theme === "dark",
    isLight: theme === "light",
  };
}
