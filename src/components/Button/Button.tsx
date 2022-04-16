import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

type ButtonProps = {
  to: string,
  onClick?: () => void;
  forceAnchor?: boolean;
  theme?: "orange" | "light" | "dark";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  to,
  onClick = () => {},
  forceAnchor = false,
  theme = "orange",
  disabled,
  className = "",
  children,
}: ButtonProps) => {
  const styles = `btn btn--${theme}${
    disabled ? " btn--disabled" : ""
  } ${className} font-medium`;

  if (!to || disabled) {
    return (
      <button className={styles} onClick={onClick} disabled>
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
