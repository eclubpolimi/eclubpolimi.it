// Redesigned Button component with proper separation of navigation and action concerns
//
// Usage examples:
//
// Navigation (internal routes):
// <Button variant="navigation" href="/about">About Us</Button>
//
// External links:
// <Button variant="external" href="https://google.com">Visit Google</Button>
//
// Action buttons:
// <Button variant="action" onClick={() => console.log('clicked')}>Click Me</Button>

import React from 'react';
import Link from 'next/link';
import {
  InteractiveSection,
  InteractiveSectionGroup,
} from 'components/InteractiveSection/InteractiveSection';

// Base props shared by all button types
type BaseButtonProps = {
  theme?: 'orange' | 'light' | 'dark';
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  scaleLevel?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
  disableHoverScale?: boolean;
};

// Navigation button props (for internal routing)
type NavigationButtonProps = BaseButtonProps & {
  variant: 'navigation';
  href: string; // Internal route
  onClick?: () => void;
};

// External link button props (for external URLs)
type ExternalLinkButtonProps = BaseButtonProps & {
  variant: 'external';
  href: string; // External URL
  onClick?: () => void;
  target?: '_blank' | '_self';
  rel?: string;
};

// Action button props (for onClick handlers)
type ActionButtonProps = BaseButtonProps & {
  variant: 'action';
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
};

// Union type for all button variants
export type ButtonProps =
  | NavigationButtonProps
  | ExternalLinkButtonProps
  | ActionButtonProps;

const Button = (props: ButtonProps) => {
  // Extract common props
  const {
    theme = 'orange',
    disabled = false,
    className = '',
    children,
    scaleLevel = 'small',
    disableHoverScale = false,
  } = props;

  // Generate unique ID for this button instance
  const buttonId = React.useId();

  // Dynamic styles based on theme
  const themeStyles = {
    orange:
      'bg-ec_orange dark:bg-ec_orange_darkmode hover:bg-ec_orange_hover dark:hover:bg-ec_orange_hover_darkmode text-white transition-colors duration-300',
    light:
      'bg-white dark:bg-ec_background_darkmode hover:bg-gray-300 dark:hover:bg-ec_grey_darkmode text-ec_blue dark:text-ec_text_darkmode transition-colors duration-300',
    dark: 'bg-black dark:bg-ec_blue_darkmode hover:bg-gray-800 dark:hover:bg-ec_grey_darkmode text-white dark:text-ec_text_darkmode transition-colors duration-300',
  };

  // Fallback to default orange styling if theme is undefined
  const selectedTheme = themeStyles[theme] || themeStyles.orange;

  const styles = `rounded-xl py-2 px-6 inline cursor-pointer ${selectedTheme} focus:outline-none focus:ring-2 focus:ring-offset-2 ${className} font-medium ${
    disabled ? 'opacity-75 cursor-not-allowed' : ''
  }`;

  // Wrapper component for interactive scaling
  const ButtonWrapper = ({
    children: buttonChildren,
  }: {
    children: React.ReactNode;
  }) => {
    if (disableHoverScale || disabled) {
      return <>{buttonChildren}</>;
    }

    return (
      <InteractiveSectionGroup
        rememberZIndex={false}
        defaultScaleLevel={scaleLevel}
      >
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

  // Handle different button variants
  switch (props.variant) {
    case 'navigation':
      if (disabled) {
        return (
          <ButtonWrapper>
            <span className={styles}>{children}</span>
          </ButtonWrapper>
        );
      }
      return (
        <ButtonWrapper>
          <Link href={props.href} onClick={props.onClick} className={styles}>
            {children}
          </Link>
        </ButtonWrapper>
      );

    case 'external':
      if (disabled) {
        return (
          <ButtonWrapper>
            <span className={styles}>{children}</span>
          </ButtonWrapper>
        );
      }
      return (
        <ButtonWrapper>
          <a
            href={props.href}
            target={props.target || '_blank'}
            rel={props.rel || 'noopener noreferrer'}
            onClick={props.onClick}
            className={styles}
          >
            {children}
          </a>
        </ButtonWrapper>
      );

    case 'action':
      return (
        <ButtonWrapper>
          <button
            type={props.type || 'button'}
            onClick={props.onClick}
            disabled={disabled}
            className={styles}
          >
            {children}
          </button>
        </ButtonWrapper>
      );

    default:
      // TypeScript should prevent this, but just in case
      throw new Error('Invalid button variant');
  }
};

export default Button;
