import Image, { StaticImageData } from 'next/image';

export type SponsorProps = {
  title?: string;
  logos: Array<{
    src: StaticImageData | string;
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

      <div
        className={`flex lg:flex-row lg:py-2 lg:flex-wrap flex-row flex-wrap items-center justify-center gap-8 mx-auto`}
      >
        {logos.map((logo, index) => (
          <a
            href={logo.href}
            key={index}
            className="h-16 w-64 relative lg:basis-1/6 basis-2/6"
          >
            <Image
              className="object-contain"
              src={logo.src}
              alt={logo.alt}
              key={index}
              fill
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
