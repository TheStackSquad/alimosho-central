// src/components/about/aboutLeadership/leadershipGrid.js
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Filter, Search, X } from "lucide-react";
import {
  useFadeIn,
  useStaggerAnimation,
  animationVariants,
} from "@/animation/aboutAnimate";
import { leadershipData } from "@/data/leadershipData";
import LeaderModal from "./leaderModal";

export default function LeadershipGrid() {
  const [containerRef, isVisible] = useFadeIn();
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [gridRef, visibleGridItems] = useStaggerAnimation(
    leadershipData.leaders.length,
    100
  );

  // Filter leaders based on department and search term
  const filteredLeaders = useMemo(() => {
    return leadershipData.leaders.filter((leader) => {
      const matchesDepartment =
        selectedDepartment === "All" ||
        leader.department === selectedDepartment;
      const matchesSearch =
        searchTerm === "" ||
        leader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leader.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leader.department.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesDepartment && matchesSearch;
    });
  }, [selectedDepartment, searchTerm]);

  const openModal = (leader) => setSelectedLeader(leader);
  const closeModal = () => setSelectedLeader(null);

  const clearFilters = () => {
    setSelectedDepartment("All");
    setSearchTerm("");
  };

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
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
              placeholder="Search leaders by name, position, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Filter Toggle for Mobile */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            <Filter size={20} />
            <span>Department</span>
          </button>

          {/* Department Filter - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Department:
            </span>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            >
              <option value="All">All Departments</option>
              {leadershipData.departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {(selectedDepartment !== "All" || searchTerm) && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-300"
            >
              <X size={16} />
              Clear Filters
            </button>
          )}
        </div>

        {/* Mobile Filter Dropdown */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="All">All Departments</option>
                {leadershipData.departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <p className="text-gray-600 dark:text-gray-300">
          Showing {filteredLeaders.length} of {leadershipData.leaders.length}{" "}
          leaders
          {(selectedDepartment !== "All" || searchTerm) && " (filtered)"}
        </p>
      </motion.div>

      {/* Leaders Grid */}
      <motion.div
        ref={gridRef}
        variants={animationVariants.container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="wait">
          {filteredLeaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              variants={animationVariants.card}
              initial="hidden"
              animate={index < visibleGridItems ? "visible" : "hidden"}
              exit="hidden"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100 dark:border-gray-700"
              onClick={() => openModal(leader)}
            >
              {/* Leader Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9dfKZwSR6IhIttJDR5mC8f/9k="
                />
                {/* Department Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    {leader.department}
                  </span>
                </div>
              </div>

              {/* Leader Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-montserrat mb-2">
                  {leader.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {leader.position}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {leader.tenure}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Click for details
                  </span>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No Results Message */}
      {filteredLeaders.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12"
        >
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={32} className="text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No leaders found
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Try adjusting your search criteria or filters
          </p>
        </motion.div>
      )}

      {/* Leader Modal */}
      <LeaderModal
        leader={selectedLeader}
        isOpen={!!selectedLeader}
        onClose={closeModal}
      />
    </div>
  );
}
