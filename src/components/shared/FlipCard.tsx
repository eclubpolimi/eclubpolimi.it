import { useState } from 'react';

interface FlipCardProps {
    keyword: string;
    description: string;
    bgColor: string;
    emoji?: string;
    image?: string;
}

export default function FlipCard({ keyword, description, bgColor, emoji, image }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-80 md:h-96 cursor-pointer perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className="relative w-full h-full">
                {/* Front Side */}
                <div
                    className={`absolute inset-0 rounded-xl shadow-lg transition-opacity duration-500 ease-in-out ${isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
                        } ${bgColor}`}
                >
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center gap-6">
                        <h3 className="text-white font-bold text-3xl">{keyword}</h3>
                        {image ? (
                            <div className="w-40 h-40 md:w-48 md:h-48">
                                <img
                                    src={image}
                                    alt={keyword}
                                    className="w-full h-full object-cover rounded-lg shadow-md"
                                />
                            </div>
                        ) : emoji ? (
                            <div className="text-6xl">{emoji}</div>
                        ) : null}
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className={`absolute inset-0 rounded-xl shadow-lg transition-opacity duration-500 ease-in-out ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        } bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700`}
                >
                    <div className="w-full h-full flex items-center justify-center p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                        <p className="text-gray-800 dark:text-gray-100 text-sm md:text-base leading-relaxed text-center">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Optional: Add custom scrollbar styles */}
            <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.7);
        }
        .dark .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(75, 85, 99, 0.7);
        }
        .dark .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(75, 85, 99, 0.9);
        }
      `}</style>
        </div>
    );
}
