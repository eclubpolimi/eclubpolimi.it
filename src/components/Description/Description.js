import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Description extends Component {
  static propTypes = {
    // title of this paragraph
    title: PropTypes.string,
  };
  render() {
    return (
      <div className="py-16">
        <h2 className="md:text-center mb-5">{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
