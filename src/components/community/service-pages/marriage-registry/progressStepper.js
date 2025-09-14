// src/components/community/service-pages/marriage-registry/progressStepper.js
export default function ProgressStepper({ steps, currentStep }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-semibold ${
                currentStep >= step.number
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              {step.number}
            </div>
            <div className="ml-2 hidden sm:block">
              <div
                className={`text-sm font-medium ${
                  currentStep >= step.number ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {step.title}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-12 h-0.5 mx-2 ${
                  currentStep > step.number ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
