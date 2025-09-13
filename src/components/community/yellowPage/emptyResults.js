// src/components/community/yellowPage/EmptyResults.js

import { Building2 } from "lucide-react";

export default function EmptyResults({ onClearFilters }) {
  return (
    <div className="text-center py-12">
      <div className="bg-amber-50 dark:bg-amber-950 rounded-xl shadow-lg border border-amber-200 dark:border-amber-800 p-8 max-w-md mx-auto">
        <Building2 className="w-16 h-16 text-amber-500 dark:text-amber-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-amber-950 dark:text-amber-200 mb-2 font-['Montserrat']">
          No businesses found
        </h3>
        <p className="text-amber-800 dark:text-amber-400 mb-4">
          No businesses match your current search criteria. Try adjusting your
          filters or search term.
        </p>
        <button
          onClick={onClearFilters}
          className="bg-amber-500 dark:bg-yellow-400 hover:bg-amber-600 dark:hover:bg-yellow-300 text-white dark:text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
