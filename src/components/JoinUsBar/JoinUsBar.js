import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./JoinUsBar.css";
export default class JoinUsBar extends Component {
  static propTypes = {
    color: PropTypes.string,
    link: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div
        className={`join-us-bar ${
          this.props.color === "red" ? "bg-orange" : "bg-blue"
        }`}
      >
        <h1 className="JSB-call-to-action">Become one of us!</h1>
        <Link to={this.props.link}>
          <div
            className={`JSB-button ${
              this.props.color === "red" ? "JSB-white" : "bg-orange"
            }`}
          >
            Join us
          </div>
        </Link>
      </div>
    );
  }
}
