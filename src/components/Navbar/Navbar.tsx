import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import SiteData from "Data";

type NavBarProps = {
  items: Array<{ type: "link" | "button"; content: ReactNode }>;
};

const NavBar = ({ items }: NavBarProps) => {
  const [clicked, setClicked] = useState(false);

  const handleMenu = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <nav className="navbar-items bg-ec_blue">
      <Link
        to={SiteData.HomeTarget}
        className="navbar-logo"
        onClick={closeMenu}
      >
        <img src={SiteData.LogoWhite} alt="Entrepreneurship Club Polimi" />
      </Link>
      <ul className={`nav-links bg-ec_blue ${clicked ? "nav-active" : ""}`}>
        {items.map((item, index) => {
          if (!item.type) {
            console.error(
              `Navbar item ${index} has no type field! Rendering errors may occur, make sure to set a type for each navbar element.`
            );
          }
          return (
            <li key={index} className={`nav-${item.type}`} onClick={closeMenu}>
              {item.content}
            </li>
          );
        })}
      </ul>
      <div className="ham-container overflow-hidden">
        <svg
          className={`ham hamRotate ${clicked ? "nav-active" : ""}`}
          viewBox="0 0 100 100"
          onClick={handleMenu}
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
      </div>
    </nav>
  );
};

export default NavBar;
