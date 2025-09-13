// src/components/community/yellowPage/businessCard.js

"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
} from "lucide-react";

const BusinessCardCollapse = ({ business, onViewDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    name,
    description,
    rating,
    verified,
    address,
    phone,
    email,
    website,
    operatingHours,
  } = business;

  return (
    <div className="w-full mb-4 border border-amber-200 dark:border-amber-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Header - Always visible */}
      <div
        className="flex justify-between items-center p-4 bg-amber-50 dark:bg-amber-950 cursor-pointer w-full"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-amber-950 dark:text-amber-200 truncate">
              {name}
            </h3>
            {verified && (
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            )}
          </div>
          <p className="text-sm text-amber-800 dark:text-amber-400 mt-1 line-clamp-1">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-3 ml-4">
          {rating && (
            <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-900/20 px-2 py-1 rounded">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-medium text-amber-700 dark:text-amber-300">
                {rating}
              </span>
            </div>
          )}
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-amber-500 dark:text-amber-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-amber-500 dark:text-amber-400" />
          )}
        </div>
      </div>

      {/* Collapsible content */}
      {isExpanded && (
        <div className="w-full p-4 bg-amber-100 dark:bg-amber-900/30 border-t border-amber-200 dark:border-amber-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="space-y-3">
              {address && (
                <div className="flex items-start w-full">
                  <MapPin className="w-4 h-4 mt-0.5 mr-2 text-amber-800 dark:text-amber-400 flex-shrink-0" />
                  <span className="text-sm text-amber-950 dark:text-amber-200 break-words">
                    {address}
                  </span>
                </div>
              )}
              {phone && (
                <div className="flex items-center w-full">
                  <Phone className="w-4 h-4 mr-2 text-amber-800 dark:text-amber-400 flex-shrink-0" />
                  <a
                    href={`tel:${phone}`}
                    className="text-sm text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 break-all"
                  >
                    {phone}
                  </a>
                </div>
              )}
              {email && (
                <div className="flex items-center w-full">
                  <Mail className="w-4 h-4 mr-2 text-amber-800 dark:text-amber-400 flex-shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 break-all"
                  >
                    {email}
                  </a>
                </div>
              )}
            </div>
            <div className="space-y-3">
              {website && (
                <div className="flex items-center w-full">
                  <Globe className="w-4 h-4 mr-2 text-amber-800 dark:text-amber-400 flex-shrink-0" />
                  <a
                    href={
                      website.startsWith("http")
                        ? website
                        : `https://${website}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 break-all"
                  >
                    {website}
                  </a>
                </div>
              )}
              {operatingHours && (
                <div className="flex items-center w-full">
                  <Clock className="w-4 h-4 mr-2 text-amber-800 dark:text-amber-400 flex-shrink-0" />
                  <span className="text-sm text-amber-950 dark:text-amber-200">
                    {operatingHours}
                  </span>
                </div>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(business);
                }}
                className="mt-2 w-full bg-amber-500 dark:bg-yellow-400 hover:bg-amber-600 dark:hover:bg-yellow-300 text-white dark:text-gray-900 py-2 px-4 rounded text-sm font-medium transition-colors"
              >
                View Full Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessCardCollapse;
