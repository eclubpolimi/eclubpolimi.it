import { useState, useEffect } from 'react';

const TestPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-ec_background dark:bg-ec_background_darkmode transition-colors">
      <h1 className="text-4xl font-bold text-ec_text dark:text-ec_text_darkmode mb-8">
        Test Page - Light & Dark Mode Colors
      </h1>

      {/* Text Color Testing */}
      <div className="flex flex-wrap justify-center gap-6">
        <p className="p-4 bg-ec_grey dark:bg-ec_grey_darkmode text-ec_text dark:text-ec_text_darkmode rounded-lg shadow-md">
          This text switches between light and dark mode colors.
        </p>
      </div>

      {/* Shape & Border Testing */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {/* Blue Box */}
        <div className="w-40 h-40 bg-ec_blue dark:bg-ec_blue_darkmode text-white flex items-center justify-center rounded-lg shadow-lg">
          Blue Box
        </div>

        {/* Orange Box */}
        <div className="w-40 h-40 bg-ec_orange dark:bg-ec_orange_darkmode text-white flex items-center justify-center rounded-lg shadow-lg">
          Orange Box
        </div>

        {/* Orange Hover Box */}
        <div className="w-40 h-40 bg-ec_orange_hover dark:bg-ec_orange_hover_darkmode text-white flex items-center justify-center rounded-lg shadow-lg">
          Hover Orange
        </div>

        {/* Grey Box */}
        <div className="w-40 h-40 bg-ec_grey dark:bg-ec_grey_darkmode text-black dark:text-white flex items-center justify-center rounded-lg shadow-lg">
          Grey Box
        </div>

        {/* Background Box */}
        <div className="w-40 h-40 bg-ec_background dark:bg-ec_background_darkmode text-ec_text dark:text-ec_text_darkmode flex items-center justify-center rounded-lg shadow-lg border border-ec_border dark:border-ec_border_darkmode">
          Background
        </div>

        {/* Border Test Box */}
        <div className="w-40 h-40 bg-white dark:bg-black text-black dark:text-white flex items-center justify-center rounded-lg shadow-lg border border-ec_border dark:border-ec_border_darkmode">
          Border Test
        </div>
      </div>
    </div>
  );
};

export default TestPage;
