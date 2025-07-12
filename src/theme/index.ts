/**
 * GokhBI GIS Platform - Main Theme
 * 
 * This file combines all theme elements (colors, typography, spacing)
 * and creates a comprehensive theme object for the application.
 */

import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { colors } from './colors';
import { typography } from './typography';
import { SPACING, SPACING_BASE_UNIT } from './spacing';

// Define breakpoints for responsive design
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

// Define shape values
const shape = {
  borderRadius: 8,
};

// Base theme options
export const createThemeOptions = (mode: 'light' | 'dark' = 'light'): ThemeOptions => ({
  palette: {
    mode,
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    success: colors.success,
    background: {
      default: mode === 'dark' ? '#1a202c' : colors.background.default,
      paper: mode === 'dark' ? '#2d3748' : colors.background.paper,
    },
    text: {
      primary: mode === 'dark' ? '#f7fafc' : colors.text.primary,
      secondary: mode === 'dark' ? '#cbd5e0' : colors.text.secondary,
      disabled: mode === 'dark' ? '#718096' : colors.text.disabled,
    },
    divider: mode === 'dark' ? colors.grey[600] : colors.grey[200],
    action: {
      active: mode === 'dark' ? colors.grey[300] : colors.grey[600],
      hover: mode === 'dark' ? colors.grey[700] : colors.grey[100],
      selected: mode === 'dark' ? colors.grey[600] : colors.grey[200],
      disabled: mode === 'dark' ? colors.grey[600] : colors.grey[300],
      disabledBackground: mode === 'dark' ? colors.grey[700] : colors.grey[200],
    },
  },
  typography,
  spacing: (factor: number) => `${SPACING_BASE_UNIT * factor}px`,
  breakpoints,
  shape,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: shape.borderRadius,
          padding: `${SPACING.sm} ${SPACING.lg}`,
          boxShadow: 'none',
          fontWeight: 600,
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          },
        },
        contained: {
          boxShadow: '0px 1px 3px rgba(0,0,0,0.12)',
          '&:hover': {
            boxShadow: '0px 2px 6px rgba(0,0,0,0.15)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #2563eb 0%, #059669 100%)',
          color: colors.primary.contrastText,
          '&:hover': {
            background: 'linear-gradient(135deg, #1d4ed8 0%, #047857 100%)',
            transform: 'translateY(-1px)',
          },
        },
        containedSecondary: {
          backgroundColor: colors.secondary.main,
          color: colors.secondary.contrastText,
          '&:hover': {
            backgroundColor: colors.secondary.dark,
          },
        },
        outlined: {
          borderWidth: '1px',
          '&:hover': {
            borderWidth: '1px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #2563eb 0%, #059669 100%)',
          boxShadow: '0px 2px 8px rgba(37, 99, 235, 0.15)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '64px !important',
          padding: `0 ${SPACING.lg}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: shape.borderRadius * 1.5,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
          padding: SPACING.md,
          border: '1px solid rgba(0, 0, 0, 0.04)',
          '&:hover': {
            boxShadow: '0px 8px 32px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: `${SPACING.md} ${SPACING.md} ${SPACING.sm}`,
        },
        title: {
          fontWeight: 600,
          color: colors.text.primary,
        },
        subheader: {
          color: colors.text.secondary,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: SPACING.md,
          '&:last-child': {
            paddingBottom: SPACING.md,
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.tableHeader,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(even)': {
            backgroundColor: colors.background.tableRowEven,
          },
          '&:nth-of-type(odd)': {
            backgroundColor: colors.background.tableRowOdd,
          },
          '&:hover': {
            backgroundColor: colors.grey[100],
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.grey[200]}`,
          padding: `${SPACING.sm} ${SPACING.md}`,
        },
        head: {
          fontWeight: typography.fontWeightBold,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: typography.fontWeightMedium,
          minWidth: 'auto',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: shape.borderRadius / 2,
        },
      },
    },
  },
});

// Create themes for both light and dark modes
const lightTheme = createTheme(createThemeOptions('light'));
const darkTheme = createTheme(createThemeOptions('dark'));

// Default export (light theme)
const theme = lightTheme;

export { lightTheme, darkTheme };
export default theme;
