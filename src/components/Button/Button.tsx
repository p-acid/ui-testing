import React from 'react';
import { button } from './Button.css';

export interface ButtonProps {
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'success' | 'error';
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Custom className for additional styling */
  className?: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  label,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={button({ variant, size, className })}
      {...props}
    >
      {label}
    </button>
  );
};
