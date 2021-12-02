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
  };

  render() {
    return (
      <div
        className="bg-white rounded-md shadow-lg p-5 flex flex-col justify-between items-center"
        style={{ height: this.props.height, width: this.props.width }}
      >
        <div className="mx-6">
          <h1 className="text-center">{this.props.role}</h1>
          <ul className="list-disc">
            {this.props.advantages.map((pro, index) => (
              <li className="my-2 text-xs" key={index}>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <Button theme="orange" disabled={this.props.closed}>
          {this.props.closed ? "Closed" : "Apply Now!"}
        </Button>
      </div>
    );
  }
}
