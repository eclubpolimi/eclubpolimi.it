import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Button.css";

export default class Button extends Component {
  static propTypes = {
    // onClick: function to call when the button is clicked
    onClick: PropTypes.func,
    // theme: button style (normal, light, dark)
    theme: PropTypes.oneOf(["normal", "light", "dark"]),
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
  };

  static defaultProps = {
    theme: "normal",
    onClick: null,
    className: "",
  };

  render() {
    return (
      <button
        className={`btn btn--${this.props.theme} ${this.props.className}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
