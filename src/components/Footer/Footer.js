import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default class Hero extends Component {
  propTypes = {
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
      <div class="footer bg-blue">
        <div class="footer-content">
          <img class="footer-logo" src={this.props.organizationLogo} alt="Logo" />
          <div class="footer-social">
            <div className="footer-social-icon footer-facebook">
              <a href={this.props.facebookUrl} target="_blank">
                <FontAwesomeIcon size="3x" icon={faFacebookSquare} />
              </a>
            </div>
            <div className="footer-social-icon footer-instagram">
              <a href={this.props.instagramUrl} target="_blank">
                <FontAwesomeIcon size="3x" icon={faInstagramSquare} />
              </a>
            </div>
            <div className="footer-social-icon footer-linkedin">
              <a href={this.props.linkedinUrl} target="_blank">
                <FontAwesomeIcon size="3x" icon={faLinkedin} />
              </a>
            </div>
          </div>
          <img class="footer-logo" src={this.props.polimiLogo} alt="Logo" />
        </div>
        <div class="footer-copyright">
          Copyright © 2021 - 2021 {this.props.copyrightName}. All rights
          reserved.
        </div>
      </div>
    );
  }
}
