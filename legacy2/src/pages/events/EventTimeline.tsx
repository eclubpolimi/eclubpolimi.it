import { useState } from 'react';
import { baseUrl } from '../../lib/base-url';

interface Event {
  date: string;
  title: string;
  description: string;
  year: number;
}

interface EventTimelineProps {
  events: Event[];
}

export default function EventTimeline({ events }: EventTimelineProps) {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Reverse the events array to show latest first
  const reversedEvents = [...events].reverse();

  // Find where to insert the "and so much more" gap (between last 2024 event and first 2022 event)
  const findGapIndex = () => {
    for (let i = 0; i < reversedEvents.length - 1; i++) {
      if (reversedEvents[i].year === 2024 && reversedEvents[i + 1].year === 2022) {
        return i + 1;
      }
    }
    return -1;
  };

  const gapIndex = findGapIndex();
  
  // Calculate where the solid line should end (before October 24, 2024)
  const solidLineEndIndex = gapIndex > 0 ? gapIndex - 1 : reversedEvents.length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-20 px-4 md:px-5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in px-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our Events
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover our journey through workshops, visits, and networking events. Click on any card to learn more!
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Solid Orange Line - stops before October 24, 2024 */}
          <div 
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-[#FC3F1A] transform md:-translate-x-1/2"
            style={{
              height: gapIndex > 0 ? `calc(${(solidLineEndIndex / reversedEvents.length) * 100}% - 6rem)` : '100%'
            }}
          ></div>

          {/* Events */}
          <div className="space-y-12">
            {reversedEvents.map((event, index) => {
              const isExpanded = expandedCards.has(index);
              const isLastBeforeGap = gapIndex !== -1 && index === gapIndex - 1;
              const isInDottedSection = index >= gapIndex - 1;
              
              return (
                <div key={index}>
                  <div
                    className={`relative flex items-start ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#FC3F1A] transform md:-translate-x-1/2 ring-4 ring-white dark:ring-gray-900 z-10"></div>

                    {/* Dotted line for October 24, 2024 event and beyond */}
                    {isInDottedSection && (
                      <div 
                        className="absolute left-4 md:left-1/2 w-1 transform md:-translate-x-1/2 top-0 z-[1]"
                        style={{
                          height: isLastBeforeGap ? 'calc(100% + 3rem)' : '100%',
                          backgroundImage: 'repeating-linear-gradient(0deg, #FC3F1A, #FC3F1A 8px, transparent 8px, transparent 16px)',
                          backgroundSize: '2px 100%',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'repeat-y'
                        }}
                      ></div>
                    )}

                    {/* Card Container */}
                    <div
                      className={`pl-10 md:pl-0 pr-0 md:pr-0 ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                      } md:w-[calc(50%-2rem)] w-[calc(100%-2.5rem)]`}
                    >
                      <div
                        className={`relative rounded-xl shadow-lg cursor-pointer overflow-hidden transition-all duration-500 ease-out ${
                          isExpanded ? 'bg-[#FC3F1A]' : 'bg-[#224371]'
                        }`}
                        style={{
                          height: isExpanded ? 'auto' : '200px',
                        }}
                        onClick={() => toggleExpand(index)}
                      >
                        {/* Collapsed State - Title & Date */}
                        <div
                          className={`p-4 md:p-6 flex flex-col justify-center items-center text-center transition-all duration-500 ${
                            isExpanded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-[200px]'
                          }`}
                        >
                          <div className="mb-3 md:mb-4">
                            <span className="px-3 md:px-4 py-1.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold text-white">
                              {event.date}
                            </span>
                          </div>
                          <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 px-2 md:px-4">
                            {event.title}
                          </h3>
                          <p className="text-white/70 text-xs md:text-sm">Click to read more →</p>
                        </div>

                        {/* Expanded State - Full Description */}
                        <div
                          className={`p-4 md:p-6 transition-all duration-500 ${
                            isExpanded ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                          }`}
                        >
                          <div className="mb-2 md:mb-3">
                            <span className="px-2.5 md:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                              {event.date}
                            </span>
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                            {event.title}
                          </h4>
                          <p className="text-white text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                            {event.description}
                          </p>
                          <p className="text-white/70 text-xs md:text-sm">Click to collapse ←</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gap between 2022 and 2024 with "and so much more" */}
                  {index === gapIndex - 1 && (
                    <div className="relative py-20">
                      {/* Extended dotted line with better visibility - more dashes */}
                      <div 
                        className="absolute left-4 md:left-1/2 w-1 transform md:-translate-x-1/2 h-full z-[2]"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(0deg, #FC3F1A, #FC3F1A 8px, transparent 8px, transparent 16px)',
                          backgroundSize: '2px 100%',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'repeat-y'
                        }}
                      ></div>
                      
                      {/* "and so much more" text */}
                      <div className="relative flex items-center justify-center">
                        <div className="pl-10 md:pl-0 relative z-10">
                          <div className="bg-white dark:bg-gray-800 px-8 py-4 rounded-full shadow-lg border-2 border-[#FC3F1A]">
                            <p className="text-xl md:text-2xl font-bold text-[#FC3F1A] italic">
                              and so much more...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Coming Soon Section with solid line */}
            <div className="relative flex items-start md:flex-row flex-col">
              {/* Solid line for Coming Soon section */}
              <div className="absolute left-4 md:left-1/2 w-0.5 bg-[#FC3F1A] transform md:-translate-x-1/2 top-0 h-full"></div>
              
              {/* Timeline Dot with Animation */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#FC3F1A] transform md:-translate-x-1/2 ring-4 ring-white dark:ring-gray-900 z-10 animate-pulse"></div>

              {/* Content Card */}
              <div className="pl-10 md:pl-0 pr-0 md:mr-auto md:pr-12 md:w-[calc(50%-2rem)] w-[calc(100%-2.5rem)]">
                <div className="bg-gradient-to-br from-[#224371] to-[#1a2f54] rounded-xl shadow-lg p-6 md:p-8 text-center">
                  <div className="text-5xl md:text-6xl mb-3 md:mb-4">🚀</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">Coming Soon...</h3>
                  <p className="text-gray-200 text-base md:text-lg mb-4 md:mb-0">Stay tuned for more of our events!</p>
                  <div className="mt-4 md:mt-6">
                    <a
                      href={`${baseUrl}/join`}
                      className="inline-block text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#FC3F1A' } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#E03515';
                        e.currentTarget.style.opacity = '0.95';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#FC3F1A';
                        e.currentTarget.style.opacity = '1';
                      }}
                    >
                      Join E-Club to Stay Updated
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-12 shadow-xl mx-2 md:mx-0">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
            Want to Attend Our Events?
          </h3>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Join E-Club Polimi to get exclusive access to all our events, workshops, and networking
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
            <a
              href={`${baseUrl}/join`}
              className="inline-block text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: '#FC3F1A' } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E03515';
                e.currentTarget.style.opacity = '0.95';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FC3F1A';
                e.currentTarget.style.opacity = '1';
              }}
            >
              Join Us Now
            </a>
            <a
              href={`${baseUrl}/network`}
              className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore Our Network
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
