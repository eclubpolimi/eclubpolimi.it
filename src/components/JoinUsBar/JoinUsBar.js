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

  const getTitle = () => {
    return title || "Become one of us!";
  };

  const getButtonText = () => {
    return buttonText || "Join us";
  };

  return (
    <div
      className={`bg-${color} ${className} flex flex-col gap-6 py-12 justify-center items-center`}
    >
      <h1 className="text-white">{getTitle()}</h1>
      <Button to={to} theme={getButtonColor()}>
        {getButtonText()}
      </Button>
    </div>
  );
};

export default JoinUsbar;
