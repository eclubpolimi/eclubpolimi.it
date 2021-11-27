import React, { Component } from "react";
import PropTypes from "prop-types";

import { LinkButton } from "components/Button";
import "./JoinUsBar.css";

export default class JoinUsBar extends Component {
  static propTypes = {
    // color: background color
    color: PropTypes.oneOf(["orange", "blue", "white"]),
    // to: target to navigate to when the button is clicked
    to: PropTypes.string.isRequired,
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
  };

  static defaultProps = {
    color: "orange",
    className: "",
  };

  getButtonColor = () => {
    return (
      {
        orange: "light",
        blue: "light",
        white: "normal",
      }[this.props.color] || "normal"
    );
  };

  render() {
    return (
      <div
        className={`join-us-bar bg-${this.props.color} ${this.props.className}`}
      >
        <h1 className="jsb-call-to-action">Become one of us!</h1>
        <LinkButton to={this.props.to} theme={this.getButtonColor()}>
          Join us
        </LinkButton>
      </div>
    );
  }
}
