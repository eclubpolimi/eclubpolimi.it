import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Description.css";

export default class Description extends Component {
  static propTypes = {
    // title of this paragraph
    title: PropTypes.string,
    // text of this paragraph
    text: PropTypes.string,
  };
  render() {
    return (
      <div className="description-bar">
        <h1 className="description-title">{this.props.title}</h1>
        <p className="description-paragraph">{this.props.text}</p>
      </div>
    );
  }
}