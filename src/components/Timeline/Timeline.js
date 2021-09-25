import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Timeline.css";

export default class Timeline extends Component {
  static propTypes = {
    // the timeline graphical style: basic | split | centered
    style: PropTypes.oneOf(["basic", "split", "centered"]),
    // an array containing the list of events
    data: PropTypes.array.isRequired,
  };

  getStyle() {
    switch(this.props.style) {
      case "centered":
        return "timeline-centered";
      case "basic":
        return "";
      case "split":
      default:
        return "timeline-split";
    }
  }

  render() {
    return(
      <ul className={`timeline ${this.getStyle()}`}>
        {this.props.data.map((item) => {
          return (
            <li className="timeline-item">
              <div className="timeline-info">
                <span>{item.date}</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}