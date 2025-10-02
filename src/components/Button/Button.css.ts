import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '../../config/theme.css';

export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px solid transparent',
    borderRadius: '9999px',
    fontWeight: 400,
    lineHeight: '1.5rem',
    transition: 'all 0.2s ease-in-out',
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    ':hover': {
      transform: 'translateY(-1px)',
    },
    ':active': {
      transform: 'translateY(0)',
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: themeVars.color.brand.primary,
        color: themeVars.color.foreground.primary,
        ':hover': {
          backgroundColor: themeVars.color.brand.primaryHover,
        },
      },
      secondary: {
        backgroundColor: themeVars.color.brand.secondary,
        color: themeVars.color.foreground.primary,
        borderColor: themeVars.color.border.default,
        ':hover': {
          backgroundColor: themeVars.color.brand.secondaryHover,
          borderColor: themeVars.color.border.hover,
        },
      },
      success: {
        backgroundColor: themeVars.color.success.default,
        color: themeVars.color.success.foreground,
        ':hover': {
          backgroundColor: themeVars.color.success.hover,
        },
      },
      error: {
        backgroundColor: themeVars.color.error.default,
        color: themeVars.color.error.foreground,
        ':hover': {
          backgroundColor: themeVars.color.error.hover,
        },
      },
    },
    size: {
      small: {
        padding: '10px 16px',
        fontSize: '0.75rem',
        letterSpacing: '0.025em',
      },
      medium: {
        padding: '11px 20px',
        fontSize: '0.875rem',
        letterSpacing: '0.016em',
      },
      large: {
        padding: '12px 24px',
        fontSize: '1rem',
        letterSpacing: '0',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});
