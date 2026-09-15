import { useEffect, useRef } from 'react';

// Must match the `top` style on the cards below (5.5rem + i * step).
const STICKY_BASE_PX = 88;
const STICKY_STEP_PX = 14;

const values = [
    {
        title: 'Learn',
        index: '01',
        stat: '20+',
        statLabel: 'Events Annually',
        accent: 'brand' as const,
        description:
            "Workshops, speaker sessions, and hands-on events led by founders and industry professionals. Apply what you learn in cross-disciplinary teams with peers from Politecnico di Milano and beyond.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
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
        index: '02',
        stat: '60+',
        statLabel: 'Active Members',
        accent: 'iris' as const,
        description:
            "A diverse community of students, mentors, and industry experts. Build relationships, share ideas, and find co-founders and collaborators across disciplines.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
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
        index: '03',
        stat: '50+',
        statLabel: 'Projects Launched',
        accent: 'brand' as const,
        description:
            "Turn knowledge and connections into action. Experiment, prototype, and ship projects with your team — solutions that are scalable, meaningful, and impactful.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
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

const chipStyles = {
    brand: 'bg-brand-soft text-brand-ink',
    iris: 'bg-accent-iris-soft text-accent-iris',
} as const;

export default function CoreValues() {
    const cardRefs = useRef<(HTMLElement | null)[]>([]);

    // Scroll-driven stacking: cards beneath the top one shrink + dim.
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        let raf = 0;
        const update = () => {
            raf = 0;
            const tops = cardRefs.current.map((el) =>
                el ? el.getBoundingClientRect().top : Infinity
            );
            let active = 0;
            tops.forEach((top, i) => {
                if (top <= STICKY_BASE_PX + i * STICKY_STEP_PX + 4) active = i;
            });
            cardRefs.current.forEach((el, i) => {
                if (!el) return;
                const depth = active - i;
                if (depth <= 0) {
                    el.style.transform = '';
                    el.style.filter = '';
                } else {
                    const scale = Math.max(0.92, 1 - depth * 0.04);
                    const brightness = Math.max(0.72, 1 - depth * 0.14);
                    el.style.transform = `scale(${scale})`;
                    el.style.filter = `brightness(${brightness})`;
                }
            });
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <section data-hero-next className="bg-white section-pad overflow-clip">
            <div className="container-site">
                <header className="max-w-2xl mb-10 md:mb-14 animate-fade-up">
                    <p className="text-sm uppercase tracking-[0.2em] text-brand-deep font-semibold mb-4">
                        What drives us
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Our Core Values &amp; Mission
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                        Three ways to grow with E-Club: learn skills, meet people, ship ideas.
                        Scroll — each one stacks.
                    </p>
                </header>

                <div className="space-y-5 md:space-y-6 pb-10">
                    {values.map((value, i) => (
                        <article
                            key={value.title}
                            ref={(el) => {
                                cardRefs.current[i] = el;
                            }}
                            className="stack-card sticky rounded-3xl border border-gray-200 bg-white shadow-xl min-h-[62svh] md:min-h-[60vh] p-8 md:p-12 flex flex-col overflow-hidden"
                            style={{ top: `calc(5.5rem + ${i * STICKY_STEP_PX}px)` }}
                        >
                            <span
                                className="pointer-events-none select-none absolute -top-4 right-4 md:right-8 text-[96px] md:text-[160px] leading-none font-extrabold text-gray-100"
                                aria-hidden="true"
                            >
                                {value.index}
                            </span>

                            <div className="relative flex items-center gap-4">
                                <span
                                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${chipStyles[value.accent]}`}
                                    aria-hidden="true"
                                >
                                    {value.icon}
                                </span>
                                <p className="text-sm font-bold tracking-[0.25em] text-brand">
                                    {value.index}
                                </p>
                            </div>

                            <div className="relative mt-6 md:mt-8">
                                <h3 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                                    {value.title}
                                </h3>
                                <p className="mt-4 md:mt-5 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                                    {value.description}
                                </p>
                            </div>

                            <div className="relative mt-auto pt-8">
                                <div className="flex items-end justify-between border-t border-gray-200 pt-6">
                                    <p>
                                        <span className="text-3xl md:text-4xl font-bold text-gray-900">
                                            {value.stat}
                                        </span>{' '}
                                        <span className="text-sm text-gray-500">
                                            {value.statLabel}
                                        </span>
                                    </p>
                                    <p className="hidden sm:block text-sm font-semibold text-gray-400">
                                        {i + 1} / {values.length}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
