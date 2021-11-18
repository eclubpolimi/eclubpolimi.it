import React, { Component } from "react";
import PropTypes from "prop-types";
import "./LessonsPIA.css";

export default class Lesson extends Component {
  static propTypes = {
    // lessonData: contains this particular lesson's data
    lessonData: PropTypes.object,
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
  };

  /* lessonData prop
  {
    name: string,
    title: string,
    image: obj,
    alt: string,
    description: string,
  }
  */

  render() {
    return (
      <div className={this.props.className}>
        <div className="lessons-pia-title">{this.props.lessonData.title}</div>
        <div className="lessons-pia-description-container">
          <div className="lessons-pia-image">
            <img
              src={this.props.lessonData.image}
              alt={this.props.lessonData.alt}
              width="100%"
              height="100%"
            ></img>
          </div>
          <div className="lessons-pia-description">
            {this.props.lessonData.description}
          </div>
        </div>
      </div>
    );
  }
}
