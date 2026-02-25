import { useEffect, useState } from 'react';
import { baseUrl } from '../../lib/base-url';
import type { SiteImageAsset } from '../../lib/contentful';
import { Rocket } from 'lucide-react';

interface NavbarProps {
    currentPath?: string;
    brandingLogo?: SiteImageAsset | null;
}

export default function Navbar({ currentPath = '/', brandingLogo }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isRocketHovered, setIsRocketHovered] = useState(false);
    const normalizePath = (pathname: string) => {
        if (!pathname) return '/';
        let trimmed = pathname;
        if (baseUrl && trimmed.startsWith(baseUrl)) {
            trimmed = trimmed.slice(baseUrl.length) || '/';
        }
        if (!trimmed.startsWith('/')) trimmed = `/${trimmed}`;
        return trimmed;
    };
    const [activePath, setActivePath] = useState(() =>
        typeof window !== 'undefined' ? normalizePath(window.location.pathname) : normalizePath(currentPath)
    );

    useEffect(() => {
        const pathname = typeof window !== 'undefined' ? window.location.pathname : currentPath;
        setActivePath(normalizePath(pathname));
    }, [currentPath]);

    const navLinks = [
        { label: 'Home', href: `${baseUrl}/`, match: '/' },
        { label: 'Our Team', href: `${baseUrl}/our-team`, match: '/our-team' },
        { label: 'Events', href: `${baseUrl}/events`, match: '/events' },
        { label: 'Calendar', href: `${baseUrl}/calendar`, match: '/calendar' },
        { label: 'Network', href: `${baseUrl}/network`, match: '/network' },
    ];

    const isActive = (match: string) =>
        match === '/'
            ? activePath === '/'
            : activePath.startsWith(match);

    const linkClasses = (match: string) =>
        `transition-colors duration-200 pb-1 border-b-2 ${isActive(match)
            ? 'border-[#FC3F1A] text-[#FC3F1A] font-semibold'
            : 'border-transparent text-white hover:text-gray-200 hover:border-white/60'
        }`;

    const mobileLinkClasses = (match: string) =>
        `block transition-colors duration-200 py-2 ${isActive(match)
            ? 'text-[#FC3F1A] font-semibold'
            : 'text-white hover:text-gray-200'
        }`;

    const challengeActive = activePath.startsWith('/usc-');
    const joinActive = isActive('/join');
    const joinBaseColor = '#FC3F1A';
    const joinHoverColor = '#E0371A';
    const logoLight = brandingLogo?.imageLightMode?.url ?? brandingLogo?.url ?? undefined;
    const logoDark = brandingLogo?.imageDarkMode?.url ?? logoLight;
    const logoAlt =
        brandingLogo?.imageLightMode?.description ??
        brandingLogo?.imageDarkMode?.description ??
        brandingLogo?.imageLightMode?.title ??
        brandingLogo?.imageDarkMode?.title ??
        'E-Club Polimi logo';

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md transition-colors duration-300 bg-gradient-to-r from-[#2B5DAA] to-[#1e3a5f]">
            <div className="px-5 md:px-20 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href={baseUrl || '/'} className="flex items-center space-x-2 min-w-0 max-w-[70%]">
                    {logoLight ? (
                        <picture className="h-12 flex items-center">
                            {logoDark && <source media="(prefers-color-scheme: dark)" srcSet={logoDark} />}
                            <img src={logoLight} alt={logoAlt} className="h-9 w-auto object-contain max-w-full" loading="lazy" />
                        </picture>
                    ) : (
                        <span className="text-2xl font-bold text-white">
                            E-Club Polimi
                        </span>
                    )}
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.match}
                            href={link.href}
                            className={linkClasses(link.match)}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Startup Challenge Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button
                            className={`flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border ${challengeActive ? 'border-[#FC3F1A] ring-2 ring-[#FC3F1A]/60' : 'border-gray-200'}`}
                            onMouseEnter={() => setIsRocketHovered(true)}
                            onMouseLeave={() => setIsRocketHovered(false)}
                        >
                            <Rocket
                                className={`w-4 h-4 text-[#FC3F1A] transition-all duration-500 ${isRocketHovered ? '-translate-y-2 rotate-[-15deg]' : 'rotate-[-15deg]'}`}
                                style={{
                                    filter: isRocketHovered ? 'drop-shadow(0 0 8px rgba(252, 63, 26, 0.6))' : 'none'
                                }}
                            />
                            <span className="text-gray-700 font-medium">
                                Startup Challenge
                            </span>
                            <svg
                                className={`w-4 h-4 text-gray-700 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Menu - Added padding-top to bridge the gap */}
                        {isDropdownOpen && (
                            <div
                                className="absolute top-full left-0 right-0 pt-2"
                                style={{ marginTop: '0px' }}
                            >
                                <div className="w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-fade-in">
                                    <a
                                        href={`${baseUrl}/usc-2024`}
                                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 border-b border-gray-200"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>USC 2024</span>
                                            <span className="text-xs px-2 py-1 bg-gray-200 rounded-full text-gray-600">
                                                Finished
                                            </span>
                                        </div>
                                    </a>
                                    <a
                                        href={`${baseUrl}/usc-2025`}
                                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 border-b border-gray-200"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>USC 2025</span>
                                            <span className="text-xs px-2 py-1 bg-gray-200 rounded-full text-gray-600">
                                                Finished
                                            </span>
                                        </div>
                                    </a>
                                    <a
                                        href={`https://www.unistartupchallenge.com/`}
                                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>USC 2026</span>
                                            <span className="text-xs px-2 py-1 bg-[#FC3F1A] text-white rounded-full">
                                                Applying
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Join button */}
                    <a
                        href={`${baseUrl}/join`}
                        className="px-5 py-2 rounded-lg font-semibold text-white transition-all duration-300"
                        style={{
                            backgroundColor: joinActive ? joinHoverColor : joinBaseColor,
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = joinHoverColor;
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = joinActive ? joinHoverColor : joinBaseColor;
                        }}
                    >
                        Join
                    </a>
                </div>

                {/* Mobile menu button + Rocket icon */}
                <div className="md:hidden flex items-center space-x-4">
                    {/* Rocket icon */}
                    <a
                        href={`${baseUrl}/join`}
                        onMouseEnter={() => setIsRocketHovered(true)}
                        onMouseLeave={() => setIsRocketHovered(false)}
                    >
                        <Rocket
                            size={28}
                            color={isRocketHovered || joinActive ? joinHoverColor : joinBaseColor}
                            fill={isRocketHovered || joinActive ? joinHoverColor : 'none'}
                            className="transition-all duration-300 cursor-pointer"
                        />
                    </a>

                    {/* Hamburger button */}
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-[#2B5DAA] to-[#1e3a5f] px-5 pb-5 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.match}
                            href={link.href}
                            className={mobileLinkClasses(link.match)}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Startup Challenge - Mobile dropdown */}
                    <div className="py-2">
                        <button
                            className="w-full text-left transition-colors duration-200 text-white hover:text-gray-200 font-semibold flex items-center justify-between"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Challenges
                            <svg
                                className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="pl-4 mt-2 space-y-2">
                                {[
                                    { label: 'USC 2024', href: `${baseUrl}/usc-2024` },
                                    { label: 'USC 2025', href: `${baseUrl}/usc-2025` },
                                    // { label: 'USC 2026', href: `${baseUrl}/usc-2026` },
                                    { label: 'USC 2026', href: `https://www.unistartupchallenge.com/` },
                                ].map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="block text-white hover:text-gray-200 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Join button - mobile */}
                    <a
                        href={`${baseUrl}/join`}
                        className="block w-full px-4 py-2 text-center rounded-lg font-semibold text-white mt-4"
                        style={{
                            backgroundColor: joinBaseColor,
                        }}
                    >
                        Join
                    </a>
                </div>
            )}
        </nav>
    );
}
