export default function Footer({ brandingLogo }: { brandingLogo?: import('../../lib/contentful').SiteImageAsset | null }) {
    const logoLight = brandingLogo?.imageLightMode?.url ?? brandingLogo?.url ?? undefined;
    const logoDark = brandingLogo?.imageDarkMode?.url ?? logoLight;
    const logoAlt =
        brandingLogo?.imageLightMode?.description ??
        brandingLogo?.imageDarkMode?.description ??
        brandingLogo?.imageLightMode?.title ??
        brandingLogo?.imageDarkMode?.title ??
        'E-Club Polimi logo';

    return (
        <footer className="bg-gradient-to-br from-[#2B5DAA] to-[#1e3a5f] text-white px-5 md:px-20">
            <div className="w-full max-w-screen-xl mx-auto py-12 lg:py-14 grid gap-10 lg:gap-16 lg:grid-cols-[1.4fr_1fr_1fr] items-start">
                {/* Brand / Intro */}
                <div className="flex flex-col gap-4">
                    {logoLight ? (
                        <picture className="h-14 flex items-center mt-3">
                            {logoDark && <source media="(prefers-color-scheme: dark)" srcSet={logoDark} />}
                            <img src={logoLight} alt={logoAlt} className="h-14 w-auto object-contain" loading="lazy" />
                        </picture>
                    ) : (
                        <div className="text-xl font-semibold">E-Club Polimi</div>
                    )}
                    <p className="text-sm text-white/80 max-w-sm">
                        Entrepreneurship Club Polimi — connecting students, founders, and innovators across Milan.
                    </p>
                    <div className="flex items-center gap-4 text-white/80">
                        <a
                            href="https://x.com/eclubpolimi"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <span className="sr-only">X</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.146 2H21.3l-6.9 7.89L22.1 22h-5.59l-4.38-5.73L7.1 22H3.945l7.38-8.44L2.9 2h5.73l3.95 5.22L18.146 2zm-.98 17.2h1.53L7.01 4.69H5.38l11.787 14.51z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/eclubpolimi/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <span className="sr-only">Instagram</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/eclubpolimi/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href="mailto:info@eclubpolimi.it"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <span className="sr-only">Email</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Column 1 */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-white">Explore</h3>
                    <div className="flex flex-col gap-2 text-sm text-white/80">
                        {[
                            { label: 'Home', href: '/' },
                            { label: 'Our Team', href: '/our-team' },
                            { label: 'Events', href: '/events' },
                            { label: 'Network', href: '/network' },
                        ].map((link) => (
                            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-white">Programs</h3>
                    <div className="flex flex-col gap-2 text-sm text-white/80">
                        {[
                            { label: 'Join', href: '/join' },
                            { label: 'USC 2024', href: '/usc-2024' },
                            { label: 'USC 2025', href: '/usc-2025' },
                            { label: 'USC 2026', href: '/usc-2026' },
                        ].map((link) => (
                            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full max-w-screen-xl mx-auto border-t border-white/20 py-6 text-center">
                <p className="text-sm text-white/60">
                    © {new Date().getFullYear()} E-Club Polimi. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
