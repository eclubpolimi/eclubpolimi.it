import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  static propTypes = {
    // Logo of the footer
    logo: PropTypes.string,
    // Social URLs
    facebookUrl: PropTypes.string,
    instagramUrl: PropTypes.string,
    linkedinUrl: PropTypes.string,
    // Name of the organization
    copyrightName: PropTypes.string,
  };

  render() {
    return (
      <div className="footer bg-ec_blue">
        <div className="footer-content">
          <img className="footer-logo" src={this.props.logo} alt="Logo" />
          <div className="footer-social">
            <div className="footer-social-icon footer-facebook">
              <a href={this.props.facebookUrl} target="_blank" rel="noreferrer">
                <FontAwesomeIcon size="3x" icon={faFacebookSquare} />
              </a>
            </div>
            <div className="footer-social-icon footer-instagram">
              <a
                href={this.props.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon size="3x" icon={faInstagramSquare} />
              </a>
            </div>
            <div className="footer-social-icon footer-linkedin">
              <a href={this.props.linkedinUrl} target="_blank" rel="noreferrer">
                <FontAwesomeIcon size="3x" icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          Copyright © {new Date().getFullYear()} {this.props.copyrightName}. All
          rights reserved.
        </div>
      </div>
    );
  }
}
