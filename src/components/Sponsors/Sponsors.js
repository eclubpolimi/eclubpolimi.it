import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "./Sponsors.css";
//array che contiene le immagini degli sponsor
const arr = [
  { src: "", href: "", alt: "" },
  { src: "", href: "", alt: "" },
];

export default class Sponsors extends Component {
  render() {
    return (
      <div className="sponsor-row">
        <div className="sponsor-row"> Sponsored By </div>
        {arr.forEach((el) => (
          <div className="sponsor-column">
            <image src={el.src} href={el.href} alt={el.alt}>
            </image>
          </div>
        ))}
      </div>
    );
  }
}
