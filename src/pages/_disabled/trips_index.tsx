import React from 'react';

const Travel = () => {
  // Temporarily disabled - return coming soon page
  return (
    <div className="w-full">
      <div className="md:mx-auto md:my-28 px-5 sm:px-8 py-4 md:py-0 max-w-6xl flex flex-col text-center items-center min-h-[400px] justify-center">
        <h1 className="text-ec_text dark:text-ec_text_darkmode font-extrabold text-4xl leading-tight mb-6">
          Travel
        </h1>
        <p className="text-ec_text_secondary dark:text-ec_text_secondary_darkmode text-xl mb-8">
          Coming Soon!
        </p>
        <p className="text-ec_text_secondary dark:text-ec_text_secondary_darkmode max-w-2xl">
          This page is currently under development. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

// DISABLED: Page moved to _disabled folder - comment out export to prevent access
// export default Travel;
