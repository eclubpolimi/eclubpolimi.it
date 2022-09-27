import React from "react";

const Description = ({ title, children, className = "" }) => {
  return (
    <div className={`py-16 ${className}`}>
      <h2 className="md:text-center mb-5">{title}</h2>
      {children}
    </div>
  );
};

export default Description;
