import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo_white from "../../assets/logo_white.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

export default class Navbar extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  state = {
    clicked: false,
  };

  handleMenu = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  closeMenu = () => {
    this.setState({ clicked: false });
  };

  render() {
    return (
      <nav className="navbar-items bg-blue">
        <h1 className="navbar-logo">
          <Link to="/">
            <img src={logo_white} alt="Entrepreneurship Club Polimi" />
          </Link>
        </h1>
        <ul
          className={`nav-links bg-blue ${this.state.clicked ? "active" : ""}`}
        >
          {this.props.items.map((item, index) => {
            return (
              <li key={index} className={item.type}>
                <Link to={item.target} onClick={this.closeMenu}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="menu-icon">
          {this.state.clicked ? (
            <FontAwesomeIcon icon={faTimes} onClick={this.handleMenu} />
          ) : (
            <FontAwesomeIcon icon={faBars} onClick={this.handleMenu} />
          )}
        </div>
      </nav>
    );
  }
}
