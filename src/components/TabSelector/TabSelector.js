import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TabSelector.css";

export default class TabSelector extends Component {
  static propTypes = {
    // Array of tabs: ["name": String]
    tabs: PropTypes.array.isRequired,
    // Default selected tab (default: 0)
    default: PropTypes.number,
    // class: CSS classes to apply to the outer div
    class: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab:
        props.default && props.default < props.tabs.length ? props.default : 0,
    };
  }

  onTabClick = (event) => {
    if (event.target.value !== this.state.activeTab) {
      this.setState({ activeTab: event.target.value });
    }
  };

  render() {
    return (
      <div className={this.props.class}>
        <div className="text-center">
          <ul className="tabs">
            {this.props.tabs.map((item, index) => {
              return (
                <li
                  value={index}
                  className={`tab ${
                    index === this.state.activeTab ? "active" : ""
                  }`}
                  onClick={this.onTabClick}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="tab-content">
          {this.props.tabs[this.state.activeTab].content}
        </div>
      </div>
    );
  }
}
