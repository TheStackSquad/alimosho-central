// src/components/community/yellowPage/BusinessModal.js
import {
  X,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Star,
  CheckCircle,
  Calendar,
} from "lucide-react";

const BusinessModal = ({ business, isOpen, onClose }) => {
  if (!isOpen || !business) return null;

  const {
    name,
    category,
    address,
    phone,
    email,
    website,
    description,
    operatingHours,
    area,
    verified,
    rating,
    dateAdded,
  } = business;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-amber-50 dark:bg-amber-950 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-amber-200 dark:border-amber-800">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-amber-950 dark:text-amber-200 font-['Montserrat']">
              {name}
            </h2>
            {verified && (
              <CheckCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-amber-100 dark:hover:bg-amber-900 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-amber-500 dark:text-amber-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category and Rating */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-full font-medium">
                {category}
              </span>
              <span className="text-amber-800 dark:text-amber-400 font-medium">
                {area}
              </span>
            </div>
            {rating && (
              <div className="flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-2 rounded-lg">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-medium text-yellow-700 dark:text-yellow-400">
                  {rating} / 5.0
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-amber-950 dark:text-amber-200 mb-3 font-['Montserrat']">
              About
            </h3>
            <p className="text-amber-800 dark:text-amber-400 leading-relaxed font-['Roboto']">
              {description}
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-amber-950 dark:text-amber-200 mb-4 font-['Montserrat']">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-amber-950 dark:text-amber-200 font-medium">
                    Address
                  </p>
                  <p className="text-amber-800 dark:text-amber-400">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-amber-950 dark:text-amber-200 font-medium">
                    Phone
                  </p>
                  <a
                    href={`tel:${phone}`}
                    className="text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {email && (
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-amber-950 dark:text-amber-200 font-medium">
                      Email
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="text-amber-600 dark:text-amber-400 hover:underline"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              )}

              {website && (
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-amber-950 dark:text-amber-200 font-medium">
                      Website
                    </p>
                    <a
                      href={`https://${website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 dark:text-amber-400 hover:underline"
                    >
                      {website}
                    </a>
                  </div>
                </div>
              )}

              {operatingHours && (
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-amber-950 dark:text-amber-200 font-medium">
                      Operating Hours
                    </p>
                    <p className="text-amber-800 dark:text-amber-400">
                      {operatingHours}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-amber-950 dark:text-amber-200 font-medium">
                    Listed Since
                  </p>
                  <p className="text-amber-800 dark:text-amber-400">
                    {formatDate(dateAdded)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-amber-200 dark:border-amber-800">
            <a
              href={`tel:${phone}`}
              className="flex-1 bg-amber-500 dark:bg-yellow-400 hover:bg-amber-600 dark:hover:bg-yellow-300 text-white dark:text-gray-900 py-3 px-4 rounded-lg font-medium text-center transition-colors"
            >
              Call Now
            </a>
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex-1 bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-800 text-amber-900 dark:text-amber-200 py-3 px-4 rounded-lg font-medium text-center transition-colors"
              >
                Send Email
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModal;
