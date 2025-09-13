// src/components/community/yellowPage/categorySection.js

"use client";

import BusinessCardCollapse from "./businessCard";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function CategorySection({
  category,
  businesses,
  onViewDetails,
  defaultExpanded = true,
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <section className="mb-8" aria-labelledby={`${category}-heading`}>
      <div
        className="flex items-center justify-between cursor-pointer mb-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2
          id={`${category}-heading`}
          className="text-2xl font-bold text-amber-950 dark:text-amber-200 flex items-center gap-3"
        >
          <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
          <span>{category}</span>
          <span className="text-amber-800 dark:text-amber-400 text-sm font-normal">
            ({businesses.length}{" "}
            {businesses.length === 1 ? "business" : "businesses"})
          </span>
        </h2>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-amber-500 dark:text-amber-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-amber-500 dark:text-amber-400" />
        )}
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {businesses.map((business) => (
            <BusinessCardCollapse
              key={business.id}
              business={business}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
}
