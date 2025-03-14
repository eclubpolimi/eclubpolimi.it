import Image from 'next/image';

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

      <div className="flex lg:flex-row lg:py-2 lg:flex-wrap flex-row flex-wrap items-center justify-center gap-8 mx-auto">
        {logos.map((logo, index) => (
          <a
            href={logo.href}
            key={index}
            className="h-16 w-64 relative lg:basis-1/6 basis-2/6"
          >
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
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
