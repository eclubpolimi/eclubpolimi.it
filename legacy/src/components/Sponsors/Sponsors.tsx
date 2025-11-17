import Image from 'next/image';
import {
  InteractiveSectionGroup,
  InteractiveSection,
} from 'components/InteractiveSection/InteractiveSection';

export type SponsorProps = {
  title?: string;
  logos: Array<{
    src: string;
    darkSrc: string;
    href: string;
    alt: string;
  }>;
  className?: string;
};

const Sponsors = ({
  title = 'Sponsors',
  logos,
  className = '',
}: SponsorProps) => {
  return (
    <div className={`${className} md:py-6 py-8`}>
      <h2 className="text-center mb-8">{title}</h2>

      <InteractiveSectionGroup defaultScaleLevel="small" rememberZIndex={false}>
        <div className="flex lg:flex-row lg:py-2 lg:flex-wrap flex-row flex-wrap items-center justify-center gap-8 mx-auto">
          {logos.map((logo, index) => (
            <InteractiveSection
              key={index}
              sectionId={`sponsor-${index}`}
              elementType="image"
              className="h-20 w-72 relative lg:basis-1/4 basis-1/2 min-w-0"
            >
              {logo.href && logo.href !== '#' ? (
                <a href={logo.href} target="_blank" rel="noopener noreferrer">
                  {/* Light Mode Image */}
                  <Image
                    className="object-contain dark:hidden" // Hide in dark mode
                    src={logo.src}
                    alt={logo.alt}
                    fill
                  />
                  {/* Dark Mode Image */}
                  <Image
                    className="object-contain hidden dark:block" // Show only in dark mode
                    src={logo.darkSrc}
                    alt={logo.alt}
                    fill
                  />
                </a>
              ) : (
                <div>
                  {/* Light Mode Image */}
                  <Image
                    className="object-contain dark:hidden" // Hide in dark mode
                    src={logo.src}
                    alt={logo.alt}
                    fill
                  />
                  {/* Dark Mode Image */}
                  <Image
                    className="object-contain hidden dark:block" // Show only in dark mode
                    src={logo.darkSrc}
                    alt={logo.alt}
                    fill
                  />
                </div>
              )}
            </InteractiveSection>
          ))}
        </div>
      </InteractiveSectionGroup>
    </div>
  );
};

export default Sponsors;
