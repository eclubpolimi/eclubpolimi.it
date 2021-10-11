import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TabSelector.css";

export default class TabSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTab: true,
      activeTab: this.props.tabs.length > 0 ? this.props.tabs[0] : [],
    };
  }

  static propTypes = {
    // Array of tabs (fields: "id" (from 0), "name", "content")
    tabs: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const changeTab = (index) => {
      if (index === this.state.activeTab.id) {
        this.setState((prevState) => ({
          ...prevState,
          showTab: !prevState.showTab,
        }));
      } else {
        this.setState((prevState) => ({
          activeTab: this.props.tabs[index],
          showTab: true,
        }));
      }
    };

    return (
      <div className="tab-selector-container">
        {this.props.tabs.map((tab, index) => (
          <div key={index}>
            <div className="tab-selector-btn" onClick={() => changeTab(index)}>
              {tab.name}
            </div>
            {tab.id === this.state.activeTab.id && this.state.showTab ? (
              <div className="tab-selector-content">{tab.content}</div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    );
  }
}
