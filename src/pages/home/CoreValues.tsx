import { useState } from "react";

const values = [
  {
    title: 'Learn',
    badge: '20+ Events Annually',
    tags: 'Events • Workshops • Speaker Sessions • Knowledge • Skills',
    accent: '#FF6B35',
    accentSoft: '#FFE8DC',
    description:
      "Attend workshops, speaker sessions, and hands-on events led by founders and industry professionals. Apply what you learn by working in teams with peers from Politecnico di Milano and other universities, collaborating across different fields to tackle real challenges.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-[#FF6B35]"
        fill="currentColor"
      >
        <path d="M12 2a7 7 0 00-3.5 13.07V18a1.5 1.5 0 103 0v-1h1v1a1.5 1.5 0 103 0v-2.93A7 7 0 0012 2zm-1 18.5a.5.5 0 11-1 0V19h1zm5 0a.5.5 0 11-1 0V19h1zm-4.5-5.5a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm3.934-2.203A5.978 5.978 0 0112 15a5.978 5.978 0 01-3.434-1.203A5.984 5.984 0 016 9a6 6 0 1112 0 5.984 5.984 0 01-2.566 4.797z" />
      </svg>
    ),
  },
  {
    title: 'Network',
    badge: '60+ Active Members',
    tags: 'Connections • Collaborations • Community • Mentors • Co-founders',
    accent: '#514FC4',
    accentSoft: '#EBEAFE',
    description:
      "Connect with a diverse community of students, mentors, and industry experts. Build relationships, share ideas, and find potential co-founders and collaborators across disciplines.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-12 h-12 text-[#514FC4]"
        fill="currentColor"
      >
        <path d="M8 11a4 4 0 114-4 4 4 0 01-4 4zm0-6a2 2 0 102 2 2 2 0 00-2-2zm8 6a3 3 0 10-3-3 3 3 0 003 3zm4 2a3 3 0 10-3-3 3 3 0 003 3zm-4.88.953A4.977 4.977 0 0012 13a4.977 4.977 0 00-3.12.953 5.966 5.966 0 00-2.22 4.047.999.999 0 00.994 1.077h8.672a1 1 0 00.994-1.077 5.966 5.966 0 00-2.22-4.047zM12 15a3.006 3.006 0 012.816 2H9.184A3.006 3.006 0 0112 15zm7.65 4.977a1 1 0 01-.994 1.023h-2.077a7.962 7.962 0 00-.731-3h2.808a1 1 0 01.994 1.023zm-11.306 1.023H5.267a1 1 0 01-.994-1.023A4.973 4.973 0 015.88 17.13a7.964 7.964 0 00-.731 3z" />
      </svg>
    ),
  },
  {
    title: 'Build',
    badge: '50+ Possibility Launched',
    tags: 'Ideas • Innovation • Projects • Impact • Solutions',
    accent: '#FF6B35',
    accentSoft: '#FFE8DC',
    description:
      "Turn knowledge and connections into action. Experiment, prototype, and develop projects with your team—creating solutions that are scalable, meaningful, and impactful.", icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-[#FF6B35]"
          fill="currentColor"
        >
          <path d="M12 2a1 1 0 00-.894.553l-2 4A1 1 0 0010 8h1v4a1 1 0 002 0V8h1a1 1 0 00.894-1.447l-2-4A1 1 0 0012 2zM6 10a1 1 0 00-.8 1.6L7.5 14H5a1 1 0 00-.894.553l-2 4A1 1 0 003 20h5a1 1 0 00.894-1.447L6.618 16H9a1 1 0 00.8-1.6L7.5 12H9a1 1 0 100-2zm12 0a1 1 0 00-1 1v2h-1.5a1 1 0 00-.894 1.447L16.382 16H15a1 1 0 100 2h2.382L15.106 18.553A1 1 0 0016 20h5a1 1 0 00.894-1.447l-2-4A1 1 0 0019 14h-2.5l1.3-1.6A1 1 0 0018 10z" />
        </svg>
      ),
  },
];

export default function CoreValues() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // Toggle on tap; other cards stay collapsed
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-16 md:py-20">
      <div className="relative px-5 md:px-12 max-w-6xl mx-auto">
        <header className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our Core Values &amp; Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Events • Workshops • Speaker Sessions • Knowledge • Skills
          </p>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            Click or hover over each card to discover more
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => {
            const isActive = activeIndex === index;
            return (
              <article
                key={value.title}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-colors duration-200 flex flex-col self-start"
                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => handleToggle(index)}
              >
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: value.accentSoft }}
                />
                <div className="p-6 md:p-7 space-y-6">
                  <div className="flex items-start justify-between">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: value.accentSoft }}
                    >
                      {value.icon}
                    </div>
                    <span
                      className="w-3 h-3 rounded-full block mt-1"
                      style={{ backgroundColor: value.accent }}
                    />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: value.accentSoft,
                        color: value.accent,
                      }}
                    >
                      {value.badge}
                    </span>
                    <p className="text-base text-gray-600 dark:text-gray-300 leading-7">
                      {value.tags}
                    </p>
                  </div>

                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: isActive ? '200px' : '0px',
                      opacity: isActive ? 1 : 0,
                      paddingTop: isActive ? '8px' : '0px',
                    }}
                    aria-hidden={!isActive}
                  >
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-6">
                      {value.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm mt-auto">
                    <span
                      className="w-10 h-1 rounded-full"
                      style={{ backgroundColor: value.accent }}
                    />
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'
                        }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
