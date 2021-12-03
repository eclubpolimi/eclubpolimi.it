import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Hero.css";

export default class Hero extends Component {
  // Props description
  static propTypes = {
    //backgroundType
    backgroundType: PropTypes.string,
    // backgroundImage: imported background image
    backgroundImage: PropTypes.string,
    // backgroundVideo: video link
    backgroundVideo: PropTypes.string,
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
  };

  render() {
    return (
      <div
        className={`hero relative overflow-hidden`}
        style={
          this.props.backgroundType === "video"
            ? { height: this.props.height }
            : {
                backgroundImage: `linear-gradient(rgba(0,0,0,${this.props.darkness}), rgba(0,0,0,${this.props.darkness})), url(${this.props.backgroundImage})`,
                height: this.props.height,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }
        }
      >
        {this.props.backgroundType === "video" && (
          <div>
            <div
              className={`absolute z-10 top-0 left-0 right-0 bottom-0 bg-black opacity-${
                this.props.darkness * 100
              }`}
            ></div>
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <video
                preload="auto"
                className="w-full filter relative -top-1/3"
                autoPlay="autoplay"
                loop="loop"
                muted="muted"
                playsInline
              >
                <source src={this.props.backgroundVideo}></source>
              </video>
            </div>
          </div>
        )}
        {this.props.contentType === "text" ? (
          <div className="z-20 hero-text">{this.props.text}</div>
        ) : (
          <img
            style={{ width: this.props.logoWidth, aspectRatio: 1 }}
            className="z-20 hero-logo"
            src={this.props.logo}
            alt=""
          />
        )}
      </div>
    );
  }
}
