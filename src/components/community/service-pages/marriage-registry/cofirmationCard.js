// src/components/community/service-pages/marriage-registry/confirmationCard.js
"use client";

import { requiredMaterials, feeStructure } from "@/data/scheduleData";

export default function ConfirmationCard({
  date,
  time,
  details,
  onConfirm,
  onEdit,
}) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Confirm Your Appointment
        </h3>
        <p className="text-gray-600">Review your details before confirming</p>
      </div>

      <div className="space-y-6">
        {/* Appointment Summary */}
        <div className="bg-blue-50 p-6 rounded-xl">
          <h4 className="font-semibold text-blue-900 mb-4 text-lg">
            Appointment Details
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-blue-700 mb-1">Date</div>
              <div className="font-semibold text-blue-900">
                {formatDate(date)}
              </div>
            </div>
            <div>
              <div className="text-sm text-blue-700 mb-1">Time</div>
              <div className="font-semibold text-blue-900">{time}</div>
            </div>
          </div>
        </div>

        {/* Couple Information */}
        <div className="bg-white border border-gray-200 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-800 mb-4 text-lg">
            Couple Information
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-gray-700 mb-2">Partner 1</h5>
              <div className="space-y-1 text-sm">
                <div>
                  <strong>Name:</strong> {details.partner1Name}
                </div>
                <div>
                  <strong>Email:</strong> {details.partner1Email}
                </div>
                <div>
                  <strong>Phone:</strong> {details.partner1Phone}
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-gray-700 mb-2">Partner 2</h5>
              <div className="space-y-1 text-sm">
                <div>
                  <strong>Name:</strong> {details.partner2Name}
                </div>
                <div>
                  <strong>Email:</strong> {details.partner2Email}
                </div>
                <div>
                  <strong>Phone:</strong> {details.partner2Phone}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Required Materials */}
        <div className="bg-white border border-gray-200 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-800 mb-4 text-lg">
            Required Documents
          </h4>
          <div className="space-y-3">
            {requiredMaterials.map((item) => (
              <div key={item.id} className="flex items-start">
                <div className="w-5 h-5 bg-green-100 border border-green-300 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-600">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Structure */}
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
          <h4 className="font-semibold text-yellow-900 mb-4 text-lg">
            Fee Summary
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Marriage License Fee:</span>
              <span className="font-medium">
                {formatCurrency(feeStructure.marriageLicense)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Ceremony Fee:</span>
              <span className="font-medium">
                {formatCurrency(feeStructure.ceremonyFee)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Venue Fee:</span>
              <span className="font-medium">
                {formatCurrency(feeStructure.venueFee)}
              </span>
            </div>
            <div className="border-t border-yellow-300 pt-2 mt-2">
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span className="text-yellow-900">
                  {formatCurrency(feeStructure.total)}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-yellow-700">
            💡 Payment is due at the time of your appointment. Please bring
            exact change or be prepared for electronic payment.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4">
          <button
            onClick={onEdit}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
          >
            Edit Appointment
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium shadow-sm flex items-center justify-center"
          >
            <span className="mr-2">✓</span>
            Confirm Booking
          </button>
        </div>

        {/* Important Notes */}
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
          <h5 className="font-semibold text-red-900 mb-2">
            Important Reminders
          </h5>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• Both partners must be present at the appointment</li>
            <li>• Bring all required original documents and photocopies</li>
            <li>• Arrive 15 minutes before your scheduled time</li>
            <li>• Late arrivals may result in appointment cancellation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
