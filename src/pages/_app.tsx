import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import SiteData from '@/Data';
import client from 'utils/apollo_client';
import './_app.css';
import DarkModeToggle from 'components/Button/DarkModeToggle';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Determine if sponsors should be shown based on current route
  const showSponsors =
    router.pathname === '/' || router.pathname === '/network';

  // Determine if footer should be enabled
  const footerEnabled = router.pathname !== '/join';

  return (
    <ApolloProvider client={client}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
        <div className="transition-colors duration-300">
          <Navbar items={SiteData.NavbarItems} />
          <main className="transition-colors duration-300">
            <Component {...pageProps} />
          </main>
          <Footer
            logo={SiteData.LogoWhite}
            copyrightName="E-Club Polimi"
            facebookUrl="https://www.facebook.com/eclubpolimi/"
            instagramUrl="https://www.instagram.com/eclubpolimi/"
            linkedinUrl="https://www.linkedin.com/company/eclubpolimi/"
            showSponsors={showSponsors}
            enabled={footerEnabled}
          />
        </div>
        <div className="fixed bottom-4 left-4 z-50 bg-ec_blue dark:bg-ec_blue_darkmode transition-colors duration-300 p-2 rounded-full shadow-lg sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
          <DarkModeToggle />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default MyApp;
