import React, { Component } from "react";
import PropTypes from "prop-types";
import "./DescriptionPIA.css";

export default class DescriptionPIA extends Component {
  static propTypes = {
    descriptionPIA: PropTypes.object,
  };

  render() {
    const descriptionPIA = this.props.descriptionPIA;
    return (
      <div>
        {/* External div */}
        <div className="description-pia-container">
          <div className="description-pia-title">{descriptionPIA.titlePIA}</div>
          <div className="description-pia-text">{descriptionPIA.textPIA}</div>
        </div>
      </div> /* End external div */
    );
  }
}
