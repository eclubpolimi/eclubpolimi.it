import React from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/Button/Button';

const HiddenPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-ec_background dark:bg-ec_background_darkmode transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-ec_text dark:text-ec_text_darkmode transition-colors duration-300 mb-4">
          🔒 Hidden Page
        </h1>
        <p className="text-xl text-ec_text dark:text-ec_text_darkmode transition-colors duration-300 mb-4">
          This is a secret page that can only be accessed via direct URL.
        </p>
        <p className="text-ec_text_secondary dark:text-ec_text_secondary_darkmode transition-colors duration-300 mb-8">
          You found the hidden easter egg! 🎉
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Default Button (Custom styling with gradients on hover) */}
          <button
            className="px-6 py-3 rounded-xl font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 bg-black dark:bg-white text-white dark:text-black"
            onMouseEnter={(e) => {
              // Use light gradient in light mode, dark gradient in dark mode
              const isDarkMode =
                document.documentElement.classList.contains('dark');
              e.currentTarget.style.background = isDarkMode
                ? 'var(--orange-gradient-dark)'
                : 'var(--orange-gradient-light)';
              e.currentTarget.style.color = 'white'; // Text always white on gradient
            }}
            onMouseLeave={(e) => {
              // Reset to original colors
              const isDarkMode =
                document.documentElement.classList.contains('dark');
              e.currentTarget.style.background = isDarkMode ? 'white' : 'black';
              e.currentTarget.style.color = isDarkMode ? 'black' : 'white';
            }}
            onClick={() => router.push('/')}
          >
            Default Button
          </button>

          {/* Custom Button Component */}
          <Button variant="navigation" href="/">
            Custom Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HiddenPage;
