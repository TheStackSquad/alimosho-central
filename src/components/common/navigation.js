// src/common/navigation.js
export const navItems = [
  { path: "/", label: "Home" },
  {
    path: "/about#overview",
    label: "About",
    dropdown: [
      {
        id: "overview",
        label: "Overview",
        icon: "User",
        path: "/about#overview",
      },
      {
        id: "biography",
        label: "Biography",
        icon: "ScrollText",
        path: "/about#biography",
      },
      {
        id: "leadership",
        label: "Leadership Team",
        icon: "Users",
        path: "/about#leadership",
      },
      {
        id: "structure",
        label: "Office Structure",
        icon: "Building2",
        path: "/about#structure",
      },
      {
        id: "achievements",
        label: "Achievements",
        icon: "Trophy",
        path: "/about#achievements",
      },
    ],
  },
  { path: "/news", label: "News" },
  { path: "/projects", label: "Projects" },
  {
    path: "/community",
    label: "Community",
    dropdown: [
      {
        id: "hub",
        label: "Community Hub",
        icon: "Banknote",
        path: "/community",
      },
      {
        id: "services",
        label: "Local Services",
        icon: "Building",
        path: "/community/services",
      },
      {
        id: "institutions",
        label: "Public Institutions",
        icon: "School",
        path: "/community/yellow-page",
      },
    ],
  },
  { path: "/contact", label: "Contact" },
];

// src/common/navigation.js
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Account for header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Update URL hash without jumping
    window.history.replaceState(null, null, `#${sectionId}`);
  }
};

export const isSectionActive = (sectionId) => {
  if (typeof window === "undefined") return false;

  const hash = window.location.hash.substring(1);
  return hash === sectionId;
};
