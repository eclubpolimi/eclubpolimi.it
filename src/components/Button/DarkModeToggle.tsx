import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const darkModeEnabled = savedTheme === 'dark';

      setIsDarkMode(darkModeEnabled);

      if (darkModeEnabled) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      const newDarkMode = !isDarkMode;
      setIsDarkMode(newDarkMode);

      if (newDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  };

  return (
    <div className="flex items-center">
      {/* Toggle Switch */}
      <div
        className="relative w-14 h-7 rounded-full bg-gray-500 dark:bg-gray-600 cursor-pointer transition-colors flex items-center px-1"
        onClick={toggleDarkMode}
      >
        {/* Moon Icon (Right) */}
        <MoonIcon
          className="h-5 w-5 text-gray-600 dark:text-gray-200 absolute right-1 transition-opacity duration-300"
          style={{ opacity: isDarkMode ? 1 : 0.3 }}
        />

        {/* Sun Icon (Left) */}
        <SunIcon
          className="h-5 w-5 text-yellow-400 absolute left-1 transition-opacity duration-300"
          style={{ opacity: isDarkMode ? 0.3 : 1 }}
        />

        {/* Moving Knob */}
        <div
          className={`absolute w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transition-transform duration-300 ${
            isDarkMode ? 'translate-x-0' : 'translate-x-7'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
