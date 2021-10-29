import React, { Component } from "react";
import PropTypes from "prop-types";
import "./LessonsPIA.css";

export default class LessonsPIA extends Component {
  static propTypes = {
    //lessons: Array of PIA Lessons
    lessons: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  };

  constructor(props) {
    super(props);
    this.state = { activeTabID: props.lessons[0].id };
  }

  //to change the state of a button based on the click
  changeTab = (tabID) => {
    this.setState({ activeTabID: tabID });
  };

  render() {
    const activeTab = this.props.lessons[this.state.activeTabID - 1];
    return (
      <div>
        {/* External div */}
        <div className="lessons-pia-banner">Lezioni</div>
        <div className="lessons-pia-tabs">
          {/* to set up all the buttons */}
          <TabButtons
            activeTabID={this.state.activeTabID}
            changeTabFunc={this.changeTab}
            lessons={this.props.lessons}
          />
          {/* to define the lesson content of the selected button */}
          <div className="lessons-pia-tab-content md:px-10">
            <div label={activeTab.name}>
              <div>
                <div className="lessons-pia-title">{activeTab.title}</div>
                <div className="lessons-pia-description-container">
                  <div className="lessons-pia-image">
                    <img
                      src={activeTab.image}
                      alt={activeTab.alt}
                      width="100%"
                      height="100%"
                    ></img>
                  </div>
                  <div className="lessons-pia-description">
                    {activeTab.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> /* End external div */
    );
  }
}

const TabButtons = ({ changeTabFunc, activeTabID, lessons }) => {
  return (
    <div className="lessons-pia-tab-buttons">
      {/* to map all the lessons to their correspondig button */}
      {lessons.map((lesson) => {
        return (
          <button
            className={
              lesson.id === activeTabID
                ? "lessons-pia-active"
                : "lessons-pia-inactive"
            }
            onClick={() => changeTabFunc(lesson.id)}
          >
            {lesson.name}
          </button>
        );
      })}
    </div>
  );
};
