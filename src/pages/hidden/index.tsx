import React from 'react';

const HiddenPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ec_background dark:bg-ec_background_darkmode">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-ec_text dark:text-ec_text_darkmode mb-4">
          🔒 Hidden Page
        </h1>
        <p className="text-xl text-ec_text dark:text-ec_text_darkmode mb-4">
          This is a secret page that can only be accessed via direct URL.
        </p>
        <p className="text-ec_text_secondary dark:text-ec_text_secondary_darkmode">
          You found the hidden easter egg! 🎉
        </p>
      </div>
    </div>
  );
};

export default HiddenPage;
