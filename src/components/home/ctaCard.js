// src/components/home/ctaCard.js

"use client";

import { useRouter } from "next/navigation";

const CtaCard = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/community");
  };

  return (
    <div className="floating-container p-6 h-full">
      <div className="h-full flex flex-col justify-center text-center">
        <div className="mb-4">
          <div className="text-4xl mb-3">📋</div>
          <h3 className="text-lg font-bold font-montserrat text-slate-800 dark:text-gray-100 mb-2">
            Apply for Services
          </h3>
          <p className="text-slate-600 dark:text-slate-300 font-roboto-slab text-sm">
            Access all government services and applications online
          </p>
        </div>

        <button
          onClick={handleRedirect}
          className="bg-blue-600 dark:bg-sky-500 text-white font-bold py-3 px-6 rounded-lg 
                     hover:bg-blue-700 dark:hover:bg-sky-400
                     hover:shadow-lg transform hover:scale-105 
                     focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-sky-600
                     transition-all duration-300 font-montserrat"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CtaCard;

