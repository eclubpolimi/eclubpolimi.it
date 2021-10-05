import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Sponsors.css";
//array che contiene le immagini degli sponsor

export default class Sponsors extends Component {
  static propTypes = {
    // arrLogos: Array of images
    arrLogos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  };

  render() {
    return (
      <div className="sponsor-component">
        <div className="sponsor-title"> Sponsored By </div>
        <div className="sponsor-table">
          {this.props.arrLogos.map((el) => (
            <div className="sponsor-column">
              <img src={el.src} href={el.href} alt={el.alt}></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
