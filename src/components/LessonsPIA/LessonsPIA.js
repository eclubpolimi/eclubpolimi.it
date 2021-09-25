import React, { Component } from "react";
import PropTypes from "prop-types";
import "./LessonsPIA.css";

export default class LessonsPIA extends Component {
  static propTypes = {
    //arrLessons: Array of PIA Lessons
    arrLessons: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  };

  constructor(props) {
    super(props);
    this.state = { activeTabID: this.props.arrLessons[0].id };
  }

  //to change the state of a button based on the click
  changeTab = (tabID) => {
    this.setState({ activeTabID: tabID });
  };

  render() {
    const activeTab = this.props.arrLessons[this.state.activeTabID - 1];
    return (
      <div>
        {/* External div */}
        <div className="lessons-pia-tabs">
          <h1 className="lessons-pia-title">Lezioni</h1>
          {/* to set up all the buttons */}
          <TabButtons
            activeTabID={this.state.activeTabID}
            changeTabFunc={this.changeTab}
            arrLessons={this.props.arrLessons}
          />
          {/* to define the lesson content of the selected button */}
          <div className="lessons-pia-tab-content">
            <div label={activeTab.name}>
              <div>
                <h2>{activeTab.name}</h2>
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

const TabButtons = ({ changeTabFunc, activeTabID, arrLessons }) => {
  return (
    <div className="lessons-pia-tab-buttons">
      {/* to map all the lessons to their correspondig button */}
      {arrLessons.map((lesson) => {
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
