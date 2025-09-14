// src/data/navigationData.js

export const navItems = [
  {
    id: "home",
    path: "/",
    label: "Home",
  },
  {
    id: "about",
    path: "/about",
    label: "About",
    hasDropdown: true,
    dropdown: [
      {
        id: "overview",
        label: "Overview",
        icon: "👤",
        path: "/about#overview",
      },
      {
        id: "biography",
        label: "Biography",
        icon: "📖",
        path: "/about#biography",
      },
      {
        id: "leadership",
        label: "Leadership Team",
        icon: "👥",
        path: "/about#leadership",
      },
      {
        id: "structure",
        label: "Office Structure",
        icon: "🏛️",
        path: "/about#structure",
      },
      {
        id: "achievements",
        label: "Achievements",
        icon: "🏆",
        path: "/about#achievements",
      },
    ],
  },
  {
    id: "news",
    path: "/news",
    label: "News",
  },
  {
    id: "projects",
    path: "/projects",
    label: "Projects",
  },
  {
    id: "community",
    path: "/community",
    label: "Community",
    hasDropdown: true,
    dropdown: [
      {
        id: "hub",
        label: "Community Hub",
        icon: "🏛️",
        path: "/community",
      },
      {
        id: "services",
        label: "Local Services",
        icon: "🏢",
        path: "/community/services",
      },
      {
        id: "institutions",
        label: "Public Institutions",
        icon: "🏫",
        path: "/community/yellow-page",
      },
      {
        id: "poll",
        label: "Poll",
        icon: "🗳️",
        path: "/community/poll",
      },
      {
        id: "logout",
        label: "Logout",
        icon: "🚪",
        isLogout: true,
        action: "logout",
      },
    ],
  },
  {
    id: "contact",
    path: "/contact",
    label: "Contact",
  },
];

// Helper function to get nav item by id
export const getNavItemById = (id) => {
  return navItems.find((item) => item.id === id);
};

// Helper function to get dropdown items for a nav item
export const getDropdownItems = (navItemId) => {
  const navItem = getNavItemById(navItemId);
  return navItem?.dropdown || [];
};

// Helper function to check if nav item has dropdown
export const hasDropdown = (navItemId) => {
  const navItem = getNavItemById(navItemId);
  return navItem?.hasDropdown === true && navItem?.dropdown?.length > 0;
};

// Helper function to get all nav item paths (useful for active link detection)
export const getAllPaths = () => {
  const paths = [];

  navItems.forEach((item) => {
    if (item.path) {
      paths.push(item.path);
    }

    if (item.dropdown) {
      item.dropdown.forEach((dropdownItem) => {
        if (dropdownItem.path) {
          paths.push(dropdownItem.path);
        }
      });
    }
  });

  return paths;
};
