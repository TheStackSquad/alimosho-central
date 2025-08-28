//src/data/localServicesData.js

export const localServicesData = {
  emergencyServices: [
    {
      id: "alimosho-police",
      name: "Alimosho Police Command",
      category: "Emergency Services",
      priority: 1,
      contact: {
        phone: "+234-807-333-4444",
        email: "alimosho.police@lagosstate.gov.ng",
      },
      address: "Alimosho LGA Headquarters, Ikotun, Lagos",
      hours: "24/7",
      status: "Available",
      description:
        "Main police command serving Alimosho's 2.1M+ residents across 6 wards.",
      onlineServices: [
        "Report Crime Online",
        "Police Report Request",
        "Emergency Alert",
      ],
      processingTime: "Immediate for emergencies",
      fees: "Free for emergencies",
      hasOnlineOption: true,
    },
    {
      id: "igando-general-hospital",
      name: "Igando General Hospital",
      category: "Emergency Services",
      priority: 1,
      contact: {
        phone: "+234-807-333-5555",
        email: "igando.hospital@lagosstate.gov.ng",
      },
      address: "General Hospital Road, Igando, Alimosho, Lagos",
      hours: "24/7",
      status: "Available",
      description:
        "Major public hospital serving Alimosho with emergency and specialist services.",
      onlineServices: [
        "Emergency Appointment",
        "Ambulance Request",
        "Medical Records",
      ],
      processingTime: "Immediate emergency care",
      fees: "Subsidized rates for residents",
      hasOnlineOption: true,
    },
    {
      id: "alimosho-fire-service",
      name: "Alimosho Fire Station",
      category: "Emergency Services",
      priority: 1,
      contact: {
        phone: "+234-807-333-6666",
        email: "fire.service@alimosho.gov.ng",
      },
      address: "Fire Service Road, Egbeda, Alimosho, Lagos",
      hours: "24/7",
      status: "Available",
      description:
        "Fire and rescue services for Alimosho's residential and commercial areas.",
      onlineServices: [
        "Emergency Call",
        "Fire Safety Inspection",
        "Rescue Request",
      ],
      processingTime: "Immediate response",
      fees: "Free emergency services",
      hasOnlineOption: true,
    },
  ],

  onlineFirstServices: [
    {
      id: "alimosho-business-permit",
      name: "Business Permit & Registration",
      category: "Online-First Services",
      priority: 1,
      contact: {
        phone: "+234-807-333-7777",
        email: "permits@alimosho.gov.ng",
      },
      address: "Alimosho LGA Secretariat, Ikotun, Lagos",
      hours: "8:00 AM - 4:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Business registration, permits, and licensing for Alimosho entrepreneurs.",
      onlineServices: [
        "New Business Registration",
        "Permit Renewal",
        "Application Tracking",
        "Digital Certificate",
        "Online Payment",
      ],
      processingTime: "2-3 business days online",
      requirements:
        "Business plan, valid ID, proof of address, CAC certificate",
      fees: "₦2,500 - ₦4,500 (online discount available)",
      hasOnlineOption: true,
    },
    {
      id: "alimosho-tax-services",
      name: "Tax Payment & Assessment",
      category: "Online-First Services",
      priority: 1,
      contact: {
        phone: "+234-807-333-8888",
        email: "tax@alimosho.gov.ng",
      },
      address: "Alimosho Tax Office, Ikotun, Lagos",
      hours: "8:00 AM - 4:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Personal and business tax services for Alimosho residents and enterprises.",
      onlineServices: [
        "Income Tax Payment",
        "Property Tax Online",
        "Tax Clearance Certificate",
        "Payment History",
        "Assessment Appeal",
      ],
      processingTime: "Instant online processing",
      requirements: "Valid ID, TIN number, property documents",
      fees: "Variable based on income/property (online discounts)",
      hasOnlineOption: true,
    },
    {
      id: "alimosho-birth-registration",
      name: "Birth & Death Registration",
      category: "Online-First Services",
      priority: 1,
      contact: {
        phone: "+234-807-333-9999",
        email: "registry@alimosho.gov.ng",
      },
      address: "Alimosho Registry Office, Ikotun, Lagos",
      hours: "8:00 AM - 4:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Civil registration services for births and deaths across Alimosho.",
      onlineServices: [
        "Birth Certificate Application",
        "Death Registration",
        "Certificate Correction",
        "Status Tracking",
        "Online Payment",
      ],
      processingTime: "3-5 days online processing",
      requirements: "Hospital records, parents' ID, marriage certificate",
      fees: "₦2,500 online registration",
      hasOnlineOption: true,
    },
  ],

  utilitiesInfrastructure: [
    {
      id: "alimosho-health-centers",
      name: "Primary Healthcare Centers",
      category: "Utilities & Infrastructure",
      priority: 2,
      contact: {
        phone: "+234-807-444-0000",
        email: "health@alimosho.gov.ng",
      },
      address: "Multiple locations across Alimosho's 6 wards",
      hours: "8:00 AM - 4:00 PM (Mon-Fri), Emergency 24/7",
      status: "Available",
      description:
        "Network of 12 primary healthcare centers serving Alimosho communities.",
      onlineServices: [
        "Appointment Booking",
        "Vaccination Schedule",
        "Health Records",
        "Antenatal Registration",
      ],
      processingTime: "Same-day appointments",
      requirements: "Health insurance or payment, valid ID",
      fees: "₦400 - ₦1,800 per consultation",
      hasOnlineOption: true,
    },
    {
      id: "alimosho-waste-management",
      name: "Waste Management Services",
      category: "Utilities & Infrastructure",
      priority: 2,
      contact: {
        phone: "+234-807-444-1111",
        email: "waste@alimosho.gov.ng",
      },
      address: "Alimosho Environmental Office, Egbeda, Lagos",
      hours: "24/7 Collection Service",
      status: "Available",
      description:
        "Comprehensive waste collection and environmental services for Alimosho.",
      onlineServices: [
        "Waste Pickup Scheduling",
        "Missed Collection Report",
        "Online Bill Payment",
        "Recycling Program",
      ],
      processingTime: "24-hour response",
      requirements: "Property verification",
      fees: "₦1,200 monthly residential, ₦4,500+ commercial",
      hasOnlineOption: true,
    },
    {
      id: "alimosho-water-services",
      name: "Water & Public Utilities",
      category: "Utilities & Infrastructure",
      priority: 2,
      contact: {
        phone: "+234-807-444-2222",
        email: "water@alimosho.gov.ng",
      },
      address: "Alimosho Water Works, Ikotun, Lagos",
      hours: "8:00 AM - 5:00 PM (Mon-Fri), Emergency 24/7",
      status: "Available",
      description:
        "Water supply and public utilities management for Alimosho residents.",
      onlineServices: [
        "Water Connection Application",
        "Issue Reporting",
        "Bill Payment",
        "Maintenance Request",
      ],
      processingTime: "2-4 days for connections",
      requirements: "Property ownership proof",
      fees: "₦20,000 connection fee, variable monthly bills",
      hasOnlineOption: true,
    },
    {
      id: "alimosho-road-maintenance",
      name: "Road & Infrastructure Maintenance",
      category: "Utilities & Infrastructure",
      priority: 3,
      contact: {
        phone: "+234-807-444-3333",
        email: "infrastructure@alimosho.gov.ng",
      },
      address: "Alimosho Works Department, Ikotun, Lagos",
      hours: "8:00 AM - 5:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Road maintenance, drainage, and public infrastructure services.",
      onlineServices: [
        "Road Issue Reporting",
        "Street Light Repair",
        "Drainage Complaint",
        "Repair Status Tracking",
      ],
      processingTime: "5-10 days depending on severity",
      requirements: "Location details, photo evidence",
      fees: "Free public infrastructure maintenance",
      hasOnlineOption: true,
    },
  ],

  administrativeServices: [
    {
      id: "alimosho-marriage-registry",
      name: "Marriage Registration",
      category: "Administrative Services",
      priority: 2,
      contact: {
        phone: "+234-807-444-4444",
        email: "marriage@alimosho.gov.ng",
      },
      address: "Alimosho Marriage Registry, Ikotun, Lagos",
      hours: "9:00 AM - 3:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Marriage registration and certificate services for Alimosho residents.",
      onlineServices: [
        "Marriage Date Booking",
        "Certificate Application",
        "Verification Services",
        "Online Payment",
      ],
      processingTime: "Same-day ceremony, 2-3 days certificates",
      requirements: "Valid IDs, witnesses, previous marriage documents",
      fees: "₦8,500 registration + ₦4,000 certificate",
      hasOnlineOption: true,
    },
    {
      id: "alimosho-land-services",
      name: "Land Documentation Services",
      category: "Administrative Services",
      priority: 3,
      contact: {
        phone: "+234-807-444-5555",
        email: "lands@alimosho.gov.ng",
      },
      address: "Alimosho Lands Office, Ikotun, Lagos",
      hours: "9:00 AM - 3:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Land verification, property documentation, and building permits.",
      onlineServices: [
        "Land Verification",
        "Building Permit Application",
        "Property Search",
        "Document Certification",
      ],
      processingTime: "10-15 days for permits",
      requirements: "Survey plans, land documents, architectural drawings",
      fees: "₦45,000 - ₦180,000 based on property type",
      hasOnlineOption: false,
    },
    {
      id: "alimosho-community-services",
      name: "Community Development Services",
      category: "Administrative Services",
      priority: 2,
      contact: {
        phone: "+234-807-444-6666",
        email: "community@alimosho.gov.ng",
      },
      address: "Alimosho Community Development Office, Ikotun, Lagos",
      hours: "8:00 AM - 4:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Community projects, youth programs, and social development initiatives.",
      onlineServices: [
        "Project Proposal Submission",
        "Community Grant Application",
        "Event Registration",
        "Volunteer Sign-up",
      ],
      processingTime: "7-14 days for grant applications",
      requirements: "Community group registration, project proposal",
      fees: "Free community services",
      hasOnlineOption: true,
    },
  ],
};

// Helper function to get all services sorted by priority and online availability
export const getAllServices = () => {
  const allServices = [
    ...localServicesData.emergencyServices,
    ...localServicesData.onlineFirstServices,
    ...localServicesData.utilitiesInfrastructure,
    ...localServicesData.administrativeServices,
  ];

  return allServices.sort((a, b) => {
    // First sort by online availability (online first)
    if (a.hasOnlineOption && !b.hasOnlineOption) return -1;
    if (!a.hasOnlineOption && b.hasOnlineOption) return 1;

    // Then by priority
    return a.priority - b.priority;
  });
};

export const getServicesByCategory = (category) => {
  switch (category) {
    case "Emergency Services":
      return localServicesData.emergencyServices;
    case "Online-First Services":
      return localServicesData.onlineFirstServices;
    case "Utilities & Infrastructure":
      return localServicesData.utilitiesInfrastructure;
    case "Administrative Services":
      return localServicesData.administrativeServices;
    default:
      return [];
  }
};
