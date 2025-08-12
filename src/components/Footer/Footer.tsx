import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Sponsors from 'components/Sponsors';
import { useSponsors } from 'hooks/useImageAssets';
import SiteData from 'Data';

type FooterProps = {
  logo: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  copyrightName: string;
};

const Footer = ({
  logo,
  facebookUrl,
  instagramUrl,
  linkedinUrl,
  copyrightName,
}: FooterProps) => {
  const sponsors = useSponsors();
  
  return (
    <div>
      {/* Sponsors Section */}
      <div className="bg-ec_background dark:bg-ec_background_darkmode">
        <Sponsors
          className="max-w-screen-lg lg:mx-auto px-5 lg:px-0 py-16"
          logos={sponsors}
        />
      </div>

      {/* Footer Main Section */}
      <div className="flex flex-col items-center p-2 pb-10 bg-ec_blue dark:bg-ec_blue_darkmode">
        {/* Logo */}
        <Image className="h-40" src={logo} alt="Logo" />

        {/* Flex Container for Contact & Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full max-w-screen-lg p-5">
          {/* Contact Us Section */}
          <div className="text-center lg:text-left w-full lg:w-1/2 flex flex-col items-center">
            <h2 className="text-ec_text_darkmode text-lg font-semibold text-center lg:text-left">
              Have questions or want to reach out to us?
            </h2>
            <p className="text-ec_text_darkmode text-lg text-center lg:text-left">
              Contact us on: info@eclubpolimi.it
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center w-full lg:w-1/2 mt-6 lg:mt-0">
            <h2 className="text-ec_text_darkmode text-lg font-semibold text-center lg:text-left">
              Follow Us
            </h2>
            <div className="flex space-x-6 mt-3">
              <a href={facebookUrl} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="text-ec_text_darkmode"
                  size="3x"
                  icon={faFacebookSquare}
                />
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="text-ec_text_darkmode"
                  size="3x"
                  icon={faInstagramSquare}
                />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="text-ec_text_darkmode"
                  size="3x"
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-ec_text_darkmode text-xs mt-9 text-center">
          Copyright © {new Date().getFullYear()} {copyrightName}. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
