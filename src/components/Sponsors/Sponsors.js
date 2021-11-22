import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Sponsors.css";

export default class Sponsors extends Component {
  static propTypes = {
    // logos: array of sponsor logo
    logos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
  };

  /* logos prop
  [
    {
      src: string,
      href: link,
      alt: string,
    },
  ]
  */

  render() {
    return (
      <div className={this.props.className}>
        <h2>Sponsors</h2>
        <div className="sponsor-grid">
          {this.props.logos.map((logo, index) => (
            <img
              className="sponsor-logo"
              src={logo.src}
              href={logo.href}
              alt={logo.alt}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
