import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Sponsors from 'components/Sponsors/Sponsors';
import {
  InteractiveSectionGroup,
  InteractiveSection,
} from 'components/InteractiveSection/InteractiveSection';
import { useSponsors, useImageAsset } from 'hooks/useImageAssets';

type FooterProps = {
  logo: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  copyrightName: string;
  showSponsors?: boolean;
};

const Footer = ({
  logo,
  facebookUrl,
  instagramUrl,
  linkedinUrl,
  copyrightName,
  showSponsors = false,
}: FooterProps) => {
  const sponsors = useSponsors();
  const logoWhite = useImageAsset('branding_logo_white');

  return (
    <div>
      {/* Sponsors Section */}
      {showSponsors && (
        <div className="bg-ec_background dark:bg-ec_background_darkmode transition-colors duration-300">
          <Sponsors
            className="max-w-screen-lg lg:mx-auto px-5 lg:px-0 py-16"
            logos={sponsors}
          />
        </div>
      )}

      {/* Footer Main Section */}
      <div className="flex flex-col items-center p-2 pb-6 bg-ec_blue dark:bg-ec_blue_darkmode transition-colors duration-300">
        {/* Flex Container for Logo & Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-screen-lg p-3">
          {/* Logo Section */}
          <div className="text-center lg:text-left w-full lg:w-1/2 flex flex-col items-center">
            <Image
              className="w-auto h-48"
              src={logoWhite?.url || logo}
              alt="Entrepreneurship Club Polimi"
              width={240}
              height={240}
            />
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center w-full lg:w-1/2 mt-6 lg:mt-0">
            <h2 className="text-ec_text_darkmode text-lg font-semibold text-center lg:text-left">
              Contact Us
            </h2>
            <InteractiveSectionGroup
              rememberZIndex={false}
              defaultScaleLevel="medium"
            >
              <div className="flex space-x-6 mt-3">
                <InteractiveSection
                  sectionId="instagram"
                  elementType="image"
                  className="inline-block"
                >
                  <a href={instagramUrl} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      className="text-ec_text_darkmode"
                      size="3x"
                      icon={faInstagramSquare}
                    />
                  </a>
                </InteractiveSection>
                <InteractiveSection
                  sectionId="linkedin"
                  elementType="image"
                  className="inline-block"
                >
                  <a href={linkedinUrl} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      className="text-ec_text_darkmode"
                      size="3x"
                      icon={faLinkedin}
                    />
                  </a>
                </InteractiveSection>
                <InteractiveSection
                  sectionId="facebook"
                  elementType="image"
                  className="inline-block"
                >
                  <a href={facebookUrl} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      className="text-ec_text_darkmode"
                      size="3x"
                      icon={faFacebookSquare}
                    />
                  </a>
                </InteractiveSection>
                <InteractiveSection
                  sectionId="email"
                  elementType="image"
                  className="inline-block"
                >
                  <a
                    href="mailto:info@eclubpolimi.it"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="text-ec_text_darkmode"
                      size="3x"
                      icon={faEnvelope}
                    />
                  </a>
                </InteractiveSection>
              </div>
            </InteractiveSectionGroup>
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
