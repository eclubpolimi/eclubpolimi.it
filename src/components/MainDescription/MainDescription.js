import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MainDescription.css";

export default class MainDescription extends Component {
  static propTypes = {
    mainDescr: PropTypes.object,
  };

  render() {
    const mainDescr = this.props.mainDescriptions;
    return (
      <div>
        {" "}
        {/* External div */}
        <div className="main-description-container">
          <div className="main-description-logo-container">
            <div className="main-description-logo-icon">
              <img
                src={mainDescr.logo}
                alt="E-Club Polimi Icon"
                width="100%"
                height="100%"
              ></img>
            </div>
            <div className="main-description-title">
              {mainDescr.title0}
              <br />
              {mainDescr.title1}
              <br />
              {mainDescr.title2}
              <br />
            </div>
          </div>
          <div className="main-description-text-container">
            <div className="main-description-text">{mainDescr.text}</div>
          </div>
        </div>
      </div> /* End external div */
    );
  }
}
