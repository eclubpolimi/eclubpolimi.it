import React, { Component } from "react";
import "./Description.css";

const text="hello"

export default class Learn_Network_Build extends Component {
  render() {
    return (
      <div className="description_bar">
        <h1 className="description_title"> La nostra missione </h1>
        <p className="description_paragraph">
          {this.props.children} /* Passare testo */
        </p>
      </div>
    );
  }
}
