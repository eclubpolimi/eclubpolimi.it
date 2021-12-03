import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Description extends Component {
  static propTypes = {
    // title of this paragraph
    title: PropTypes.string,
    // text of this paragraph
    text: PropTypes.string,
  };
  render() {
    return (
      <div className="py-20">
        <h1 className="md:text-center">{this.props.title}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
