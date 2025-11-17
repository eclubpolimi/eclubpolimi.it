import { useState } from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  photo: string;
  quote: string;
  author: string;
}

export default function TeamMemberCard({ name, role, photo, quote, author }: TeamMemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-96 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Front of card */}
      <div
        className={`absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-center justify-center ${
          isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="w-32 h-32 mb-6 rounded-full overflow-hidden bg-gradient-to-br from-[#2B5DAA] to-[#1e3a5f] flex items-center justify-center shadow-lg">
          {photo ? (
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-4xl text-white">👤</span>
          )}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
          {name}
        </h3>
        <p className="text-lg font-medium text-[#2B5DAA] dark:text-[#4A90E2] text-center">
          {role}
        </p>
        <div className="mt-6 text-gray-400 dark:text-gray-500 text-sm">
          Hover or click for more
        </div>
      </div>

      {/* Back of card */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#2B5DAA] to-[#1e3a5f] dark:from-[#1a2942] dark:to-[#0d1829] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center justify-center text-white ${
          isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg
          className="w-12 h-12 text-white/30 mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-lg text-center leading-relaxed italic font-light">
          "{quote}"
        </p>
        {author && (
          <div className="mt-6 text-sm font-medium opacity-70">
            — {author}
          </div>
        )}
      </div>
    </div>
  );
}
