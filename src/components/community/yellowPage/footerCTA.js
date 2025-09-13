// src/components/community/yellowPage/FooterCTA.js
import { Plus } from "lucide-react";

export default function FooterCTA({ onRegister }) {
  return (
    <div className="mt-12 text-center">
      <div className="bg-amber-50 dark:bg-amber-950 rounded-xl shadow-lg border border-amber-200 dark:border-amber-800 p-6">
        <h3 className="text-lg font-semibold text-amber-950 dark:text-amber-200 mb-2 font-['Montserrat']">
          Want to list your business?
        </h3>
        <p className="text-amber-800 dark:text-amber-400 mb-4 font-['Roboto']">
          Join our growing directory and connect with customers in Oshodi LGA.
          Registration is free and easy!
        </p>
        <button
          onClick={onRegister}
          className="bg-amber-500 dark:bg-yellow-400 hover:bg-amber-600 dark:hover:bg-yellow-300 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Register Your Business
        </button>
      </div>
    </div>
  );
}
