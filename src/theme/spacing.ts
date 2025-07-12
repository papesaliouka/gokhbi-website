/**
 * GokhBI GIS Platform - Spacing System
 * 
 * This file defines the spacing values used throughout the application.
 * Spacing follows an 8px base unit system for consistency.
 */

// Base unit for spacing (in pixels)
export const SPACING_BASE_UNIT = 8;

// Function to generate spacing value based on multiplier
export const spacing = (multiplier = 1) => `${SPACING_BASE_UNIT * multiplier}px`;

// Named spacing constants for common values
export const SPACING = {
  xxs: spacing(0.25),  // 2px
  xs: spacing(0.5),    // 4px
  sm: spacing(1),      // 8px
  md: spacing(2),      // 16px
  lg: spacing(3),      // 24px
  xl: spacing(4),      // 32px
  xxl: spacing(5),     // 40px
  xxxl: spacing(6),    // 48px
};

// Spacing for specific UI elements
export const COMPONENT_SPACING = {
  card: {
    padding: SPACING.md,
    marginBottom: SPACING.md,
    gap: SPACING.md,
  },
  section: {
    marginBottom: SPACING.xl,
  },
  form: {
    fieldSpacing: SPACING.md,
    sectionSpacing: SPACING.xl,
  },
  table: {
    cellPadding: SPACING.sm,
    rowSpacing: SPACING.xs,
  },
  tabs: {
    padding: `${SPACING.sm} ${SPACING.md}`,
  }
};

// Responsive spacing for different screen sizes
export const RESPONSIVE_SPACING = {
  container: {
    xs: SPACING.md,    // 16px padding on small screens
    sm: SPACING.lg,    // 24px padding on medium screens
    md: SPACING.xl,    // 32px padding on large screens
    lg: SPACING.xxl,   // 40px padding on extra large screens
  },
  grid: {
    xs: SPACING.sm,    // 8px gap on small screens
    sm: SPACING.md,    // 16px gap on medium screens
    md: SPACING.lg,    // 24px gap on large screens
    lg: SPACING.xl,    // 32px gap on extra large screens
  }
};
