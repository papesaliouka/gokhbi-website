/**
 * GokhBI GIS Platform - Color System
 * 
 * This file defines the color palette used throughout the application.
 * Colors are organized by semantic meaning and follow Material Design principles.
 */

export const colors = {
  // Primary palette - matching login form gradient
  primary: {
    main: '#2563eb',      // Blue from login gradient
    light: '#3b82f6',
    dark: '#1d4ed8',
    contrastText: '#FFFFFF'
  },
  // Secondary palette - matching login form gradient
  secondary: {
    main: '#059669',      // Green from login gradient
    light: '#10b981',
    dark: '#047857',
    contrastText: '#FFFFFF'
  },
  // Extended palette
  success: { main: '#059669', light: '#10b981', dark: '#047857' },
  warning: { main: '#f59e0b', light: '#fbbf24', dark: '#d97706' },
  error: { main: '#dc2626', light: '#ef4444', dark: '#b91c1c' },
  info: { main: '#2563eb', light: '#3b82f6', dark: '#1d4ed8' },
  // Neutrals
  grey: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  // Background colors - inspired by login form
  background: {
    default: '#f9fafb',
    paper: '#ffffff',
    card: '#ffffff',
    tableHeader: '#f3f4f6',
    tableRowEven: '#ffffff',
    tableRowOdd: '#f9fafb',
    gradient: 'linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #059669 70%, #047857 100%)',
  },
  // Text colors - matching login form
  text: {
    primary: '#111827',
    secondary: '#6b7280',
    disabled: '#9ca3af',
    hint: '#9ca3af',
  },
  // Semantic colors for map visualization
  map: {
    marker: {
      default: '#2563eb',
      selected: '#dc2626',
      cluster: '#059669',
    },
    heatmap: [
      'rgba(37, 99, 235, 0)',
      'rgba(37, 99, 235, 0.2)',
      'rgba(37, 99, 235, 0.4)',
      'rgba(37, 99, 235, 0.6)',
      'rgba(37, 99, 235, 0.8)',
      'rgba(5, 150, 105, 0.2)',
      'rgba(5, 150, 105, 0.6)',
      'rgba(220, 38, 38, 0.8)',
    ]
  },
  // Dashboard stat card colors for better differentiation
  dashboard: {
    projects: '#2563eb',     // Blue
    forms: '#059669',        // Green  
    responses: '#7c3aed',    // Purple
    complaints: '#dc2626',   // Red
    infrastructure: '#ea580c', // Orange
    permits: '#0891b2',      // Cyan
    quality: '#16a34a',      // Bright green
  },
};

// Named color exports for direct use
export const BLUE_PRIMARY = colors.primary.main;
export const GREEN_SECONDARY = colors.secondary.main;
export const ERROR_RED = colors.error.main;
export const WARNING_ORANGE = colors.warning.main;
export const SUCCESS_GREEN = colors.success.main;
export const INFO_BLUE = colors.info.main;
