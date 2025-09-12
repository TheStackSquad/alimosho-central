// src/components/home/metricsContainer.js
"use client";

"use client";
import { useEffect, useRef, useState } from "react";

const MetricsContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const metrics = [
    {
      title: "Active Businesses",
      value: "2,847",
      numericValue: 2847,
      change: "+12%",
      icon: "🏢",
      bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
      textColor: "text-white",
    },
    {
      title: "Security Incidents",
      value: "23",
      numericValue: 23,
      change: "-8%",
      icon: "🛡️",
      bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
      textColor: "text-white",
    },
    {
      title: "Completed Projects",
      value: "156",
      numericValue: 156,
      change: "+24%",
      icon: "✅",
      bgColor: "bg-gradient-to-br from-purple-600 to-violet-700",
      textColor: "text-white",
    },
    {
      title: "Citizens Served",
      value: "45,892",
      numericValue: 45892,
      change: "+16%",
      icon: "👥",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
      textColor: "text-white",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideUpFadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes countUp {
          0% {
            --counter: 0;
          }
          100% {
            --counter: var(--target);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .metric-card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .metric-card.animate {
          animation: slideUpFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .metric-card:nth-child(1).animate {
          animation-delay: 0.1s;
        }
        .metric-card:nth-child(2).animate {
          animation-delay: 0.2s;
        }
        .metric-card:nth-child(3).animate {
          animation-delay: 0.3s;
        }
        .metric-card:nth-child(4).animate {
          animation-delay: 0.4s;
        }

        .counter {
          --counter: 0;
          --target: 0;
          position: relative;
        }

        .counter.animate {
          animation: countUp 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.5s;
        }

        .counter::after {
          content: counter(value);
          counter-reset: value var(--counter);
        }

        .change-badge.animate {
          animation: pulse 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          animation-delay: 1.2s;
        }

        .header-text {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header-text.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .header-title.animate {
          animation-delay: 0.1s;
        }
        .header-subtitle.animate {
          animation-delay: 0.2s;
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200px 100%;
          animation: shimmer 1.5s infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .metric-card,
          .counter,
          .change-badge,
          .header-text {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="floating-container p-6 mt-6 mb-8" ref={containerRef}>
        <div className="mb-6">
          <h2
            className={`text-2xl font-bold font-montserrat text-slate-800 dark:text-slate-100 mb-2 header-text header-title ${
              isVisible ? "animate" : ""
            }`}
          >
            Alimosho Local Government
          </h2>
          <p
            className={`text-slate-600 dark:text-slate-300 font-roboto-slab header-text header-subtitle ${
              isVisible ? "animate" : ""
            }`}
          >
            Serving our community with transparency and excellence
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 flex-1">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`${metric.bgColor} ${
                metric.textColor
              } p-4 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[120px] metric-card relative overflow-hidden ${
                isVisible ? "animate" : ""
              }`}
              style={{ "--target": metric.numericValue }}
            >
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 shimmer opacity-30 pointer-events-none" />

              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-2xl transform hover:scale-110 transition-transform duration-200">
                  {metric.icon}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full bg-white/20 change-badge ${
                    isVisible ? "animate" : ""
                  } ${
                    metric.change.startsWith("+")
                      ? "text-green-100"
                      : "text-red-100"
                  }`}
                >
                  {metric.change}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold font-montserrat mb-1">
                  <span
                    className={`counter ${isVisible ? "animate" : ""}`}
                    style={{ "--target": metric.numericValue }}
                  >
                    {/* Fallback for when CSS counter isn't supported */}
                    <span className="sr-only">{metric.value}</span>
                  </span>
                  {metric.value.includes(",") && (
                    <span className="counter-suffix">
                      {metric.value.replace(/[\d,]/g, "")}
                    </span>
                  )}
                </h3>
                <p className="text-xs opacity-90 font-roboto-slab">
                  {metric.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MetricsContainer;