import { createThemeContract, createTheme } from '@vanilla-extract/css';
import { color } from './color';

export const themeVars = createThemeContract({
  color: {
    background: {
      primary: null,
      secondary: null,
      tertiary: null,
    },
    foreground: {
      primary: null,
      secondary: null,
      tertiary: null,
    },
    border: {
      default: null,
      hover: null,
    },
    brand: {
      primary: null,
      primaryHover: null,
      secondary: null,
      secondaryHover: null,
    },
    success: {
      default: null,
      hover: null,
      foreground: null,
    },
    error: {
      default: null,
      hover: null,
      foreground: null,
    },
  },
});

export const lightTheme = createTheme(themeVars, {
  color: {
    background: {
      primary: color.neutral[100],
      secondary: color.neutral[200],
      tertiary: color.neutral[300],
    },
    foreground: {
      primary: color.neutral[900],
      secondary: color.neutral[700],
      tertiary: color.neutral[600],
    },
    border: {
      default: color.neutral[300],
      hover: color.neutral[400],
    },
    brand: {
      primary: color.emerald[600],
      primaryHover: color.emerald[700],
      secondary: color.neutral[100],
      secondaryHover: color.neutral[200],
    },
    success: {
      default: color.green[600],
      hover: color.green[700],
      foreground: color.neutral[100],
    },
    error: {
      default: color.red[600],
      hover: color.red[700],
      foreground: color.neutral[100],
    },
  },
});

export const darkTheme = createTheme(themeVars, {
  color: {
    background: {
      primary: color.neutral[900],
      secondary: color.neutral[800],
      tertiary: color.neutral[700],
    },
    foreground: {
      primary: color.neutral[100],
      secondary: color.neutral[300],
      tertiary: color.neutral[400],
    },
    border: {
      default: color.neutral[700],
      hover: color.neutral[600],
    },
    brand: {
      primary: color.emerald[500],
      primaryHover: color.emerald[400],
      secondary: color.neutral[800],
      secondaryHover: color.neutral[700],
    },
    success: {
      default: color.green[500],
      hover: color.green[400],
      foreground: color.neutral[900],
    },
    error: {
      default: color.red[500],
      hover: color.red[400],
      foreground: color.neutral[900],
    },
  },
});
