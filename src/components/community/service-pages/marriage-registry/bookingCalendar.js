// src/components/community/service-pages/marriage-registry/bookingCalendar.js
"use client";

import { useState, useEffect } from "react";
import { mockAvailability } from "@/data/scheduleData";

export default function BookingCalendar({ onDateSelect }) {
  // Set to March 2024 to match your mock data, or update mock data
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 9, 9)); // Sept 2025
  const [selectedDate, setSelectedDate] = useState(null);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const isDateAvailable = (date) => {
    const dateStr = formatDate(date);
    return mockAvailability[dateStr] && mockAvailability[dateStr].length > 0;
  };

  const handleDateSelect = (date) => {
    if (date && isDateAvailable(date)) {
      console.log("Selected date:", date, "Formatted:", formatDate(date));
      setSelectedDate(date);
      onDateSelect(formatDate(date));
    } else {
      console.log("Date not available:", date, "Formatted:", formatDate(date));
    }
  };

  const generateCalendarDays = () => {
    const days = [];
    const totalDays = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      days.push(date);
    }

    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const days = generateCalendarDays();
  const monthName = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Debug: Show available dates
  useEffect(() => {
    console.log("Available dates:", Object.keys(mockAvailability));
  }, []);

  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigateMonth(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          ←
        </button>
        <h3 className="text-xl font-semibold text-gray-800">{monthName}</h3>
        <button
          onClick={() => navigateMonth(1)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((date, index) => {
          const isSelected =
            selectedDate &&
            date &&
            formatDate(date) === formatDate(selectedDate);
          const isAvailable = date && isDateAvailable(date);

          return (
            <button
              key={date ? date.toISOString() : `empty-${index}`}
              onClick={() => handleDateSelect(date)}
              disabled={!isAvailable}
              className={`h-12 rounded-lg text-sm font-medium transition-all ${
                !date
                  ? "bg-transparent cursor-default"
                  : !isAvailable
                  ? "bg-gray-100 text-gray-400 opacity-50 cursor-not-allowed"
                  : isSelected
                  ? "bg-blue-600 text-white shadow-lg transform scale-105 cursor-pointer"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md border border-gray-200 cursor-pointer"
              }`}
            >
              {date ? date.getDate() : ""}
              {isSelected && (
                <div className="absolute inset-0 border-2 border-blue-800 rounded-lg pointer-events-none"></div>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-600">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-600 rounded mr-1"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-100 rounded mr-1"></div>
          <span>Unavailable</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-600 rounded mr-1 border-2 border-blue-800"></div>
          <span>Selected</span>
        </div>
      </div>
    </div>
  );
}
