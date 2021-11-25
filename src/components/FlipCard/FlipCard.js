import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./FlipCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faEnvelope,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default class FlipCard extends Component {
  propTypes = {
    // backgroundColor: expressed in HEX
    backgroundColor: PropTypes.string,
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
      linkedIn: PropTypes.string,
      Instagram: PropTypes.string,
    }),
  };

  state = {
    isFlipped: false,
  };

  flipCard = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    return (
      // TODO: handle mobile tapping
      <div
        className="card"
        style={{
          height: this.props.height,
          width: this.props.width,
        }}
        onMouseEnter={(e) => this.flipCard(e)}
        onMouseLeave={(e) => this.flipCard(e)}
      >
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          <div
            className="card-flip-content"
            style={{ backgroundColor: this.props.backgroundColor }}
          >
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${this.props.frontImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "4px 4px 0 0",
              }}
            ></div>
            <div className="card-front-text">
              {this.props.cardText.nameSurname}
            </div>
          </div>
          <div
            className="card-flip-content-back"
            style={{ backgroundColor: this.props.backgroundColor }}
          >
            <div className="card-back-title">
              {this.props.cardText.nameSurname}
            </div>
            <div className="card-back-text">
              <div className="card-back-role">{this.props.cardText.role}</div>
              <div className="card-back-quote">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size="3x"
                  color={this.props.cardText.marksColor}
                />
                <div className="card-back-quote-text">
                  {this.props.cardText.quote}
                </div>
              </div>
              <div className="card-back-quote-author">
                {this.props.cardText.quoteAuthor}
              </div>
              <div className="card-back-contacts">
                <div className="card-back-contacts-icon">
                  <Link to="#">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="3x"
                      color="#b2bfcc"
                    />
                  </Link>
                </div>
                <div className="card-back-contacts-icon">
                  <Link to="#">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="3x"
                      color="#b2bfcc"
                    />
                  </Link>
                </div>
                <div className="card-back-contacts-icon">
                  <Link to="#">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      size="3x"
                      color="#b2bfcc"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}
