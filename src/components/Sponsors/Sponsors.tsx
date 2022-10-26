import Image, { StaticImageData } from "next/image";

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
  title = "Sponsors",
  logos,
  className = "",
}: SponsorProps) => {
  return (
    <div className={`${className} py-12`}>
      <h2 className="text-center mb-8">{title}</h2>

      <div
        className={`flex flex-col md:flex-row items-center justify-center lg:gap-20 gap-8 lg:h-[120px] h-[500px] lg:w-3/4 w-3/4 mx-auto`}
      >
        {logos.map((logo, index) => (
          <a href={logo.href} key={index} className="w-full h-full relative">
            <Image
              className="object-contain"
              src={logo.src}
              alt={logo.alt}
              key={index}
              fill
              sizes="100%"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
