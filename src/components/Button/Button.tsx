import React from "react";

export type ButtonProps = {
  to: string;
  onClick?: () => void;
  forceAnchor?: boolean;
  theme?: "orange" | "light" | "dark";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Button = ({
  to,
  onClick = () => {},
  forceAnchor = false,
  theme = "orange",
  disabled,
  className = "",
  children,
}: ButtonProps) => {
  const styles = `rounded-xl py-2 px-6 inline cursor-pointer bg-ec_orange text-white hover:bg-ec_orange_hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ec_orange_hover ${className} font-medium`;

  if (!to || disabled) {
    return (
      <button className={styles} onClick={onClick} disabled>
        {children}
      </button>
    );
  } else if (to[0] === "/" && !forceAnchor) {
    return (
      <a className={styles} href={to} onClick={onClick}>
        {children}
      </a>
    );
  } else {
    return (
      <a
        className={styles}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
};

export default Button;
