import React from 'react';
import logo_white from '../logo_white.svg';

import './navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="bg-blue">
        <ul>
          <li><a href="."><img src={logo_white} alt="Entrepreneurship Club Polimi"/></a></li>
          <li><a className="nav-action" href="#About">About</a></li>
          <li><a className="nav-action" href="#Eventi">Eventi</a></li>
          <li><a className="nav-action" href="#Ospiti">Ospiti</a></li>
          <li><a className="nav-action" href="#Passion_in_action">Passion in action</a></li>
          <li><a className="nav-action" href="#News">News</a></li>
          <li><button className="button-joinus">Join us</button></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;