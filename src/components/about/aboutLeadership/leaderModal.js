// src/components/about/aboutLeadership/leaderModal.js
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  Mail,
  Calendar,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function LeaderModal({ leader, isOpen, onClose }) {
  if (!leader) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal Content */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative">
                <div className="relative h-64 w-full">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAT8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9dfKZwSR6IhIttJDR5mC8f/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                  >
                    <X size={20} className="text-gray-700 dark:text-gray-300" />
                  </button>

                  {/* Department Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                      {leader.department}
                    </span>
                  </div>
                </div>

                {/* Leader Info in Header */}
                <div className="absolute bottom-4 left-6">
                  <h2 className="text-3xl font-bold text-white font-montserrat mb-1">
                    {leader.name}
                  </h2>
                  <p className="text-blue-200 text-lg">{leader.position}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tenure */}
                <div className="flex items-center gap-3 mb-6 text-gray-600 dark:text-gray-300">
                  <Calendar size={20} />
                  <span className="font-medium">Tenure: {leader.tenure}</span>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-montserrat mb-3">
                    Biography
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                {/* Achievements */}
                {leader.achievements && leader.achievements.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-montserrat mb-3 flex items-center gap-2">
                      <Award size={20} />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {leader.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contact */}
                {leader.contact && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-montserrat mb-3">
                      Contact
                    </h3>
                    <a
                      href={`mailto:${leader.contact}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                    >
                      <Mail size={16} />
                      {leader.contact}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
