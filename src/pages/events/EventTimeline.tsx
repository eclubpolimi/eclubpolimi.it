import { baseUrl } from '../../lib/base-url';

interface Event {
  date: string;
  title: string;
  description: string;
  year: number;
  isoDate?: string | null;
}

interface EventTimelineProps {
  events: Event[];
}

export default function EventTimeline({ events }: EventTimelineProps) {
  const gradient = 'from-[#2B5DAA] to-[#1e3a5f]';
  const gradientOrange = 'from-[#FF7A18] to-[#FF3D00]';
  const accent = '#FC3F1A';

  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const upcomingEvents: Event[] = [];
  const pastEvents: Event[] = [];

  events.forEach((e) => {
    const d = e.isoDate ? new Date(e.isoDate) : null;
    const valid = d && !isNaN(d.getTime());
    if (valid && d.getTime() >= startOfToday.getTime()) {
      upcomingEvents.push(e);
    } else {
      pastEvents.push(e);
    }
  });

  const renderSection = (list: Event[], isUpcoming: boolean) => (
    <div className="relative pl-8 md:pl-0 space-y-12 md:space-y-20">
      {/* Mobile vertical line */}
      <div
        className={`md:hidden absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b ${isUpcoming ? gradientOrange : gradient} rounded-full`}
      />
      {list.map((event, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            key={`${event.title}-${index}`}
            className="relative md:grid md:grid-cols-[1fr_1fr] md:gap-8 min-h-[180px] pt-4"
          >
            {/* Center dot per event (desktop only) */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-2 z-10">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: accent,
                  boxShadow: '0 0 0 6px rgba(255,255,255,0.6)',
                }}
              />
            </div>

            {/* Mobile layout: stacked */}
            <div className="md:hidden relative space-y-3">
              <span
                className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold text-white shadow-md bg-gradient-to-r ${
                  isUpcoming ? gradientOrange : gradient
                }`}
              >
                {event.date}
              </span>
              <h4 className="text-xl font-bold text-slate-900">{event.title}</h4>
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-[10px]">
                <p className="text-slate-600 leading-relaxed">{event.description}</p>
              </div>
            </div>

            {/* Desktop layout: timeline with alternating sides */}
            <div className="hidden md:grid md:grid-cols-[1fr_1fr] md:gap-8 md:col-span-2">
              {/* Left column */}
              <div className="flex flex-col items-end md:pr-[15px]">
                {isLeft ? (
                  <span className={`px-5 py-2 rounded-full text-sm font-semibold text-white shadow-md bg-gradient-to-r ${isUpcoming ? gradientOrange : gradient} self-end`}>
                    {event.date}
                  </span>
                ) : (
                  <>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2 text-right md:mr-2">
                      {event.title}
                    </h4>
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-[10px] max-w-xl text-right">
                      <p className="text-slate-600 leading-relaxed">{event.description}</p>
                    </div>
                  </>
                )}
              </div>

              {/* Right column */}
              <div className="flex flex-col items-start md:pl-[15px]">
                {!isLeft ? (
                  <span className={`px-5 py-2 rounded-full text-sm font-semibold text-white shadow-md bg-gradient-to-r ${isUpcoming ? gradientOrange : gradient} self-start`}>
                    {event.date}
                  </span>
                ) : (
                  <>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2 text-left md:ml-2">
                      {event.title}
                    </h4>
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-[10px] max-w-xl text-left">
                      <p className="text-slate-600 leading-relaxed">{event.description}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="pb-20 px-4 md:px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        {/* <div className="text-center mb-16 px-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Our Events
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our journey through workshops, visits, and networking events.
          </p>
        </div> */}

        {/* Coming Soon banner (top) */}
        <div className="mb-16">
          <div className={`relative overflow-hidden rounded-2xl p-8 md:p-10 shadow-xl bg-gradient-to-r ${gradient}`}>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,#fff,transparent_40%)]" />
            <div className="relative z-10 text-center text-white">
              <div className="text-5xl md:text-6xl mb-4 leading-none">🚀</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">More events coming soon</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-6">
                Stay tuned for our next workshops and visits. Join E-Club to get first access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`${baseUrl}/join`}
                  className="inline-block text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-white/15 border border-white/25"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Mobile single vertical line */}
          <div className={`md:hidden absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b ${gradient} rounded-full`} />

          {upcomingEvents.length > 0 && (
            <div className="relative mb-16 pt-12">
              {/* Vertical line desktop only */}
              <div
                className={`hidden md:block absolute left-1/2 top-12 h-[calc(100%-12px)] w-1 bg-gradient-to-b ${gradient} rounded-full -translate-x-1/2`}
              />
              <div className="mb-8 text-center relative">
                <span className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-semibold text-white shadow-md bg-gradient-to-r from-[#FF7A18] to-[#FF3D00]">
                  Upcoming Events
                </span>
              </div>
              {renderSection(upcomingEvents, true)}
            </div>
          )}

          {pastEvents.length > 0 && (
            <div className="relative mt-16 pt-12">
              {/* Vertical line desktop only */}
              <div
                className={`hidden md:block absolute left-1/2 top-12 h-[calc(100%-12px)] w-1 bg-gradient-to-b ${gradient} rounded-full -translate-x-1/2`}
              />
              <div className="mb-8 text-center relative">
                <span className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-semibold text-white shadow-md bg-gradient-to-r from-[#1e3a5f] to-[#2B5DAA]">
                  Past Events
                </span>
              </div>
              {renderSection(pastEvents, false)}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-white rounded-2xl p-6 md:p-12 shadow-xl mx-2 md:mx-0 border border-slate-100">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
            Want to Attend Our Events?
          </h3>
          <p className="text-base md:text-xl text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Join E-Club Polimi to get exclusive access to all our events, workshops, and networking
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
            <a
              href={`${baseUrl}/join`}
              className="inline-block text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-gradient-to-r from-[#2B5DAA] to-[#1e3a5f]"
            >
              Join Us Now
            </a>
            <a
              href={`${baseUrl}/network`}
              className="inline-block bg-slate-100 text-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore Our Network
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
