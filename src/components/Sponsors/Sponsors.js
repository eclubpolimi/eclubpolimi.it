import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Sponsors extends Component {
  static propTypes = {
    // title
    title: PropTypes.string,
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
        <h1 className="md:text-center mb-5">
          {this.props.title ? this.props.title : "Sponsors"}
        </h1>
        <div className="flex flex-wrap items-center justify-center">
          {this.props.logos.map((logo, index) => (
            <a href={logo.href} key={index}>
              <img
                className="w-60 m-10"
                src={logo.src}
                alt={logo.alt}
                key={index}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }
}
