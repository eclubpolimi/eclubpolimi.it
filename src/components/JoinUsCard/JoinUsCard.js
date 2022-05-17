import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "components/Button";

export default class JoinUsCard extends Component {
  static propTypes = {
    // role: name of the eclub position
    role: PropTypes.string,
    // height: height expressed in px
    height: PropTypes.string,
    // width: width expressed in px
    width: PropTypes.string,
    // advantages: advantages on applying
    advantages: PropTypes.arrayOf(PropTypes.string).isRequired,
    // closed: whether applications are open or not
    closed: PropTypes.bool,
    // to: target link when the button is pressed
    to: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div
        className="bg-white rounded-md shadow-lg p-5 flex flex-col justify-between items-center"
        style={{ height: this.props.height, width: this.props.width }}
      >
        <div className="mx-6">
          <h2 className="md:text-center">{this.props.role}</h2>
          <ul className="list-disc">
            {this.props.advantages.map((pro, index) => (
              <li className="my-2 text-sm" key={index}>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <Button theme="orange" to={this.props.to} disabled={this.props.closed}>
          {this.props.closed ? "Closed" : "Apply Now!"}
        </Button>
      </div>
    );
  }
}
