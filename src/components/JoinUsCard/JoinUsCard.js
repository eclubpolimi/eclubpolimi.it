import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button } from "components/Button";
import "./JoinUsCard.css";

export default class JoinUsCard extends Component {
  static propTypes = {
    // role: name of the eclub position
    role: PropTypes.string,
    // height: height expressed in px
    height: PropTypes.number,
    // width: width expressed in px
    width: PropTypes.number,
    // advantages: advantages on applying
    advantages: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    return (
      <div
        className="join-card-container"
        style={{ height: this.props.height, width: this.props.width }}
      >
        <div className="join-card-text-container">
          <h1 className="join-card-title">{this.props.role}</h1>
          <ul className="join-card-list">
            {this.props.advantages.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
        </div>
        <Button theme="normal">
          {this.props.closed ? "Closed" : "Apply Now!"}
        </Button>
      </div>
    );
  }
}
