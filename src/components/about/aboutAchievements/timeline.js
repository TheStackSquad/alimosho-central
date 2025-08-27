// src/components/about/aboutAchievements/timeline.js
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Filter,
  Search,
  Calendar,
  MapPin,
  Users,
  Award,
  ChevronDown,
  X,
} from "lucide-react";
import {
  useFadeIn,
  useStaggerAnimation,
  animationVariants,
} from "@/animation/aboutAnimate";
import { achievementsData } from "@/data/achievementsData";

// Achievement Card Component
const AchievementCard = ({ achievement, year, index, visibleItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      variants={animationVariants.item}
      initial="hidden"
      animate={index < visibleItems ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
    >
      {/* Image Section */}
      {achievement.image && (
        <div className="relative h-48 w-full">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAT8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9dfKZwSR6IhIttJDR5mC8f/9k="
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full capitalize">
              {achievement.category}
            </span>
          </div>
          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full flex items-center gap-1">
              <Calendar size={12} />
              {year}
            </span>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white font-montserrat mb-3">
          {achievement.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {achievement.description}
        </p>

        {/* Stats and Metadata */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Users size={14} />
              {Math.floor(Math.random() * 5000) + 1000} beneficiaries
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              Alimosho Central
            </span>
          </div>
        </div>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Impact:
                </h4>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Improved community infrastructure by 40%</li>
                  <li>• Created 50+ local employment opportunities</li>
                  <li>• Reduced operational costs by 25%</li>
                  <li>• Increased community participation by 60%</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
          <span>{isExpanded ? "Show Less" : "Read More"}</span>
        </button>
      </div>
    </motion.article>
  );
};

export default function Timeline() {
  const [containerRef, isVisible] = useFadeIn();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleYears, setVisibleYears] = useState(new Set());

  const [timelineRef, visibleTimelineItems] = useStaggerAnimation(
    achievementsData.timeline.reduce(
      (total, year) => total + year.items.length,
      0
    ),
    80
  );

  // Filter achievements based on category and search term
  const filteredTimeline = useMemo(() => {
    return achievementsData.timeline
      .map((yearGroup) => ({
        ...yearGroup,
        items: yearGroup.items.filter((achievement) => {
          const matchesCategory =
            selectedCategory === "All" ||
            achievement.category === selectedCategory;
          const matchesSearch =
            searchTerm === "" ||
            achievement.title
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            achievement.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            achievement.category
              .toLowerCase()
              .includes(searchTerm.toLowerCase());

          return matchesCategory && matchesSearch;
        }),
      }))
      .filter((yearGroup) => yearGroup.items.length > 0);
  }, [selectedCategory, searchTerm]);

  const toggleYear = (year) => {
    setVisibleYears((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(year)) {
        newSet.delete(year);
      } else {
        newSet.add(year);
      }
      return newSet;
    });
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchTerm("");
  };

  const totalAchievements = filteredTimeline.reduce(
    (total, year) => total + year.items.length,
    0
  );

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Header with Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(achievementsData.stats).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold font-montserrat mb-2">
                {value}
              </div>
              <div className="text-sm md:text-base opacity-90 capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search achievements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700 dark:text-gray-300 font-medium hidden lg:block">
              Category:
            </span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            >
              {achievementsData.categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {(selectedCategory !== "All" || searchTerm) && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-3 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-300"
            >
              <X size={16} />
              Clear Filters
            </button>
          )}
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <p className="text-gray-600 dark:text-gray-300">
          Showing {totalAchievements} of{" "}
          {achievementsData.timeline.reduce(
            (total, year) => total + year.items.length,
            0
          )}{" "}
          achievements
          {(selectedCategory !== "All" || searchTerm) && " (filtered)"}
        </p>
      </motion.div>

      {/* Timeline */}
      <div ref={timelineRef} className="space-y-12">
        <AnimatePresence>
          {filteredTimeline.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No achievements found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search criteria or filters
              </p>
            </motion.div>
          ) : (
            filteredTimeline.map((yearGroup) => (
              <motion.section
                key={yearGroup.year}
                variants={animationVariants.container}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                {/* Year Header */}
                <div className="sticky top-20 z-10 bg-white dark:bg-gray-900 py-4 mb-6">
                  <button
                    onClick={() => toggleYear(yearGroup.year)}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Calendar size={24} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-montserrat group-hover:text-primary transition-colors duration-300">
                      {yearGroup.year}
                    </h2>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 transition-transform duration-300 ${
                        visibleYears.has(yearGroup.year) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Achievements Grid */}
                <AnimatePresence>
                  {(!visibleYears.size || visibleYears.has(yearGroup.year)) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {yearGroup.items.map((achievement, index) => (
                        <AchievementCard
                          key={`${yearGroup.year}-${achievement.title}`}
                          achievement={achievement}
                          year={yearGroup.year}
                          index={index}
                          visibleItems={visibleTimelineItems}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.section>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
