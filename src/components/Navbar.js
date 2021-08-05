import React from 'react'
import logo_white from '../logo_white.svg'

import './Navbar.css'

const MenuItems = [
  {
    title: "About",
    target: "#About",
    cName: "nav-link"
  },
  {
    title: "Eventi",
    target: "#Eventi",
    cName: "nav-link"
  },
  {
    title: "Ospiti",
    target: "#Ospiti",
    cName: "nav-link"
  },
  {
    title: "Passion in action",
    target: "#PiA",
    cName: "nav-link"
  },
  {
    title: "News",
    target: "#News",
    cName: "nav-link",
  },
]

class Navbar extends React.Component {
  state = { 
    clicked: false 
  }

  handleMenu = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  closeMenu = () => {
    this.setState({ clicked: false })
  }
  
  render() {
    return (
      <nav className="navbar-items bg-blue">
        <h1 className="navbar-logo"><a href="."><img src={logo_white} alt="Entrepreneurship Club Polimi"/></a></h1>
        <ul className={`nav-links bg-blue ${this.state.clicked ? "active" : ""}`}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <a href={item.target} onClick={this.closeMenu}>{item.title}</a>
              </li>
            )
          })}
          <li><button className="button-joinus">Join us</button></li>
        </ul>
        <div className="menu-icon"><i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} onClick={this.handleMenu}></i></div>
      </nav>
    )
  }
}

export default Navbar