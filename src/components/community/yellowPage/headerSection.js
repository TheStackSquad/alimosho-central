// src/components/community/yellowPage/HeaderSection.js

import { Plus } from "lucide-react";

export default function HeaderSection({ onRegister }) {
  return (
    <div className="bg-amber-50 dark:bg-amber-950 shadow-sm border-b border-amber-200 dark:border-amber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl mt-12 font-bold text-amber-950 dark:text-amber-200 font-['Montserrat']">
              Oshodi Business Directory
            </h1>
            <p className="mt-2 text-lg text-amber-800 dark:text-amber-400 font-['Roboto']">
              Your comprehensive guide to businesses and institutions in Oshodi
              LGA
            </p>
          </div>
          <button
            onClick={onRegister}
            className="bg-amber-500 dark:bg-yellow-400 hover:bg-amber-600 dark:hover:bg-yellow-300 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            Register Business
          </button>
        </div>
      </div>
    </div>
  );
}
