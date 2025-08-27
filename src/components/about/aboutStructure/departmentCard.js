// src/components/about/aboutStructure/departmentCard.js
"use client";

import { motion } from "framer-motion";
import { X, Users, Target, Mail, Phone } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 20, scale: 0.95 },
};

export default function DepartmentCard({ department, onClose }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="department-details absolute top-4 right-4 max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-10"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-t-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold font-montserrat">
            {department.name}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
          >
            <X size={18} />
          </button>
        </div>
        <p className="text-blue-100">{department.description}</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Staff Count */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Users size={24} className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Total Staff
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {department.staffCount}
            </p>
          </div>
        </div>

        {/* Responsibilities */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-montserrat mb-3 flex items-center gap-2">
            <Target size={18} />
            Key Responsibilities
          </h3>
          <ul className="space-y-2">
            {department.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">
                  {responsibility}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-montserrat mb-3">
            Contact Information
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Mail size={16} />
              <span>{department.id}@alimoshocentral.org</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <Phone size={16} />
              <span>+234 XXX XXX XXXX</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
