import React from "react";

import Button from "components/Button";

const JoinUsbar = ({ title, color, buttonText, to, className }) => {
  const getButtonColor = () => {
    return (
      {
        orange: "light",
        blue: "orange",
        white: "orange",
      }[color] || "orange"
    );
  };

  const getTitleColor = () => {
    return {
      orange: "text-white",
      blue: "text-white",
    }[color];
  };

  const getTitle = () => {
    return title || "Become one of us!";
  };

  const getButtonText = () => {
    return buttonText || "Join us";
  };

  return (
    <div
      className={`bg-ec_${color} ${className} flex flex-col gap-6 py-12 justify-center items-center`}
    >
      <h2 className={getTitleColor()}>{getTitle()}</h2>
      <Button to={to} theme={getButtonColor()}>
        {getButtonText()}
      </Button>
    </div>
  );
};

export default JoinUsbar;
