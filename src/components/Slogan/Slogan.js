import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Slogan extends Component {
  static propTypes = {
    slogan: PropTypes.array,
  };

  render() {
    return (
      <div className="bg-main-colors-blue py-8 flex flex-col items-center">
        <div>
          {this.props.slogan.map((text, index) => (
            <div
              className={`font-bold text-white p-5 ml-0 lg:ml-${
                index * 40
              } sm:ml-${index * 10}`}
            >
              <p className="text-xl sm:text-2xl md:text-4xl">{text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
