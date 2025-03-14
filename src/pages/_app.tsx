import { useEffect } from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import SiteData from 'Data';
import './_app.css';
import DarkModeToggle from 'components/Button/DarkModeToggle';

type MyAppProps = {
  Component: any;
  pageProps: any;
};

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
      <Navbar items={SiteData.NavbarItems} />
      <Component {...pageProps} />
      <Footer
        logo={SiteData.LogoWhite}
        copyrightName="E-Club Polimi"
        facebookUrl="https://www.facebook.com/eclubpolimi/"
        instagramUrl="https://www.instagram.com/eclubpolimi/"
        linkedinUrl="https://www.linkedin.com/company/eclubpolimi/"
      />
      <div className="fixed bottom-4 left-4 z-50 bg-ec_blue dark:bg-ec_blue_darkmode p-2 rounded-full shadow-lg sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default MyApp;
