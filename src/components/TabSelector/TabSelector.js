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
    // breakpoint: CSS class prefix (see Tailwind) that control when the layout changes to mobile friendly
    breakpoint: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  };

  static defaultProps = {
    breakpoint: "md",
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab:
        props.default && props.default < props.tabs.length ? props.default : 0,
    };
  }

  onTabClick = (event) => {
    let intValue = parseInt(event.target.value);
    if (intValue !== this.state.activeTab) {
      this.setState({ activeTab: intValue });
    }
  };

  render() {
    return (
      <div className={this.props.class}>
        <div className="text-center">
          <ul className={`${this.props.breakpoint}:tabs-row`}>
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
          <select
            className={`${this.props.breakpoint}:tabs-select`}
            value={this.state.activeTab}
            onChange={this.onTabClick}
          >
            {this.props.tabs.map((item, index) => {
              return <option value={index}>{item.name}</option>;
            })}
          </select>
        </div>
        <div className="tab-content">
          {this.props.tabs[this.state.activeTab].content}
        </div>
      </div>
    );
  }
}
