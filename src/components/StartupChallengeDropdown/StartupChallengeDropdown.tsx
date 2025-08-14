import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface StartupChallengeDropdownProps {
  className?: string;
}

const StartupChallengeDropdown = ({
  className = '',
}: StartupChallengeDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const years = [
    { year: '2026', path: '/startupchallenge/2026', isCurrent: true },
    { year: '2025', path: '/startupchallenge/2025', isCurrent: false },
    { year: '2024', path: '/startupchallenge/2024', isCurrent: false },
  ];

  // Advanced animated rocket component with Framer Motion
  const AnimatedRocket = () => {
    const [rocketPosition, setRocketPosition] = useState({ top: 0, left: 0 });
    const rocketRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (rocketRef.current) {
        const updatePosition = () => {
          const rect = rocketRef.current?.getBoundingClientRect();
          if (rect) {
            setRocketPosition({
              top: rect.top + window.scrollY,
              left: rect.left + window.scrollX,
            });
          }
        };

        updatePosition();

        if (isHovered) {
          const interval = setInterval(updatePosition, 50);
          return () => clearInterval(interval);
        }
      }
    }, [isHovered]);

    return (
      <>
        <div ref={rocketRef} className="relative inline-block overflow-visible">
          <motion.div
            animate={isHovered ? 'launch' : 'idle'}
            variants={{
              idle: {
                y: 0,
                x: 0,
                rotate: 0,
                scale: 1,
                opacity: 1,
              },
              launch: {
                y: [0, -15, -40, -60],
                x: [0, 5, 15, 25],
                rotate: [0, -15, -35, -45],
                scale: [1, 1.1, 1.3, 0.8],
                opacity: [1, 1, 0.7, 0],
                transition: {
                  duration: 1.5,
                  times: [0, 0.3, 0.7, 1],
                  ease: 'easeOut',
                },
              },
            }}
            style={{
              filter: isHovered
                ? 'drop-shadow(0 0 12px rgba(255, 165, 0, 0.8))'
                : 'none',
            }}
            className="inline-block"
          >
            🚀
          </motion.div>

          {/* Replacement rocket that slides in from bottom when original launches */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 inline-block"
                initial={{
                  y: 20,
                  x: -5,
                  opacity: 0,
                  scale: 0.5,
                  rotate: 45,
                }}
                animate={{
                  y: 0,
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  y: 20,
                  x: -5,
                  opacity: 0,
                  scale: 0.5,
                  rotate: 45,
                }}
                transition={{
                  delay: 1.0, // Appears near the end of launch
                  duration: 0.5,
                  ease: 'backOut',
                }}
              >
                🚀
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Portal for particles - renders outside navbar */}
        {isHovered &&
          typeof window !== 'undefined' &&
          createPortal(
            <div
              className="pointer-events-none fixed inset-0 z-[10000]"
              style={{ overflow: 'visible' }}
            >
              <AnimatePresence>
                {/* Multiple circle particles bursting out */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * 360; // Distribute evenly in circle
                  const distance = 20 + Math.random() * 15; // Random distance
                  return (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute pointer-events-none"
                      style={{
                        top: rocketPosition.top + 8,
                        left: rocketPosition.left + 8,
                        zIndex: 10001,
                      }}
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: [0, 1, 0.7, 0],
                        scale: [0, 1, 0.5, 0],
                        x: [0, Math.cos((angle * Math.PI) / 180) * distance],
                        y: [0, Math.sin((angle * Math.PI) / 180) * distance],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 1.5,
                        delay: 0.2 + i * 0.05,
                        ease: 'easeOut',
                      }}
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
                    </motion.div>
                  );
                })}

                {/* Additional exhaust particles trailing behind */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`exhaust-${i}`}
                    className="absolute pointer-events-none"
                    style={{
                      top: rocketPosition.top + 10,
                      left: rocketPosition.left + 5,
                      zIndex: 10000,
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: [0, 0.8, 0.4, 0],
                      scale: [0, 1, 1.5, 2],
                      x: [0, -8 - i * 3],
                      y: [0, 2 + Math.random() * 4],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      ease: 'easeOut',
                    }}
                  >
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-60"></div>
                  </motion.div>
                ))}

                {/* Launch glow effect */}
                <motion.div
                  className="absolute pointer-events-none"
                  style={{
                    top: rocketPosition.top,
                    left: rocketPosition.left,
                    zIndex: 9999,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 1,
                  }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [1, 2.5, 4],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: 'easeOut',
                  }}
                >
                  <div className="w-6 h-6 bg-orange-400 rounded-full blur-sm opacity-30"></div>
                </motion.div>
              </AnimatePresence>
            </div>,
            document.body,
          )}
      </>
    );
  };

  const handleToggle = () => {
    console.log('Dropdown toggle clicked, current state:', isOpen);

    if (!isOpen && buttonRef.current) {
      // Calculate position when opening dropdown
      const rect = buttonRef.current.getBoundingClientRect();
      const isMobile = window.innerWidth < 1280; // xl breakpoint is 1280px

      // Check if we're in the mobile navigation menu
      const isInMobileMenu =
        buttonRef.current.closest('.mobile-nav-button-wrapper') !== null;

      if (isMobile && isInMobileMenu) {
        // When in mobile menu, position relative to the menu container
        const navMenu = buttonRef.current.closest('ul');
        const navMenuRect = navMenu?.getBoundingClientRect();

        if (navMenuRect) {
          setDropdownPosition({
            top: rect.top + window.scrollY, // Start at same height as USC button, not below it
            left: navMenuRect.left - 256 - 8, // Position to the left of the menu with small gap
            width: 256,
          });
        } else {
          // Fallback positioning
          setDropdownPosition({
            top: rect.top + window.scrollY, // Start at same height as USC button
            left: rect.left - 256 - 8,
            width: 256,
          });
        }
      } else if (isMobile) {
        // On mobile but not in menu (shouldn't happen, but fallback)
        setDropdownPosition({
          top: rect.bottom + window.scrollY + 4,
          left: window.innerWidth - 320,
          width: 256,
        });
      } else {
        // Desktop positioning (original behavior)
        setDropdownPosition({
          top: rect.bottom + window.scrollY + 4,
          left: rect.left + window.scrollX,
          width: rect.width,
        });
      }
    }

    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        console.log('Clicked outside dropdown, closing');
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`}>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="gradient-hover inline-flex items-center gap-2 px-6 py-2 bg-white dark:bg-ec_background_darkmode text-ec_blue dark:text-ec_text_darkmode hover:text-white font-medium rounded-xl transition-all duration-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-ec_blue focus:ring-offset-2 transform hover:scale-105 active:scale-95"
      >
        <AnimatedRocket />
        <span className="hidden xl:inline">Startup Challenge</span>
        <span className="xl:hidden">USC</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'xl:rotate-180 rotate-90' : 'xl:rotate-0 -rotate-90'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen &&
        typeof window !== 'undefined' &&
        createPortal(
          <div
            ref={dropdownRef}
            className="fixed bg-white dark:bg-ec_background_darkmode border border-ec_border_light dark:border-ec_border_darkmode rounded-md shadow-2xl backdrop-blur-sm"
            style={{
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              minWidth: Math.max(dropdownPosition.width, 200),
              zIndex: 10001,
            }}
          >
            {years.map((yearData, index) => (
              <div key={yearData.year}>
                <Link
                  href={yearData.path}
                  className="block px-4 py-3 text-sm text-ec_text dark:text-ec_text_darkmode hover:bg-ec_grey hover:bg-opacity-20 dark:hover:bg-ec_grey_darkmode transition-colors first:rounded-t-md last:rounded-b-md text-center whitespace-nowrap"
                  onClick={() => {
                    console.log('Dropdown item clicked:', yearData.year);
                    setIsOpen(false);
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    USC {yearData.year}
                    {yearData.isCurrent && (
                      <span className="px-2 py-1 bg-ec_orange dark:bg-ec_orange_darkmode text-white text-xs rounded-full font-semibold">
                        Current
                      </span>
                    )}
                  </span>
                </Link>
                {index < years.length - 1 && (
                  <div className="mx-3 h-px bg-ec_grey dark:bg-ec_grey_darkmode"></div>
                )}
              </div>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
};

export default StartupChallengeDropdown;
