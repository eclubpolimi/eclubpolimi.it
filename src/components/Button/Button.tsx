// added options to make buttons orange (join us) and blue (startup challenge)

import React from 'react';

export type ButtonProps = {
  to: string;
  onClick?: () => void;
  forceAnchor?: boolean;
  theme?: 'orange' | 'light' | 'dark'; // Add more themes as needed
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Button = ({
  to,
  onClick = () => undefined,
  forceAnchor = false,
  theme = 'orange', // Default theme remains orange
  disabled,
  className = '',
  children,
}: ButtonProps) => {
  // Dynamic styles based on theme
  const themeStyles = {
    orange: 'bg-ec_orange hover:bg-ec_orange_hover text-white',
    light: 'bg-white hover:bg-gray-300 text-[#001066]', // White background and dark blue text
    dark: 'bg-black hover:bg-gray-800 text-white',
  };

  // Fallback to default orange styling if theme is undefined
  const selectedTheme = themeStyles[theme] || themeStyles.orange;

  const styles = `rounded-xl py-2 px-6 inline cursor-pointer ${selectedTheme} focus:outline-none focus:ring-2 focus:ring-offset-2 ${className} font-medium ${
    disabled && 'opacity-75'
  }`;

  if (!to || disabled) {
    return (
      <button className={styles} onClick={onClick} disabled>
        {children}
      </button>
    );
  } else if (to[0] === '/' && !forceAnchor) {
    return (
      <a className={styles} href={to} onClick={onClick}>
        {children}
      </a>
    );
  } else {
    return (
      <a
        className={styles}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
};

export default Button;
