// src/components/about/aboutStructure/orgChart.js
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronDown,
  ChevronRight,
  Users,
  Building,
  Mail,
  Phone,
} from "lucide-react";
import { useFadeIn, animationVariants } from "@/animation/aboutAnimate";
import { structureData } from "@/data/structureData";
import DepartmentCard from "./departmentCard";

// Helper component for org chart nodes
const OrgNode = ({
  node,
  level = 0,
  isExpanded = true,
  onToggle,
  onDepartmentClick,
}) => {
  const hasChildren = node.children && node.children.length > 0;
  const isDepartment = node.role && node.role.includes("Staff Members");

  return (
    <div className="relative">
      {/* Node Content */}
      <div
        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
          isDepartment
            ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/30"
            : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
        } ${level === 0 ? "shadow-lg" : "shadow-md"}`}
        onClick={() => isDepartment && onDepartmentClick(node)}
        style={{ marginLeft: `${level * 20}px` }}
      >
        {/* Expand/Collapse Button */}
        {hasChildren && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle(node.name);
            }}
            className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            {isExpanded ? (
              <ChevronDown
                size={14}
                className="text-gray-600 dark:text-gray-300"
              />
            ) : (
              <ChevronRight
                size={14}
                className="text-gray-600 dark:text-gray-300"
              />
            )}
          </button>
        )}

        {/* Node Icon */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
            level === 0
              ? "bg-primary text-white"
              : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
          }`}
        >
          {level === 0 ? <Building size={18} /> : <Users size={16} />}
        </div>

        {/* Node Info */}
        <div className="flex-1 min-w-0">
          <h3
            className={`font-semibold truncate ${
              level === 0
                ? "text-lg text-gray-900 dark:text-white"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            {node.name}
          </h3>
          {node.role && (
            <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
              {node.role}
            </p>
          )}
        </div>

        {/* Staff Count Badge */}
        {isDepartment && (
          <div className="flex-shrink-0 px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {node.role.match(/\d+/)?.[0] || "0"} Staff
          </div>
        )}
      </div>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div className="mt-3 space-y-3 border-l-2 border-gray-200 dark:border-gray-700 ml-10">
          {node.children.map((child, index) => (
            <OrgNode
              key={`${child.name}-${index}`}
              node={child}
              level={level + 1}
              isExpanded={isExpanded}
              onToggle={onToggle}
              onDepartmentClick={onDepartmentClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function OrgChart() {
  const [containerRef, isVisible] = useFadeIn();
  const [expandedNodes, setExpandedNodes] = useState(new Set());
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const orgChartRef = useRef(null);
  const isDragging = useRef(false);
  const startPosition = useRef({ x: 0, y: 0 });

  // Toggle node expansion
  const toggleNode = (nodeName) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(nodeName)) {
        newSet.delete(nodeName);
      } else {
        newSet.add(nodeName);
      }
      return newSet;
    });
  };

  // Handle department click
  const handleDepartmentClick = (department) => {
    const departmentData = structureData.departments.find(
      (dept) => dept.name === department.name
    );
    setSelectedDepartment(departmentData);
  };

  // Zoom functions
  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));
  const resetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Panning functionality
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only left click
    isDragging.current = true;
    startPosition.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    orgChartRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    setPosition({
      x: e.clientX - startPosition.current.x,
      y: e.clientY - startPosition.current.y,
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (orgChartRef.current) {
      orgChartRef.current.style.cursor = "grab";
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDragging.current = true;
      startPosition.current = {
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      };
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || e.touches.length !== 1) return;
    setPosition({
      x: e.touches[0].clientX - startPosition.current.x,
      y: e.touches[0].clientY - startPosition.current.y,
    });
  };

  // Close department details when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        selectedDepartment &&
        !e.target.closest(".org-chart-container") &&
        !e.target.closest(".department-details")
      ) {
        setSelectedDepartment(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedDepartment]);

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Zoom:
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Zoom out"
            >
              <ZoomOut size={18} />
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[40px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              disabled={scale >= 2}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Zoom in"
            >
              <ZoomIn size={18} />
            </button>
          </div>
        </div>

        <button
          onClick={resetView}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2"
        >
          <RotateCcw size={16} />
          <span>Reset View</span>
        </button>

        <div className="text-sm text-gray-500 dark:text-gray-400 ml-auto">
          💡 Drag to pan • Click departments for details
        </div>
      </motion.div>

      {/* Org Chart Container */}
      <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-inner min-h-[500px]">
        <motion.div
          ref={orgChartRef}
          className="org-chart-container cursor-grab p-8 min-h-[500px]"
          style={{
            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
            transformOrigin: "center center",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          variants={animationVariants.container}
          initial="hidden"
          animate="visible"
        >
          {/* Organization Tree */}
          <div className="space-y-4">
            {structureData.organization.children.map((node, index) => (
              <motion.div
                key={node.name}
                variants={animationVariants.item}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <OrgNode
                  node={node}
                  level={0}
                  isExpanded={expandedNodes.has(node.name)}
                  onToggle={toggleNode}
                  onDepartmentClick={handleDepartmentClick}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Department Details Overlay */}
        <AnimatePresence>
          {selectedDepartment && (
            <DepartmentCard
              department={selectedDepartment}
              onClose={() => setSelectedDepartment(null)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Departments Summary Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {structureData.departments.map((dept, index) => (
          <motion.div
            key={dept.id}
            variants={animationVariants.card}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer"
            onClick={() => setSelectedDepartment(dept)}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Building size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-montserrat mb-2">
              {dept.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              {dept.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {dept.staffCount} staff members
              </span>
              <button className="text-primary hover:text-blue-700 transition-colors duration-200">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
