import { useState } from "react";

const values = [
    {
        title: 'Learn',
        badge: '20+ Events Annually',
        tags: 'Events • Workshops • Speaker Sessions • Knowledge • Skills',
        accent: 'brand' as const,
        description:
            "Attend workshops, speaker sessions, and hands-on events led by founders and industry professionals. Apply what you learn by working in teams with peers from Politecnico di Milano and other universities, collaborating across different fields to tackle real challenges.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M22 10 12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
                <path d="M22 10v6" />
            </svg>
        ),
    },
    {
        title: 'Network',
        badge: '60+ Active Members',
        tags: 'Connections • Collaborations • Community • Mentors • Co-founders',
        accent: 'iris' as const,
        description:
            "Connect with a diverse community of students, mentors, and industry experts. Build relationships, share ideas, and find potential co-founders and collaborators across disciplines.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: 'Build',
        badge: '50+ Projects Launched',
        tags: 'Ideas • Innovation • Projects • Impact • Solutions',
        accent: 'brand' as const,
        description:
            "Turn knowledge and connections into action. Experiment, prototype, and develop projects with your team—creating solutions that are scalable, meaningful, and impactful.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
    },
];

const accentStyles = {
    brand: {
        chip: 'bg-brand-soft text-brand-ink',
        bar: 'bg-brand',
        dot: 'bg-brand',
    },
    iris: {
        chip: 'bg-accent-iris-soft text-accent-iris',
        bar: 'bg-accent-iris',
        dot: 'bg-accent-iris',
    },
} as const;

export default function CoreValues() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        // Toggle on tap; other cards stay collapsed
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section data-hero-next className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 section-pad">
            <div className="relative container-site">
                <header className="text-center space-y-4 mb-12">
                    <p className="text-sm uppercase tracking-[0.2em] text-brand-deep font-semibold">
                        What drives us
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Our Core Values &amp; Mission
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Three ways to grow with E-Club: learn skills, meet people, ship ideas.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {values.map((value, index) => {
                        const isActive = activeIndex === index;
                        const styles = accentStyles[value.accent];
                        return (
                            <article
                                key={value.title}
                                className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-shadow duration-300 hover:shadow-2xl flex flex-col"
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                <div
                                    className={`h-1 w-full ${styles.bar}`}
                                />
                                <div className="p-6 md:p-7 space-y-6 flex flex-col flex-grow">
                                    <div className="flex items-start justify-between">
                                        <div
                                            className={`w-14 h-14 rounded-xl flex items-center justify-center ${styles.chip}`}
                                        >
                                            {value.icon}
                                        </div>
                                        <span
                                            className={`w-3 h-3 rounded-full block mt-1 ${styles.dot}`}
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-semibold text-gray-900">
                                            {value.title}
                                        </h3>
                                        <span
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${styles.chip}`}
                                        >
                                            {value.badge}
                                        </span>
                                        <p className="text-base text-gray-600 leading-7">
                                            {value.tags}
                                        </p>
                                    </div>

                                    <div
                                        className="expandable"
                                        data-open={isActive}
                                        id={`core-value-${value.title.toLowerCase()}-desc`}
                                    >
                                        <div>
                                            <p className="text-sm md:text-base text-gray-600 leading-6 pt-2">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-sm mt-auto pt-2">
                                        <span
                                            className={`w-10 h-1 rounded-full ${styles.bar}`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleToggle(index)}
                                            aria-expanded={isActive}
                                            aria-controls={`core-value-${value.title.toLowerCase()}-desc`}
                                            aria-label={`${isActive ? 'Hide' : 'Show'} details about ${value.title}`}
                                            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                                        >
                                            <svg
                                                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'
                                                    }`}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </button>
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
