import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MainDescription extends Component {
  static propTypes = {
    mainDescription: PropTypes.object,
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="flex flex-col lg:flex-row items-center py-20">
        <div className="w-3/4 lg:w-1/2 my-8 lg:mx-8">
          <img
            src={this.props.mainDescription.logo}
            alt="main description logo"
          />
        </div>
        <div className="lg:w-1/2 text-justify">
          {this.props.mainDescription.description}
        </div>
      </div>
    );
  }
}
