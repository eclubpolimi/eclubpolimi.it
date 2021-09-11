import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Join_us_blue.css";


export default class Join_bar_blue extends Component {
  render() {
    return (
        <div className="join_us_bar">
            <h1 className="call_to_action">Become one of us!</h1>
            <Link to="/Home" className ="join_us_button">
              <button className="join_us_button">
              Join us
              </button>
            </Link>
        </div>
    );
  }
}
