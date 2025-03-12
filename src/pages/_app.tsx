import { useEffect } from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import SiteData from 'Data';
import './_app.css';

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
    </div>
  );
};

export default MyApp;
