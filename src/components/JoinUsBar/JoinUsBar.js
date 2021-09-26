import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./JoinUsBar.css";

export default class JoinUsBar extends Component {
  render() {
    return (
      <div
        className={` join-us-bar ${
          this.props.color == "red" ? "bg-orange" : "bg-blue"
        }`}
      >
        <h1 className="JSB-call-to-action">Become one of us!</h1>
        <Link to="/JoinUs">
          <div
            className={`JSB-button ${
              this.props.color == "red" ? "JSB-white" : "bg-orange"
            }`}
          >
            Join us
          </div>
        </Link>
      </div>
    );
  }
}
