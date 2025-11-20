import type { SponsorEntry } from '../../lib/contentful';

type SponsorsProps = {
  sponsors?: SponsorEntry[];
};

export default function Sponsors({ sponsors = [] }: SponsorsProps) {
  const hasSponsors = sponsors && sponsors.length > 0;
  return (
    <section className="py-20 px-5 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Sponsors
        </h2>
        
        {hasSponsors ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto items-center">
            {sponsors.map((sponsor) => {
              const logoLight = sponsor.logo?.url ?? undefined;
              const logoDark = sponsor.logoDark?.url ?? logoLight;
              const alt =
                sponsor.logo?.description ??
                sponsor.logo?.title ??
                sponsor.logoDark?.description ??
                sponsor.logoDark?.title ??
                sponsor.name ??
                'Sponsor logo';

              return (
                <a
                  key={sponsor.name ?? sponsor.url ?? Math.random().toString(36)}
                  href={sponsor.url ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <div className="w-full h-28 flex items-center justify-center">
                    {logoLight ? (
                      <picture className="w-full flex items-center justify-center">
                        {logoDark && <source media="(prefers-color-scheme: dark)" srcSet={logoDark} />}
                        <img
                          src={logoLight}
                          alt={alt}
                          className="max-h-20 max-w-[180px] object-contain drop-shadow"
                          loading="lazy"
                        />
                      </picture>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400 font-semibold text-xl mt-2">
                        {sponsor.name ?? 'Sponsor'}
                      </p>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400">Sponsors coming soon.</div>
        )}
      </div>
    </section>
  );
}
