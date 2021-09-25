import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ParagraphTitle.css";

export default class ParagraphTitle extends Component {
  static propTypes = {
    // text -> Paragraph Text
    text: PropTypes.string,
  };

  //text è il parametro per inserire il testo interno
  render() {
    return (
      <div className="paragraph-title-bar">
        <p className="paragraph-title-text">{this.props.text}</p>
      </div>
    );
  }
}
