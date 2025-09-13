// src/components/community/yellowPage/emergencyServiceCard.js

"use client";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function EmergencyServiceCard({ service }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full mb-4 border border-amber-200 dark:border-amber-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        className="w-full flex justify-between items-center p-4 bg-amber-50 dark:bg-amber-950 text-left"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={`service-details-${service.id}`}
      >
        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
          <h3 className="font-semibold text-lg text-amber-950 dark:text-amber-200">
            {service.name}
          </h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-amber-500 dark:text-amber-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-amber-500 dark:text-amber-400" />
        )}
      </button>

      {isExpanded && (
        <div
          id={`service-details-${service.id}`}
          className="p-4 bg-amber-100 dark:bg-amber-900/30 border-t border-amber-200 dark:border-amber-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mt-0.5 mr-2 text-amber-800 dark:text-amber-400" />
                <span className="text-sm text-amber-950 dark:text-amber-200">
                  {service.address}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-amber-800 dark:text-amber-400" />
                <a
                  href={`tel:${service.contact.phone}`}
                  className="text-sm text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300"
                >
                  {service.contact.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-amber-800 dark:text-amber-400" />
                <a
                  href={`mailto:${service.contact.email}`}
                  className="text-sm text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300"
                >
                  {service.contact.email}
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-amber-800 dark:text-amber-400" />
                <span className="text-sm text-amber-950 dark:text-amber-200">
                  {service.hours}
                </span>
              </div>
              <p className="text-sm text-amber-800 dark:text-amber-400">
                {service.description}
              </p>
              {service.hasOnlineOption && (
                <div className="mt-2">
                  <span className="inline-block bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs px-2 py-1 rounded">
                    Online Services Available
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
