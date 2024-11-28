import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

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
  return (
    <div className="flex flex-col items-center p-2 pb-10 bg-ec_blue">
      <div className="p-5 flex flex-col items-center justify-center">
        <Image className="h-20" src={logo} alt="Logo" />
        <div className="flex flex-row">
          <div className="p-4">
            <a href={facebookUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                color="white"
                size="3x"
                icon={faFacebookSquare}
              />
            </a>
          </div>
          <div className="p-4">
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                color="white"
                size="3x"
                icon={faInstagramSquare}
              />
            </a>
          </div>
          <div className="p-4">
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon color="white" size="3x" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-white text-xs">
        Copyright © {new Date().getFullYear()} {copyrightName}. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
