// src/components/home/marriageRegistry.js

"use client";

const MarriageRegistry = () => {
  const handleScheduleClick = () => {
    // This will redirect to marriage registry page when built
    console.log("Redirect to marriage registry scheduler");
  };

  return (
    <div className="floating-container p-6 h-full">
      <div className="h-full flex flex-col">
        {/* Header Section */}
        <div className="flex items-center mb-6">
          <div className="text-4xl mr-4">💒</div>
          <div>
            <h3 className="text-xl font-bold font-montserrat text-slate-800 dark:text-slate-100 mb-1">
              Marriage Registry
            </h3>
            <p className="text-slate-600 dark:text-slate-300 font-roboto-slab text-sm">
              Schedule your marriage ceremony with ease
            </p>
          </div>
        </div>

        {/* Stats and Action Row */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex-1">
          {/*
            New layout: flex-col for mobile, grid-cols-3 for medium screens and up
          */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 h-full items-center">
            {/* This Month Card */}
            <div className="w-full text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
              <p className="text-2xl font-bold font-montserrat text-blue-600 dark:text-blue-400 mb-1">
                24
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300 font-roboto-slab font-medium">
                This Month
              </p>
            </div>

            {/* This Year Card */}
            <div className="w-full text-center p-3 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl border border-emerald-200/50 dark:border-emerald-700/50">
              <p className="text-2xl font-bold font-montserrat text-emerald-600 dark:text-emerald-400 mb-1">
                156
              </p>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 font-roboto-slab font-medium">
                This Year
              </p>
            </div>

            {/* Schedule Button */}
            <div className="w-full flex justify-center">
              <button
                onClick={handleScheduleClick}
                className="group relative bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-montserrat w-full overflow-hidden"
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>

                {/* Button content */}
                <div className="relative flex items-center justify-center space-x-2">
                  <span className="text-sm">Schedule</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Optional: Bottom decorative element */}
        <div className="mt-4 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-pink-300 dark:bg-pink-600 rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-rose-300 dark:bg-rose-600 rounded-full opacity-80"></div>
            <div className="w-2 h-2 bg-red-300 dark:bg-red-600 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarriageRegistry;
