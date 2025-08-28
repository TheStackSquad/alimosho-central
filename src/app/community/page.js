// src/app/community/page.js

import { publicInstitutions, wardsData } from "@/data/oshodiData";
import { localServicesData } from "@/data/localServicesData";
import CommunityUI from "@/components/community/communityUI";

export default function CommunityHubServerPage() {
  const communityStats = [
    {
      metric: "92%",
      description:
        "Reduction in crime rates through community policing initiatives",
      icon: "🛡️",
      color: "text-emerald-600",
    },
    {
      metric: "2.1M+",
      description:
        "Residents served across Alimosho's 6 local government wards",
      icon: "👥",
      color: "text-blue-600",
    },
    {
      metric: "85%",
      description: "Residents with access to improved healthcare facilities",
      icon: "🏥",
      color: "text-red-500",
    },
    {
      metric: "72%",
      description: "Digital literacy rate among youth population (15-35 years)",
      icon: "💻",
      color: "text-amber-600",
    },
  ];

  const featureCards = [
    {
      title: "Local Services",
      description:
        "Access Alimosho government services online - Process applications from home!",
      icon: "🏢",
      path: "/yellow-page",
      stats: `${
        Object.values(localServicesData).flat().length
      } services available across Alimosho`,
      color: "from-blue-600 to-cyan-600",
      features: [
        "Birth & Death Registration",
        "Business Permits",
        "Tax Payments",
      ],
    },
    {
      title: "Wards & Councilors",
      description:
        "Connect with your local representatives across Alimosho's 6 wards",
      icon: "🏘️",
      path: "/contact",
      stats: `${wardsData.length} wards serving 2.1M+ residents`,
      color: "from-emerald-600 to-teal-600",
      features: ["Ward Boundaries", "Councilor Profiles", "Community Projects"],
    },
    {
      title: "Public Institutions",
      description:
        "Comprehensive directory of Alimosho's public facilities and services",
      icon: "🏫",
      path: "/community/yellow-page",
      stats: `${publicInstitutions.length} institutions serving the community`,
      color: "from-purple-600 to-fuchsia-600",
      features: [
        "Schools & Educational Centers",
        "Healthcare Facilities",
        "Government Offices",
      ],
    },
  ];

  return (
    <CommunityUI communityStats={communityStats} featureCards={featureCards} />
  );
}
