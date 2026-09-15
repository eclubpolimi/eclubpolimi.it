import { useEffect, useRef } from 'react';
import { baseUrl } from '../../lib/base-url';

type HeroProps = {
    heroVideoUrl?: string;
};

const fallbackVideo =
    'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4'; // Replace with your own hero video

export default function Hero({ heroVideoUrl }: HeroProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            videoRef.current?.pause();
        }
    }, []);

    const scrollToContent = () => {
        const next = document.querySelector('[data-hero-next]') as HTMLElement | null;
        const viewportHeight = Math.max(
            window.innerHeight,
            window.visualViewport?.height ?? 0
        );
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        window.scrollTo({
            top: next ? next.offsetTop : viewportHeight,
            behavior: reduceMotion ? 'auto' : 'smooth',
        });
    };

    return (
        <div
            className="min-h-screen text-white flex items-center justify-center relative overflow-hidden pt-24"
            style={{ minHeight: 'var(--vh-static-px, 100vh)' }}
        >
            {/* Background video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover pointer-events-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    src={heroVideoUrl ?? fallbackVideo}
                />
            </div>

            {/* Layered scrim for readable text over any frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-deep/85 via-brand-navy/60 to-brand-navy-deep/80 z-[1] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-[1] pointer-events-none" />

            <div className="relative z-10 container-site text-center pb-24 md:pb-28">
                <p className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase bg-white/10 backdrop-blur-sm border border-white/25 text-white mb-6 md:mb-8 animate-fade-up">
                    Student-run • Politecnico di Milano
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 animate-fade-up-1 tracking-tight text-balance leading-tight">
                    Entrepreneurship Club Polimi
                </h1>
                <p className="text-lg md:text-2xl mb-5 md:mb-6 text-white/90 max-w-4xl mx-auto animate-fade-up-2 font-medium">
                    The largest student-run entrepreneurship club in Milan
                </p>
                <p className="text-base md:text-lg mb-8 md:mb-10 text-white/80 max-w-2xl mx-auto animate-fade-up-3 leading-relaxed">
                    Join a community of innovators, builders, and future entrepreneurs.
                    Learn from industry leaders, network with like-minded peers, and turn your ideas into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up-3">
                    <a
                        href={`${baseUrl}/join`}
                        className="bg-brand hover:bg-brand-deep text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-[0.98] min-h-[48px] inline-flex items-center justify-center"
                    >
                        Join Us Today
                    </a>
                    <a
                        href={`${baseUrl}/events`}
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 min-h-[48px] inline-flex items-center justify-center"
                    >
                        Explore Events
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToContent}
                className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group cursor-pointer bg-transparent border-none"
                aria-label="Scroll to content"
            >
                <span className="text-sm font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Discover More
                </span>
                <div className="relative w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center pt-2 group-hover:border-white transition-colors duration-300">
                    <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce-slow group-hover:bg-white"></div>
                </div>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </button>
        </div>
    );
}
