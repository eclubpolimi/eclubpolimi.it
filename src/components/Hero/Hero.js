import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Hero.css";

export default class Hero extends Component {
  // Props description
  static propTypes = {
    // backgroundImage: imported background image
    backgroundImage: PropTypes.string,
    // height: height of hero component
    height: PropTypes.string,
    // darkness: darkness of the background (expressed in percentage from 0 to 1)
    darkness: PropTypes.number,
    // contentType: can be "logo" or "text" based on content type
    contentType: PropTypes.string,
    // text: (optional) text inside hero
    text: PropTypes.string,
    // logo: imported logo image
    logo: PropTypes.any,
    // logoWidth: width of the logo
    logoWidth: PropTypes.string,
    // alignTop
    alignTop: PropTypes.bool,
  };

  render() {
    return (
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,${this.props.darkness}), rgba(0,0,0,${this.props.darkness})), url(${this.props.backgroundImage})`,
          height: this.props.height,
          ...(!this.props.alignTop && { backgroundPosition: "center" }),
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {this.props.contentType === "text" ? (
          <div className="hero-text">{this.props.text}</div>
        ) : (
          <img
            style={{ width: this.props.logoWidth, aspectRatio: 1 }}
            className="hero-logo"
            src={this.props.logo}
            alt=""
          />
        )}
      </div>
    );
  }
}
