import { baseUrl } from '../../lib/base-url';

type HeroProps = {
  heroVideoUrl?: string;
};

const fallbackVideo =
  'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4'; // Replace with your own hero video

export default function Hero({ heroVideoUrl }: HeroProps) {
  const scrollToContent = () => {
    const next = document.querySelector('[data-hero-next]') as HTMLElement | null;
    const viewportHeight = Math.max(
      window.innerHeight,
      window.visualViewport?.height ?? 0
    );
    window.scrollTo({
      top: next ? next.offsetTop : viewportHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="min-h-screen text-white flex items-center justify-center relative overflow-hidden pt-24 overscroll-y-none"
      style={{ minHeight: 'var(--vh-static-px, 100vh)' }}
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={heroVideoUrl ?? fallbackVideo}
        />
      </div>

      {/* Color overlay to keep blue tone */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2B5DAA] to-[#1e3a5f] opacity-70 -z-10" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-5 md:px-40 max-w-7xl mx-auto text-center pb-24 md:pb-28">
        <h1 className="text-5xl md:text-8xl font-bold mb-8 md:mb-12 animate-fade-in leading-tight">
          Entrepreneurship Club Polimi
        </h1>
        <p className="text-xl md:text-4xl mb-6 md:mb-10 text-gray-200 max-w-4xl mx-auto animate-fade-in-delay font-medium">
          The largest student-run entrepreneurship club in Milan
        </p>
        <p className="text-base md:text-xl mb-8 md:mb-12 text-gray-300 max-w-2xl mx-auto animate-fade-in-delay-2 leading-relaxed">
          Join a community of innovators, builders, and future entrepreneurs. 
          Learn from industry leaders, network with like-minded peers, and turn your ideas into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <a
            href={`${baseUrl}/join`}
            className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: '#FC3F1A' } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E33615';
              e.currentTarget.style.opacity = '0.95';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FC3F1A';
              e.currentTarget.style.opacity = '1';
            }}
          >
            Join Us Today
          </a>
          <a
            href={`${baseUrl}/events`}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
          >
            Explore Events
          </a>
        </div>
      </div>

      {/* Animated scroll indicator */}
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
          className="w-6 h-6 animate-bounce-slow"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
