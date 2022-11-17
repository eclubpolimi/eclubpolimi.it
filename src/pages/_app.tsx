import Footer from "components/Footer";
import Navbar from "components/Navbar";
import SiteData from "Data";
import "./_app.css";

type MyAppProps = {
  Component: any;
  pageProps: any;
};
const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <>
      <Navbar items={SiteData.NavbarItems} />
      <Component {...pageProps} />
      <Footer
        logo={SiteData.LogoWhite}
        copyrightName="E-Club Polimi"
        facebookUrl="https://www.facebook.com/eclubpolimi/"
        instagramUrl="https://www.instagram.com/eclubpolimi/"
        linkedinUrl="https://www.linkedin.com/company/eclubpolimi/"
      />
    </>
  );
};

export default MyApp;
