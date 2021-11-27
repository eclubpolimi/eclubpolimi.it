import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Button.css";

export default class LinkButton extends Component {
  static propTypes = {
    // to: link to navigate to when clicked
    to: PropTypes.string,
    // theme: button style (normal, light, dark)
    theme: PropTypes.oneOf(["normal", "light", "dark"]),
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
  };

  static defaultProps = {
    theme: "normal",
    className: "",
  };

  render() {
    return (
      <Link
        className={`btn--link btn--${this.props.theme} ${this.props.className}`}
        to={this.props.to}
      >
        {this.props.children}
      </Link>
    );
  }
}
