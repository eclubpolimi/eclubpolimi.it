import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import PropTypes from "prop-types";

import "./FlipCard.css";

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
    // frontText: front text below the image
    frontText: PropTypes.string,
    // backText: back text
    backText: PropTypes.string,
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
              }}
            ></div>
            <div className="card-front-text">{this.props.frontText}</div>
          </div>
          <div
            className="card-flip-content-back"
            style={{ backgroundColor: this.props.backgroundColor }}
          >
            <div className="card-back-title">{this.props.frontText}</div>
            <div className="card-back-text">{this.props.backText}</div>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}
