import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MainDescription extends Component {
  static propTypes = {
    image: PropTypes.string,
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="flex flex-col lg:flex-row items-center py-16">
        <div className="w-full sm:w-3/4 lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
          <img src={this.props.image} alt="main description logo" />
        </div>
        <div className="lg:w-1/2 text-justify">{this.props.children}</div>
      </div>
    );
  }
}
