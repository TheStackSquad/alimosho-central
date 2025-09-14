// src/components/community/service-pages/marriage-registry/timeSlotPicker.js
"use client";

import { mockAvailability } from "@/data/scheduleData";

export default function TimeSlotPicker({ selectedDate, onTimeSelect, onBack }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const availableSlots = mockAvailability[selectedDate] || [];

  if (!selectedDate) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Please select a date first</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
        >
          ← Back to calendar
        </button>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Select Time Slot
        </h3>
        <p className="text-gray-600">{formatDate(selectedDate)}</p>
      </div>

      {/* Time Slots Grid */}
      <div className="grid grid-cols-2 gap-3">
        {availableSlots.length > 0 ? (
          availableSlots.map((time, index) => (
            <button
              key={index}
              onClick={() => onTimeSelect(time)}
              className="p-4 bg-white border-2 border-blue-100 rounded-xl hover:border-blue-300 hover:bg-blue-50 hover:shadow-md transition-all duration-200 group"
            >
              <div className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">
                {time}
              </div>
              <div className="text-sm text-gray-500 group-hover:text-blue-600">
                Morning
              </div>
            </button>
          ))
        ) : (
          <div className="col-span-2 text-center py-8">
            <div className="text-gray-400 mb-2">No available time slots</div>
            <button
              onClick={onBack}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Choose another date
            </button>
          </div>
        )}
      </div>

      {/* Additional Information */}
      {availableSlots.length > 0 && (
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start">
            <div className="text-yellow-600 mr-2">⏰</div>
            <div className="text-sm text-yellow-700">
              <strong>Duration:</strong> Each ceremony takes approximately 30
              minutes.
              <br />
              <strong>Arrival:</strong> Please arrive 15 minutes before your
              scheduled time.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
