import React, { Component } from "react";
import PropTypes from "prop-types";
import "./InfoBar.css";
import { faCalendar, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class InfoBar extends Component {
    static propTypes = {
        // Array of tabs: ["name": String]
        tabs: PropTypes.array.isRequired,
        // Default selected tab (default: 0)
        default: PropTypes.number,
        // className: CSS classes to apply to the outer div
        className: PropTypes.string,
        // breakpoint: CSS class prefix (see Tailwind) that control when the layout changes to mobile friendly
        breakpoint: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    };

    static defaultProps = {
        breakpoint: "md",
        className: "w-full",
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
                            <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
                            <span>{this.props.place}</span>
                        </li>
                        <li onClick={this.onTabClick}>
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                            <span>{this.props.date}</span>
                        </li>
                        <li onClick={this.onTabClick}>
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                            <span>{this.props.peoples}</span>
                        </li>
                        <li onClick={this.onTabClick}>
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                            <span>{this.props.price}</span>
                        </li>
                        <li onClick={this.onTabClick}>
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
