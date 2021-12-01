import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default class SlideCard extends Component {
  static propTypes = {
    // frontImage: the image displayed on the front of the card above the text
    frontImage: PropTypes.any,
    // height: height expressed in px
    height: PropTypes.string,
    // width: width expressed in px
    width: PropTypes.string,
    // Text:
    cardText: PropTypes.shape({
      nameSurname: PropTypes.string,
      role: PropTypes.string,
      quote: PropTypes.string,
      quoteAuthor: PropTypes.string,
      marksColor: PropTypes.string,
      email: PropTypes.string,
      linkedinUrl: PropTypes.string,
      instagramUrl: PropTypes.string,
    }),
  };

  render() {
    return (
      // TODO: handle mobile tapping
      <div
        className="group m-4 relative flex flex-col items-center border-solid border-2 border-gray-100 rounded-lg shadow-xl overflow-hidden"
        style={{
          height: this.props.height,
          width: this.props.width,
        }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url(${this.props.frontImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "4px 4px 0 0",
          }}
        ></div>
        <div className="absolute bg-white bottom-0 left-0 right-0 w-full transition-height duration-500 h-20 group-hover:h-full overflow-hidden flex flex-col items-center">
          <div className="text-lg font-semibold pt-4">
            {this.props.cardText.nameSurname}
          </div>
          <div className="text-gray-400">{this.props.cardText.role}</div>

          <div className="p-8 relative h-full w-full">
            <div className="flex flex-row">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                size="2x"
                color={this.props.cardText.marksColor}
              />
              <div className="ml-2 text-xs">
                <div className="">{this.props.cardText.quote}</div>
                <div className="w-full  text-gray-400 text-left">
                  - {this.props.cardText.quoteAuthor}
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-evenly absolute bottom-0 right-0 left-0 pb-5">
              <Link to="#">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="transition duration-200 text-gray-300 hover:text-gray-500"
                />
              </Link>

              <Link to={this.props.cardText.instagramUrl}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="transition duration-200 text-gray-300 hover:text-gray-500"
                />
              </Link>

              <Link to={this.props.cardText.linkedinUrl}>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="2x"
                  className="transition duration-200 text-gray-300 hover:text-gray-500"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
