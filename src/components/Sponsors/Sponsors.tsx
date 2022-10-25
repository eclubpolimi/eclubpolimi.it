type SponsorProps = {
  title?: string;
  logos: Array<{
    src: string;
    href: string;
    alt: string;
  }>;
  className?: string;
};

const Sponsors = ({ title = "Sponsors", logos, className }: SponsorProps) => {
  return (
    <div className={`${className} py-12`}>
      <h2 className="text-center mb-8">{title}</h2>
      <div
        className={`flex flex-col md:flex-row items-center justify-center gap-20 px-20`}
      >
        {logos.map((logo, index) => (
          <a href={logo.href} key={index}>
            <img className="h-20" src={logo.src} alt={logo.alt} key={index} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
