import Image from 'next/image';

interface HeroSectionProps {
  /** Height of the hero section in pixels */
  height: number;
  /** Vertical position of the image (0-100) */
  verticalPosition: number;
  /** Horizontal padding in pixels for left and right sides */
  padding: number;
  /** Light mode image source */
  lightImageSrc: string;
  /** Dark mode image source */
  darkImageSrc: string;
  /** Alt text for the images */
  altText: string;
  /** Additional CSS classes */
  className?: string;
  /** Dark mode overlay opacity (0-100) */
  overlayOpacity?: number;
}

const HeroSection = ({
  height,
  verticalPosition,
  padding,
  lightImageSrc,
  darkImageSrc,
  altText,
  className = '',
  overlayOpacity = 50,
}: HeroSectionProps) => {
  const containerStyle = {
    height: `${height}px`,
    paddingLeft: `${padding}px`,
    paddingRight: `${padding}px`,
  };

  const imageStyle = {
    objectFit: 'cover' as const,
    objectPosition: `center ${verticalPosition}%`,
  };

  return (
    <div className={`relative w-full ${className}`} style={containerStyle}>
      {/* Background Image - Light Mode */}
      <Image
        src={lightImageSrc}
        fill
        style={imageStyle}
        alt={altText}
        className="block dark:hidden"
      />
      {/* Background Image - Dark Mode */}
      <Image
        src={darkImageSrc}
        fill
        style={imageStyle}
        alt={`${altText} Dark Mode`}
        className="hidden dark:block"
      />

      {/* Dark Mode Overlay */}
      <div 
        className="absolute inset-0 bg-black dark:opacity-50 opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{ '--tw-bg-opacity': overlayOpacity / 100 } as React.CSSProperties}
      ></div>
    </div>
  );
};

export default HeroSection;
