// src/utils/hooks/useClickOutside.js

import { useEffect, useCallback } from "react";

export function useClickOutside(refs, handler, enabled = true) {
  const handleClickOutside = useCallback(
    (event) => {
      if (!enabled) return;

      // Handle both single ref and array of refs
      const refsArray = Array.isArray(refs) ? refs : [refs];

      // Check if click is outside all specified elements
      const isOutside = refsArray.every((ref) => {
        return ref.current && !ref.current.contains(event.target);
      });

      if (isOutside) {
        handler(event);
      }
    },
    [refs, handler, enabled]
  );

  useEffect(() => {
    if (!enabled) return;

    // Add event listener with capture to ensure we catch the event
    // before any stopPropagation calls
    document.addEventListener("mousedown", handleClickOutside, true);
    document.addEventListener("touchstart", handleClickOutside, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [handleClickOutside, enabled]);
}

// Enhanced version that also handles escape key
export function useClickOutsideAndEscape(refs, handler, enabled = true) {
  // Use the base click outside hook
  useClickOutside(refs, handler, enabled);

  // Handle escape key
  useEffect(() => {
    if (!enabled) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handler(event);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handler, enabled]);
}
