import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
    <div className="footer bg-ec_blue">
      <div className="footer-content">
        <img className="footer-logo" src={logo} alt="Logo" />
        <div className="footer-social">
          <div className="footer-social-icon footer-facebook">
            <a href={facebookUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon size="3x" icon={faFacebookSquare} />
            </a>
          </div>
          <div className="footer-social-icon footer-instagram">
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon size="3x" icon={faInstagramSquare} />
            </a>
          </div>
          <div className="footer-social-icon footer-linkedin">
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon size="3x" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright © {new Date().getFullYear()} {copyrightName}. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
