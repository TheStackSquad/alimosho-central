// src/utils/icons.js
import * as LucideIcons from 'lucide-react';

export const getIcon = (iconName, size = 16, className = "") => {
  const IconComponent = LucideIcons[iconName];
  return IconComponent ? <IconComponent size={size} className={className} /> : null;
};