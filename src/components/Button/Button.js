import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Button.css";

export default class Button extends Component {
  static propTypes = {
    // to: link to navigate to when clicked.
    // if this prop is specified the button will be an <a> tag
    // if this prop contains a link beginning with '/' a <Link> tag will be used
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

    const to = this.props.disabled ? "#" : this.props.to;

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
    } else if (this.props.to[0] === "/") {
      return (
        <Link className={styles} to={to} onClick={this.props.onClick}>
          {this.props.children}
        </Link>
      );
    } else {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className={styles} href={to} onClick={this.props.onClick}>
          {this.props.children}
        </a>
      );
    }
  }
}
