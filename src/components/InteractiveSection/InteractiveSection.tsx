import React, { useState, ReactNode, createContext, useContext } from 'react';

interface InteractiveSectionProps {
  children: ReactNode;
  sectionId: string;
  elementType: 'text' | 'image';
  rememberZIndex?: boolean;
  className?: string;
  scaleOnHover?: boolean;
  scaleLevel?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
}

interface InteractiveSectionGroupProps {
  children: ReactNode;
  rememberZIndex?: boolean;
  className?: string;
  defaultScaleLevel?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
}

// Context for managing section state
const InteractiveSectionContext = createContext<{
  hoveredSection: { section: string; element: string } | null;
  lastHovered: Record<string, string>;
  rememberZIndex: boolean;
  defaultScaleLevel: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
  handleHover: (section: string, element: string) => void;
  handleHoverEnd: () => void;
  getElementClasses: (
    section: string,
    element: string,
    customScale?: 'tiny' | 'small' | 'medium' | 'large' | 'huge',
  ) => string;
} | null>(null);

// Group component that manages state for multiple interactive sections
export const InteractiveSectionGroup = ({
  children,
  rememberZIndex = true,
  className = '',
  defaultScaleLevel = 'small',
}: InteractiveSectionGroupProps) => {
  const [hoveredSection, setHoveredSection] = useState<{
    section: string;
    element: string;
  } | null>(null);

  const [lastHovered, setLastHovered] = useState<Record<string, string>>({});

  const handleHover = (section: string, element: string) => {
    setHoveredSection({ section, element });
    if (rememberZIndex) {
      setLastHovered((prev) => ({ ...prev, [section]: element }));
    }
  };

  const handleHoverEnd = () => {
    setHoveredSection(null);
  };

  const getScaleClasses = (
    scaleLevel: 'tiny' | 'small' | 'medium' | 'large' | 'huge',
  ) => {
    switch (scaleLevel) {
      case 'tiny':
        return 'scale-[102%] xl:scale-105';
      case 'small':
        return 'scale-105 xl:scale-110';
      case 'medium':
        return 'scale-110 xl:scale-125';
      case 'large':
        return 'scale-125 xl:scale-150';
      case 'huge':
        return 'scale-150 xl:scale-[175%]';
      default:
        return 'scale-105 xl:scale-110';
    }
  };

  const getElementClasses = (
    section: string,
    element: string,
    customScale?: 'tiny' | 'small' | 'medium' | 'large' | 'huge',
  ) => {
    const isHovered =
      hoveredSection?.section === section &&
      hoveredSection?.element === element;
    const isLastHovered = rememberZIndex && lastHovered[section] === element;

    const baseClasses = 'transition-all duration-300 ease-in-out';

    const hoverClasses = isHovered
      ? getScaleClasses(customScale || defaultScaleLevel)
      : '';

    let zIndexClasses = 'relative z-0';
    if (isHovered) {
      zIndexClasses = 'relative z-20';
    } else if (isLastHovered && rememberZIndex) {
      zIndexClasses = 'relative z-10';
    } else {
      // Default z-index: text elements on top (z-10), images below (z-0)
      zIndexClasses = element === 'text' ? 'relative z-10' : 'relative z-0';
    }

    return `${baseClasses} ${hoverClasses} ${zIndexClasses}`;
  };

  const contextValue = {
    hoveredSection,
    lastHovered,
    rememberZIndex,
    defaultScaleLevel,
    handleHover,
    handleHoverEnd,
    getElementClasses,
  };

  return (
    <InteractiveSectionContext.Provider value={contextValue}>
      <div className={className}>{children}</div>
    </InteractiveSectionContext.Provider>
  );
};

// Individual interactive element component
export const InteractiveSection = ({
  children,
  sectionId,
  elementType,
  className = '',
  scaleOnHover = true,
  scaleLevel,
}: InteractiveSectionProps) => {
  const context = useContext(InteractiveSectionContext);

  if (!context) {
    throw new Error(
      'InteractiveSection must be used within InteractiveSectionGroup',
    );
  }

  const { handleHover, handleHoverEnd, getElementClasses } = context;

  const elementClasses = scaleOnHover
    ? getElementClasses(sectionId, elementType, scaleLevel)
    : 'transition-all duration-300 ease-in-out relative z-0';

  return (
    <div
      className={`${elementClasses} ${className}`}
      onMouseEnter={() => handleHover(sectionId, elementType)}
      onMouseLeave={handleHoverEnd}
      onClick={() => handleHover(sectionId, elementType)}
    >
      {children}
    </div>
  );
};

export default InteractiveSectionGroup;
