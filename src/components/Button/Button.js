import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = ({
  to = "#",
  onClick = null,
  forceAnchor = false,
  theme = "orange",
  disabled,
  className = "",
  children,
}) => {
  const styles = `btn btn--${theme}${
    disabled ? " btn--disabled" : ""
  } ${className} font-medium`;

  if (to === undefined) {
    return (
      <button className={styles} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  } else if (to[0] === "/" && !forceAnchor) {
    return (
      <Link className={styles} to={to} onClick={onClick}>
        {children}
      </Link>
    );
  } else {
    return (
      <a
        className={styles}
        href={to}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
};

export default Button;
