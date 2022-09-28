import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Slogan extends Component {
  static propTypes = {
    slogan: PropTypes.array,
  };

  lgOffset = {
    0: "lg:ml-0",
    1: "lg:ml-40",
    2: "lg:ml-80",
  };

  smOffset = {
    0: "sm:ml-0",
    1: "sm:ml-10",
    2: "sm:ml-20",
  };

  render() {
    return (
      <div className="bg-ec_blue py-8 flex flex-col items-center">
        <div>
          {this.props.slogan.map((text, index) => (
            <div
              key={index}
              className={`font-bold text-white p-5 ml-0 ${this.lgOffset[index]} ${this.smOffset[index]}`}
            >
              <p className="text-2xl md:text-4xl">{text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
