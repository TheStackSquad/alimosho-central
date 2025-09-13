// src/components/community/yellowPage/SearchFilters.js

import { Search, Filter, X } from "lucide-react";
import { categories, oshodiAreas } from "../../../data/yellowData";

const SearchFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedArea,
  setSelectedArea,
  showVerifiedOnly,
  setShowVerifiedOnly,
  resultsCount,
}) => {
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedArea("");
    setShowVerifiedOnly(false);
  };

  const hasActiveFilters =
    searchTerm || selectedCategory || selectedArea || showVerifiedOnly;

  return (
    <div className="bg-amber-50 dark:bg-amber-950 rounded-xl shadow-lg border border-amber-200 dark:border-amber-800 p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-amber-500 dark:text-amber-400" />
        </div>
        <input
          type="text"
          placeholder="Search businesses by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-amber-900 text-amber-950 dark:text-amber-50 placeholder-amber-500 dark:placeholder-amber-400"
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-amber-950 dark:text-amber-200 mb-2 font-['Montserrat']">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 border border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-amber-900 text-amber-950 dark:text-amber-50"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Area Filter */}
        <div>
          <label className="block text-sm font-medium text-amber-950 dark:text-amber-200 mb-2 font-['Montserrat']">
            Area
          </label>
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="w-full px-3 py-2 border border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-amber-900 text-amber-950 dark:text-amber-50"
          >
            <option value="">All Areas</option>
            {oshodiAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        {/* Verified Filter */}
        <div className="flex items-end">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showVerifiedOnly}
              onChange={(e) => setShowVerifiedOnly(e.target.checked)}
              className="w-4 h-4 text-amber-600 bg-amber-100 border-amber-300 rounded focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-amber-950 focus:ring-2 dark:bg-amber-900 dark:border-amber-700"
            />
            <span className="ml-2 text-sm font-medium text-amber-950 dark:text-amber-200">
              Verified only
            </span>
          </label>
        </div>
      </div>

      {/* Filter Actions & Results Count */}
      <div className="flex items-center justify-between pt-4 border-t border-amber-200 dark:border-amber-800">
        <div className="flex items-center gap-4">
          <span className="text-sm text-amber-800 dark:text-amber-400">
            {resultsCount} business{resultsCount !== 1 ? "es" : ""} found
          </span>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              <X className="w-4 h-4" />
              Clear filters
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm text-amber-500 dark:text-amber-400">
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
