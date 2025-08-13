// added options to make buttons orange (join us) and blue (startup challenge)

import React, { useState } from 'react';
import { InteractiveSection, InteractiveSectionGroup } from 'components/InteractiveSection/InteractiveSection';

export type ButtonProps = {
  to: string;
  onClick?: () => void;
  forceAnchor?: boolean;
  theme?: 'orange' | 'light' | 'dark'; // Add more themes as needed
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  scaleLevel?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
  disableHoverScale?: boolean;
};

const Button = ({
  to,
  onClick = () => undefined,
  forceAnchor = false,
  theme = 'orange', // Default theme remains orange
  disabled,
  className = '',
  children,
  scaleLevel = 'small',
  disableHoverScale = false,
}: ButtonProps) => {
  // Generate unique ID for this button instance
  const buttonId = React.useId();
  
  // Dynamic styles based on theme
  const themeStyles = {
    orange:
      'bg-ec_orange dark:bg-ec_orange_darkmode hover:bg-ec_orange_hover dark:hover:bg-ec_orange_hover_darkmode text-white',
    light:
      'bg-white dark:bg-ec_background_darkmode hover:bg-gray-300 dark:hover:bg-ec_grey_darkmode text-ec_blue dark:text-ec_text_darkmode',
    dark: 'bg-black dark:bg-ec_blue_darkmode hover:bg-gray-800 dark:hover:bg-ec_grey_darkmode text-white dark:text-ec_text_darkmode',
  };

  // Fallback to default orange styling if theme is undefined
  const selectedTheme = themeStyles[theme] || themeStyles.orange;

  const styles = `rounded-xl py-2 px-6 inline cursor-pointer ${selectedTheme} focus:outline-none focus:ring-2 focus:ring-offset-2 ${className} font-medium ${
    disabled && 'opacity-75'
  }`;

  // Wrapper component for interactive scaling
  const ButtonWrapper = ({ children: buttonChildren }: { children: React.ReactNode }) => {
    if (disableHoverScale || disabled) {
      return <>{buttonChildren}</>;
    }
    
    return (
      <InteractiveSectionGroup rememberZIndex={false} defaultScaleLevel={scaleLevel}>
        <InteractiveSection
          sectionId={buttonId}
          elementType="text"
          className="inline-block"
        >
          {buttonChildren}
        </InteractiveSection>
      </InteractiveSectionGroup>
    );
  };

  if (!to || disabled) {
    return (
      <ButtonWrapper>
        <button className={styles} onClick={onClick} disabled>
          {children}
        </button>
      </ButtonWrapper>
    );
  } else if (to[0] === '/' && !forceAnchor) {
    return (
      <ButtonWrapper>
        <a className={styles} href={to} onClick={onClick}>
          {children}
        </a>
      </ButtonWrapper>
    );
  } else {
    return (
      <ButtonWrapper>
        <a
          className={styles}
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      </ButtonWrapper>
    );
  }
};

export default Button;
