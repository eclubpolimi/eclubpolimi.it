import TeamMemberCard from '../../components/TeamMemberCard';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Team data organized by department
const teamData = {
  board: [
    {
      name: "Alessandro D. B.",
      role: "President",
      photo: "",
      quote: "If opportunity doesn't knock, build a door",
      author: "Milton Berle"
    },
    {
      name: "Gabriele D.",
      role: "Vice-President",
      photo: "",
      quote: "L'ingegno è vedere possibilità dove gli altri non ne vedono [Ingenuity is seeing possibilities where others see none]",
      author: "Enrico Mattei"
    },
    {
      name: "Lorenzo B.",
      role: "Treasurer",
      photo: "",
      quote: "We are who we choose to be.",
      author: "Green Goblin, from Spider-Man"
    },
    {
      name: "Serena T.",
      role: "Secretary",
      photo: "",
      quote: "The time is always right to do what is right",
      author: "Martin Luther King Jr"
    },
    {
      name: "Elena F.",
      role: "Public Relations",
      photo: "",
      quote: "You miss 100% of the shots you don't take",
      author: "Wayne Gretzky"
    }
  ],
  humanCapital: [
    {
      name: "Guadalupe R.",
      role: "Coordinator",
      photo: "",
      quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
      author: "Confucius"
    },
    {
      name: "Cleta O. L.",
      role: "Member",
      photo: "",
      quote: "I'm intimidated by the fear of being average",
      author: "Taylor Swift"
    },
    {
      name: "Daniel J. C.",
      role: "Member",
      photo: "",
      quote: "An Investment in knowledge pays the best interest.",
      author: "Benjamin Franklin"
    },
    {
      name: "Emanuele L. R.",
      role: "Member",
      photo: "",
      quote: "every day demands that extra step to go beyond the hedge and face the unknown",
      author: "myself"
    },
    {
      name: "Leonardo B.",
      role: "Member",
      photo: "",
      quote: "Make something people want",
      author: "Paul Graham"
    }
  ],
  events: [
    {
      name: "Claudia D.",
      role: "Coordinator",
      photo: "",
      quote: "The only way to fight against fleeting time is to live it intensely and draw from it quickly, like from a rushing torrent that will not flow forever.",
      author: "De Brevitate Vitae, Seneca"
    },
    {
      name: "Chris B.",
      role: "Member",
      photo: "",
      quote: "Ad Alta",
      author: "Family's coat of arms"
    },
    {
      name: "Amanda M.",
      role: "Member",
      photo: "",
      quote: "The only real failure is the failure to try",
      author: "Deborah Moggach"
    },
    {
      name: "Marco V.",
      role: "Member",
      photo: "",
      quote: "Carpe diem, quam minimum credula postero",
      author: "Orazio Flacco"
    },
    {
      name: "Stella A.",
      role: "Member",
      photo: "",
      quote: "Una buona pratica preliminare di qualunque altra è la pratica della meraviglia. Esercitarsi a non sapere e a meravigliarsi",
      author: "Chandra Candiani"
    },
    {
      name: "Arzum Ö.",
      role: "Member",
      photo: "",
      quote: "The people who are crazy enough to think they can change the world are the ones who do.",
      author: "Steve Jobs"
    },
    {
      name: "Maja M.",
      role: "Member",
      photo: "",
      quote: "If you want to win the race, you have to reach the goal first.",
      author: "Alan Ford"
    },
    {
      name: "Sharlotte G.",
      role: "Member",
      photo: "",
      quote: "Three words are important to me: inspiration, creation, and sharing.",
      author: "Agnès Varda"
    },
    {
      name: "Andrea D.",
      role: "Member",
      photo: "",
      quote: "I'm not a kid anymore. And I'm excited for all the amazing things to come.",
      author: "Paris Hilton"
    }
  ],
  corporate: [
    {
      name: "Greta S.",
      role: "Coordinator",
      photo: "",
      quote: "Don't wait for opportunity. Create it.",
      author: "George Bernard Shaw"
    },
    {
      name: "Francesco R.",
      role: "Member",
      photo: "",
      quote: "Stay Hungry, Stay Foolish",
      author: "Steve Jobs"
    },
    {
      name: "Stefano S.",
      role: "Member",
      photo: "",
      quote: "You better have a strategy, or you could be a statistic",
      author: "Michael Porter"
    },
    {
      name: "Leonardo A.",
      role: "Member",
      photo: "",
      quote: "L'angoscia è la vertigine della libertà",
      author: "Søren Kierkegaard"
    },
    {
      name: "Lucrezia B.",
      role: "Member",
      photo: "",
      quote: "What you think, you become. What you feel, you attract. What you imagine, you create.",
      author: "Buddha"
    },
    {
      name: "Leonardo B.",
      role: "Member",
      photo: "",
      quote: "Everything is energy, and that's all there is to it. Match the frequency of the reality you want, and you cannot help but get that reality",
      author: "Albert Einstein"
    },
    {
      name: "Riccardo C.",
      role: "Member",
      photo: "",
      quote: "Float like a butterfly, sting like a bee",
      author: "Muhammad Ali"
    }
  ],
  marketing: [
    {
      name: "Samuele R.",
      role: "Coordinator",
      photo: "",
      quote: "Carpe diem",
      author: "Horace"
    },
    {
      name: "Beatrice M.",
      role: "Member",
      photo: "",
      quote: "The future depends on what you do today",
      author: "Mahatma Gandhi"
    },
    {
      name: "Ahmad A.",
      role: "Member",
      photo: "",
      quote: "Pressure is a privilege",
      author: "Billie Jean King"
    },
    {
      name: "Himadri B. D.",
      role: "Member",
      photo: "",
      quote: "Risk comes from not knowing what you are doing",
      author: "Warren Buffet"
    },
    {
      name: "Gaia V.",
      role: "Member",
      photo: "",
      quote: "It is the goal of all to improve, advance, progress, grow",
      author: "Tony McNamara - Poor Things"
    },
    {
      name: "Viktor T.",
      role: "Member",
      photo: "",
      quote: "Vivamus moriendum est",
      author: "Seneca"
    },
    {
      name: "Cleta O. L.",
      role: "Member",
      photo: "",
      quote: "In the midst of chaos, there is also opportunity",
      author: "Sun Tzu"
    },
    {
      name: "Jessica L.",
      role: "Member",
      photo: "",
      quote: "Everyone knew it was impossible, until a fool who didn't know came along and did it.",
      author: "Albert Einstein"
    },
    {
      name: "Raffaele S.",
      role: "Member",
      photo: "",
      quote: "Make mistakes faster",
      author: "Andy Grove"
    }
  ],
  it: [
    {
      name: "Yuwei L.",
      role: "Coordinator",
      photo: "",
      quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      author: "Buddha"
    },
    {
      name: "Abransh B.",
      role: "Vice Coordinator",
      photo: "",
      quote: "A little life is worth a little pain",
      author: "me?"
    },
    {
      name: "Thanakorn T.",
      role: "Member",
      photo: "",
      quote: "Do great minds think alike or completely differently?",
      author: "HSBC"
    },
    {
      name: "Antonio R.",
      role: "Member",
      photo: "",
      quote: "Audantes fortuna iuvat",
      author: "Virgil"
    },
    {
      name: "Giuseppe M.",
      role: "Member",
      photo: "",
      quote: "I'm exactly where i need to be to become what i meant to be",
      author: "Giuseppe Musella"
    },
    {
      name: "Jose P. L.",
      role: "Member",
      photo: "",
      quote: "How little we dare considering how short life is",
      author: "Unknown"
    }
  ]
};

interface CarouselSectionProps {
  title: string;
  members: Array<{
    name: string;
    role: string;
    photo: string;
    quote: string;
    author?: string;
  }>;
}

function CarouselSection({ title, members }: CarouselSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true, // Enable infinite loop
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={scrollNext}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <TeamMemberCard
                name={member.name}
                role={member.role}
                photo={member.photo}
                quote={member.quote}
                author={member.author}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OurTeamSection() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our Team
          </h1>
        </div>

        {/* Mission Section with Image */}
        <div className="mb-20 animate-fade-in-delay">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image placeholder */}
            <div className="w-full h-96 bg-gradient-to-br from-[#2B5DAA] to-[#1e3a5f] rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
              <div className="text-white/30 text-center p-8">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                <p className="text-sm">Landscape image placeholder</p>
                <p className="text-xs mt-2">Replace with actual team photo</p>
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="space-y-8">
              {/* Introductory text without title */}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We are a student-driven association dedicated to fostering entrepreneurship, innovation, and collaboration within our university and beyond.
              </p>

              {/* Our Mission section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our core mission is to create impactful opportunities for students by organizing high-quality events—from intimate networking sessions to large-scale gatherings. As an active part of Milan's entrepreneurial ecosystem, we bridge the gap between aspiring founders, industry leaders, and like-minded university clubs. Through strategic partnerships and cross-border collaborations, we are expanding our reach across Europe to empower the next generation of innovators and changemakers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* E-Club Teams Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            E-Club Teams
          </h2>
        </div>

        {/* Team Sections with Carousels */}
        <div className="space-y-16">
          <CarouselSection title="Board" members={teamData.board} />
          
          <CarouselSection 
            title="Human Capital and Internal Processes" 
            members={teamData.humanCapital} 
          />
          
          <CarouselSection 
            title="Events" 
            members={teamData.events} 
          />
          
          <CarouselSection 
            title="Corporate and External Relationships" 
            members={teamData.corporate} 
          />
          
          <CarouselSection title="Marketing" members={teamData.marketing} />
          
          <CarouselSection 
            title="Information Technology" 
            members={teamData.it} 
          />
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in-delay-3">
          <div className="bg-gradient-to-br from-[#2B5DAA] to-[#1e3a5f] dark:from-[#1a2942] dark:to-[#0d1829] rounded-2xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our mission. 
              Be part of something bigger.
            </p>
            <a
              href="/join"
              style={{ backgroundColor: '#FC3F1A' }}
              className="inline-block text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:opacity-90"
            >
              Join E-Club Polimi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
