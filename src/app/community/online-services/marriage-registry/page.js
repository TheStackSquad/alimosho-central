// src/app/community/online-services/marriage-registry/page.js
"use client";

import { useState } from "react";
import BookingCalendar from "@/components/community/service-pages/marriage-registry/bookingCalendar";
import TimeSlotPicker from "@/components/community/service-pages/marriage-registry/timeSlotPicker";
import CoupleDetailsForm from "@/components/community/service-pages/marriage-registry/coupleDetailsForm";
import ConfirmationCard from "@/components/community/service-pages/marriage-registry/cofirmationCard";
import ProgressStepper from "@/components/community/service-pages/marriage-registry/progressStepper";

export default function MarriageRegistryPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [coupleDetails, setCoupleDetails] = useState({});

  const handleConfirmBooking = () => {
    // Simulate successful booking
    alert(
      "Appointment booked successfully! In a real implementation, this would connect to your backend system."
    );
  };

  const steps = [
    { number: 1, title: "Select Date" },
    { number: 2, title: "Choose Time" },
    { number: 3, title: "Your Details" },
    { number: 4, title: "Confirmation" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-rose-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-2">
            Marriage Registry Booking
          </h1>
          <p className="text-gray-600">
            Schedule your marriage registration appointment with our local
            government office
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <ProgressStepper steps={steps} currentStep={step} />

          <div className="mt-8">
            {step === 1 && (
              <BookingCalendar
                onDateSelect={(date) => {
                  setSelectedDate(date);
                  setStep(2);
                }}
              />
            )}

            {step === 2 && (
              <TimeSlotPicker
                selectedDate={selectedDate}
                onTimeSelect={(time) => {
                  setSelectedTime(time);
                  setStep(3);
                }}
                onBack={() => setStep(1)}
              />
            )}

            {step === 3 && (
              <CoupleDetailsForm
                onSubmit={(details) => {
                  setCoupleDetails(details);
                  setStep(4);
                }}
                onBack={() => setStep(2)}
              />
            )}

            {step === 4 && (
              <ConfirmationCard
                date={selectedDate}
                time={selectedTime}
                details={coupleDetails}
                onConfirm={handleConfirmBooking}
                onEdit={() => setStep(1)}
              />
            )}
          </div>
        </div>

        {/* Office Information */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
          <h3 className="font-semibold text-blue-900 mb-2">
            Office Information
          </h3>
          <p className="text-blue-700 text-sm">
            Local Government Secretariat, Central Area, Lagos
            <br />
            Mon - Fri: 8:00 AM - 4:00 PM
            <br />
            📞 +234 800 123 4567
          </p>
        </div>
      </div>
    </div>
  );
}
