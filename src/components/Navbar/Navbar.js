import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Navbar.css";
import SiteData from "Data";

export default class Navbar extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  /* items prop
  [
    {
      content: JSX object [<Link />, <Button />],
      type: oneOf["link", "button"],
    },
  ]
  */

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleMenu = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  closeMenu = () => {
    this.setState({ clicked: false });
  };

  render() {
    return (
      <nav className="navbar-items bg-blue">
        <Link to={SiteData.HomeTarget} className="navbar-logo">
          <img src={SiteData.LogoWhite} alt="Entrepreneurship Club Polimi" />
        </Link>
        <ul
          className={`nav-links bg-blue ${
            this.state.clicked ? "nav-active" : ""
          }`}
        >
          {this.props.items.map((item, index) => {
            if (!item.type) {
              console.error(
                `Navbar item ${index} has no type field! Rendering errors may occur, make sure to set a type for each navbar element.`
              );
            }
            return (
              <li key={index} className={`nav-${item.type}`}>
                {item.content}
              </li>
            );
          })}
        </ul>
        <svg
          className={`ham hamRotate ${this.state.clicked ? "nav-active" : ""}`}
          viewBox="0 0 100 100"
          onClick={this.handleMenu}
        >
          <path
            className="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path className="line middle" d="m 70,50 h -40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </nav>
    );
  }
}
