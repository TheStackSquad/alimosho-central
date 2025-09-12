// src/animation/navbarAnimate.js

// Performance-optimized animation variants for navbar components
export const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: "easeOut"
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -4,
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: "easeIn"
    }
  }
};

export const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.25,
      ease: "easeInOut"
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export const backdropVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.15
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
};

export const iconRotateVariants = {
  closed: {
    rotate: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  open: {
    rotate: 180,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

export const chevronVariants = {
  closed: {
    rotate: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut"
    }
  },
  open: {
    rotate: 180,
    transition: {
      duration: 0.15,
      ease: "easeOut"
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.1
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut"
    }
  }
};

// Hover animations for nav items
export const navItemHover = {
  scale: 1.02,
  transition: {
    duration: 0.1,
    ease: "easeOut"
  }
};

export const navItemTap = {
  scale: 0.98,
  transition: {
    duration: 0.05
  }
};

// Theme toggle specific animations with enhanced visual appeal
export const themeToggleVariants = {
  light: {
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  dark: {
    rotate: 180,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};
