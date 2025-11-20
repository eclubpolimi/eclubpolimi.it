import { useState } from 'react';
import { baseUrl } from '../lib/base-url';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRocketHovered, setIsRocketHovered] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md transition-colors duration-300" style={{ backgroundColor: '#120A68' }}>
      <div className="px-5 md:px-40 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href={baseUrl || '/'} className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">
            E-Club Polimi
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href={`${baseUrl}/`}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href={`${baseUrl}/our-team`}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            Our Team
          </a>
          <a
            href={`${baseUrl}/events`}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            Events
          </a>
          
          {/* Startup Challenge Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              onMouseEnter={() => setIsRocketHovered(true)}
              onMouseLeave={() => setIsRocketHovered(false)}
            >
              <Rocket 
                className={`w-4 h-4 text-[#FC3F1A] transition-all duration-500 ${
                  isRocketHovered ? '-translate-y-2 rotate-[-15deg]' : 'rotate-[-15deg]'
                }`}
                style={{
                  filter: isRocketHovered ? 'drop-shadow(0 0 8px rgba(252, 63, 26, 0.6))' : 'none'
                }}
              />
              <span className="text-gray-700 font-medium">
                Startup Challenge
              </span>
              <svg
                className={`w-4 h-4 text-gray-700 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
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
                    href={`${baseUrl}/usc-2026`}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>USC 2026</span>
                      <span className="text-xs px-2 py-1 bg-[#FC3F1A] text-white rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          <a
            href={`${baseUrl}/network`}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            Network
          </a>
          <a
            href={`${baseUrl}/join`}
            className="px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            style={{ backgroundColor: '#FC3F1A', color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E0371A'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FC3F1A'}
          >
            Join us
          </a>
        </div>

        {/* Mobile Menu Button - Changed to white */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/20 transition-colors duration-300" style={{ backgroundColor: '#120A68' }}>
          <div className="px-5 py-4 space-y-4">
            <a
              href={`${baseUrl}/`}
              className="block text-white hover:text-gray-200 transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href={`${baseUrl}/our-team`}
              className="block text-white hover:text-gray-200 transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </a>
            <a
              href={`${baseUrl}/events`}
              className="block text-white hover:text-gray-200 transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Events
            </a>
            
            {/* Startup Challenge Mobile - Improved styling */}
            <div className="space-y-2">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full text-white hover:text-gray-200 transition-colors duration-200 py-2"
              >
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-[#FC3F1A] rotate-[-15deg]" />
                  <span className="text-white font-medium">Startup Challenge</span>
                </div>
                <svg
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
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
              
              {/* Improved Mobile Dropdown */}
              {isDropdownOpen && (
                <div className="pl-4 space-y-1 animate-fade-in bg-white/5 backdrop-blur-sm rounded-lg py-3 border border-white/10">
                  <a
                    href={`${baseUrl}/usc-2024`}
                    className="flex items-center justify-between px-3 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200"
                    onClick={() => {
                      setIsOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <span className="font-medium">USC 2024</span>
                    <span className="text-xs px-2 py-1 bg-gray-600 rounded-full text-gray-300">
                      Finished
                    </span>
                  </a>
                  <a
                    href={`${baseUrl}/usc-2025`}
                    className="flex items-center justify-between px-3 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200"
                    onClick={() => {
                      setIsOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <span className="font-medium">USC 2025</span>
                    <span className="text-xs px-2 py-1 bg-gray-600 rounded-full text-gray-300">
                      Finished
                    </span>
                  </a>
                  <a
                    href={`${baseUrl}/usc-2026`}
                    className="flex items-center justify-between px-3 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200"
                    onClick={() => {
                      setIsOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <span className="font-medium">USC 2026</span>
                    <span className="text-xs px-2 py-1 bg-[#FC3F1A] rounded-full text-white font-medium">
                      Coming Soon
                    </span>
                  </a>
                </div>
              )}
            </div>

            <a
              href={`${baseUrl}/network`}
              className="block text-white hover:text-gray-200 transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Network
            </a>
            <a
              href={`${baseUrl}/join`}
              className="block px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200 mt-2"
              style={{ backgroundColor: '#FC3F1A', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E0371A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FC3F1A'}
              onClick={() => setIsOpen(false)}
            >
              Join us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
