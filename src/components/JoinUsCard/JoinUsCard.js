import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./JoinUsCard.css";

export default class JoinUsCard extends Component {
  propTypes = {
    // role: name of the eclub position
    role: PropTypes.string,
    // height: height expressed in px
    height: PropTypes.string,
    // width: width expressed in px
    width: PropTypes.string,
    // advantages: advantages on applying
    advantages: PropTypes.array,
  };
  render() {
    return (
      <div
        className="join-card-container"
        style={{ height: this.props.height, width: this.props.width }}
      >
        <div className="join-card-text">
            <h1 className="join-card-title">{this.props.role}</h1>
            <ul className="join-card-list">
            <li>{this.props.advantages}</li>
            </ul>
        </div>
        <div className="join-card-button-container">
            <div
            className={`${
                this.props.closed == true
                ? "join-card-closed-button"
                : "join-card-button"
            }`}
            >
            {this.props.closed == true ? "Closed"
                : "Apply Now!"
            }
            </div>
        </div>
      </div>
    );
  }
}
