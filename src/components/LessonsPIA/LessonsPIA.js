import React, { Component } from "react";
import PropTypes from "prop-types";
import "./LessonsPIA.css";

import TabSelector from "components/TabSelector";
import Lesson from "./Lesson";

export default class LessonsPIA extends Component {
  static propTypes = {
    // lessons: array of lessonData (see Lesson.js)
    lessons: PropTypes.array.isRequired,
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
  };

  render() {
    const tabs = this.props.lessons.map((lesson) => {
      return {
        name: lesson.name,
        content: <Lesson lessonData={lesson} />,
      };
    });

    return (
      <div className={this.props.className}>
        <TabSelector tabs={tabs} />
      </div>
    );
  }
}
