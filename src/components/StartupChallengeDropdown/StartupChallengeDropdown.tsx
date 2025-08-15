import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { ALL_STARTUP_CHALLENGES_QUERY } from 'data/queries';
import { StartupChallengeDataQuery } from 'types/cms';

interface StartupChallengeDropdownProps {
  className?: string;
}

type ChallengeStatus =
  | 'Coming Soon'
  | 'Starting Soon'
  | 'Registration Open'
  | 'Ongoing'
  | 'Finished';

interface ChallengeData {
  year: string;
  path: string;
  status: ChallengeStatus;
  data?: {
    name?: string | null;
    submissionsOpenDate?: string | null;
    submissionsCloseDate?: string | null;
    finishDate?: string | null;
  } | null;
}

const getStatusFromDates = (
  submissionsOpenDate?: string | null,
  submissionsCloseDate?: string | null,
  finishDate?: string | null,
): ChallengeStatus => {
  const now = new Date();

  if (!submissionsOpenDate || !submissionsCloseDate || !finishDate) {
    return 'Coming Soon';
  }

  const openDate = new Date(submissionsOpenDate);
  const closeDate = new Date(submissionsCloseDate);
  const endDate = new Date(finishDate);

  // Debug logging
  console.log('Status calculation:', {
    now: now.toISOString(),
    openDate: openDate.toISOString(),
    closeDate: closeDate.toISOString(),
    endDate: endDate.toISOString(),
  });

  if (now > endDate) {
    return 'Finished';
  }

  if (now > closeDate && now <= endDate) {
    return 'Ongoing';
  }

  if (now >= openDate && now <= closeDate) {
    return 'Registration Open';
  }

  if (now < openDate) {
    return 'Starting Soon';
  }

  return 'Coming Soon';
};

const getStatusStyle = (status: ChallengeStatus) => {
  switch (status) {
    case 'Registration Open':
      return 'bg-green-500 dark:bg-green-600 text-white transition-colors duration-300'; // Green for active registration
    case 'Ongoing':
      return 'bg-blue-500 dark:bg-blue-600 text-white transition-colors duration-300'; // Blue for active/current
    case 'Starting Soon':
      return 'bg-yellow-500 dark:bg-yellow-600 text-white transition-colors duration-300'; // Yellow for upcoming
    case 'Finished':
      return 'bg-gray-500 dark:bg-gray-600 text-white transition-colors duration-300'; // Gray for completed
    case 'Coming Soon':
    default:
      return 'bg-purple-500 dark:bg-purple-600 text-white transition-colors duration-300'; // Purple for future
  }
};

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

  // Fetch startup challenge data
  const { data: challengeData } = useQuery<StartupChallengeDataQuery>(
    ALL_STARTUP_CHALLENGES_QUERY,
  );

  // Process the data and calculate statuses
  const years: ChallengeData[] = [
    { year: '2026', path: '/startupchallenge/2026', status: 'Coming Soon' },
    { year: '2025', path: '/startupchallenge/2025', status: 'Coming Soon' },
    { year: '2024', path: '/startupchallenge/2024', status: 'Coming Soon' },
  ];

  // Update years with actual data when available
  if (challengeData?.startupchallengeCollection?.items) {
    challengeData.startupchallengeCollection.items.forEach((item) => {
      if (item?.name) {
        // Extract year from name (assuming format like "USC 2026" or "Startup Challenge 2026")
        const yearMatch = item.name.match(/(\d{4})/);
        if (yearMatch) {
          const year = yearMatch[1];
          const existingYearIndex = years.findIndex((y) => y.year === year);

          if (existingYearIndex !== -1) {
            const status = getStatusFromDates(
              item.submissionsOpenDate,
              item.submissionsCloseDate,
              item.finishDate,
            );

            years[existingYearIndex] = {
              ...years[existingYearIndex],
              status,
              data: item,
            };

            console.log(`Updated USC ${year} with status: ${status}`);
          } else {
            // If we find a year that's not in our hardcoded list, add it
            const status = getStatusFromDates(
              item.submissionsOpenDate,
              item.submissionsCloseDate,
              item.finishDate,
            );

            years.push({
              year,
              path: `/startupchallenge/${year}`,
              status,
              data: item,
            });

            console.log(`Added new USC ${year} with status: ${status}`);
          }
        }
      }
    });

    // Sort years in descending order (newest first)
    years.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  }

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
        className="gradient-hover inline-flex items-center gap-2 px-6 py-2 bg-white dark:bg-ec_background_darkmode text-ec_blue dark:text-ec_text_darkmode transition-colors duration-300 hover:text-white font-medium rounded-xl transition-all duration-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-ec_blue focus:ring-offset-2 transform hover:scale-105 active:scale-95"
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
            className="fixed bg-white dark:bg-ec_background_darkmode transition-colors duration-300 border border-ec_border_light dark:border-ec_border_darkmode rounded-md shadow-2xl backdrop-blur-sm"
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
                  className="block px-4 py-3 text-sm text-ec_text dark:text-ec_text_darkmode hover:bg-ec_grey hover:bg-opacity-20 dark:hover:bg-ec_grey_darkmode transition-colors duration-300 first:rounded-t-md last:rounded-b-md text-center whitespace-nowrap"
                  onClick={() => {
                    console.log('Dropdown item clicked:', yearData.year);
                    setIsOpen(false);
                  }}
                >
                  <span className="flex items-center justify-between w-full gap-3">
                    <span>USC {yearData.year}</span>
                    <span
                      className={`px-2 py-1 text-white text-xs rounded-full font-semibold min-w-[90px] text-center ${getStatusStyle(yearData.status)}`}
                    >
                      {yearData.status}
                    </span>
                  </span>
                </Link>
                {index < years.length - 1 && (
                  <div className="h-px bg-gray-200 dark:bg-gray-600 transition-colors duration-300"></div>
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
