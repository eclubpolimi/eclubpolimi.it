const items = [
  {
    title: "Events",
    kicker: "Community First",
    description:
      "We curate high-quality gatherings with founders, investors, and operators. From intimate firesides to large-format talks, every session is built to be actionable and inspiring.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop",
  },
  {
    title: "Startup Challenge",
    kicker: "Hands-on Building",
    description:
      "Our flagship challenge puts cross-university teams on real problems. Mentors, workshops, and demos guide students from idea to pitch in an immersive sprint.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop",
  },
  {
    title: "Travel",
    kicker: "Global Exposure",
    description:
      "We visit Europe’s most vibrant startup hubs to learn from founders on-site. Expect company walk-throughs, cultural immersion, and new perspectives on innovation.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&auto=format&fit=crop",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300 py-16 md:py-20">
      <div className="px-5 md:px-12 max-w-6xl mx-auto space-y-12 md:space-y-14">
        <header className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-[#FF6B35] font-semibold">
            A glimpse of what we do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Events • Startup Challenge • Travel
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Experiences that blend learning, building, and global exposure.
          </p>
        </header>

        <div className="space-y-10 md:space-y-14">
          {items.map((item, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={item.title}
                className={`flex flex-col gap-8 md:gap-14 items-center ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover aspect-video md:aspect-[16/10]"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-4 md:space-y-5">
                  <p className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FFE8DC] text-[#FF6B35]">
                    {item.kicker}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg leading-7 text-gray-700 dark:text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
