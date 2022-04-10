import React, { Component } from "react";
import PropTypes from "prop-types";
import "./InfoBar.css";
import {
  faCalendar,
  faMapMarkerAlt,
  faUsers,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class InfoBar extends Component {
  static propTypes = {
    // Object: ["place": String]
    info: PropTypes.object.isRequired,
    // Default selected tab (default: 0)
    default: PropTypes.number,
    // className: CSS classes to apply to the outer div
    className: PropTypes.string,
    // breakpoint: CSS class prefix (see Tailwind) that control when the layout changes to mobile friendly
    breakpoint: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  };

  static defaultProps = {
    breakpoint: "md",
    className: "w-full m-2",
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
      <div className={this.props.className}>
        <div className="text-center">
          <ul className="tabs-row">
            <li onClick={this.onTabClick}>
              <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
              <span>{this.props.info.place}</span>
            </li>
            <li onClick={this.onTabClick}>
              <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
              <span>{this.props.info.date}</span>
            </li>
            <li onClick={this.onTabClick}>
              <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
              <span>{this.props.info.peoples}</span>
            </li>
            <li onClick={this.onTabClick}>
              <FontAwesomeIcon icon={faTag}></FontAwesomeIcon>
              <span>{this.props.info.price}</span>
            </li>
            <li onClick={this.onTabClick} className="li-btn">
              <span>Registrati</span>
            </li>
            {/*
                        {this.props.tabs.map((item, index) => {
                            return (

                                <li
                                    key={index}
                                    value={index}
                                    className={`tab ${index === this.state.activeTab ? "selected" : ""
                                        }`}
                                    onClick={this.onTabClick}
                                >
                                    <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
        
                                    <span>{item.name}</span>
                                </li>
                            );
                        })}
                        */}
          </ul>
        </div>
      </div>
    );
  }
}
