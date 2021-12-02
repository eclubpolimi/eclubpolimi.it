import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Button.css";

export default class Button extends Component {
  static propTypes = {
    // to: link to navigate to when clicked. If this parameter is specified the button will be a <Link> tag
    to: PropTypes.string,
    // onClick: function to call when the button is clicked
    onClick: PropTypes.func,
    // theme: button style (orange, light, dark)
    theme: PropTypes.oneOf(["orange", "light", "dark"]),
    // disabled: whether the button is disabled or not
    disabled: PropTypes.bool,
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
  };

  static defaultProps = {
    theme: "orange",
    onClick: null,
    className: "",
  };

  render() {
    const styles = `btn btn--${this.props.theme}${
      this.props.disabled ? " btn--disabled" : ""
    } ${this.props.className}`;

    if (this.props.to === undefined) {
      return (
        <button
          className={styles}
          onClick={this.props.onClick}
          disabled={this.props.disabled}
        >
          {this.props.children}
        </button>
      );
    } else {
      return (
        <Link
          className={styles}
          to={this.props.disabled ? "#" : this.props.to}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </Link>
      );
    }
  }
}
