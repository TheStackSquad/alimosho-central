// src/data/structureData.js
export const structureData = {
  organization: {
    name: "Alimosho Central Leadership",
    children: [
      {
        name: "Executive Office",
        children: [
          { name: "Community Leader", role: "Chief Adebayo Johnson" },
          { name: "Deputy Leader", role: "Dr. Funmi Adeola" },
        ],
      },
      {
        name: "Administration",
        children: [
          { name: "Administrative Director", role: "Mr. Chinedu Okoro" },
          { name: "Finance Department", role: "3 Staff Members" },
          { name: "HR Department", role: "2 Staff Members" },
        ],
      },
      {
        name: "Community Development",
        children: [
          { name: "Community Relations", role: "Mrs. Bola Martins" },
          { name: "Education Wing", role: "4 Officers" },
          { name: "Healthcare Wing", role: "3 Officers" },
        ],
      },
      {
        name: "Operations",
        children: [
          { name: "Infrastructure", role: "5 Engineers" },
          { name: "Environment", role: "4 Officers" },
          { name: "Security", role: "6 Officers" },
        ],
      },
    ],
  },

  departments: [
    {
      id: "executive",
      name: "Executive Office",
      description:
        "Overall leadership and strategic direction of Alimosho Central",
      staffCount: 2,
      responsibilities: [
        "Strategic Planning",
        "Community Representation",
        "Policy Development",
      ],
    },
    {
      id: "administration",
      name: "Administration",
      description: "Daily operations and administrative management",
      staffCount: 7,
      responsibilities: [
        "Finance Management",
        "Human Resources",
        "Record Keeping",
      ],
    },
    {
      id: "community",
      name: "Community Development",
      description: "Community engagement and development programs",
      staffCount: 8,
      responsibilities: [
        "Education Programs",
        "Healthcare Services",
        "Community Events",
      ],
    },
    {
      id: "operations",
      name: "Operations",
      description: "Infrastructure and environmental management",
      staffCount: 15,
      responsibilities: [
        "Infrastructure Maintenance",
        "Environmental Conservation",
        "Security Services",
      ],
    },
  ],
};
