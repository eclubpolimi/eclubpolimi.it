import React from "react";

type DescriptionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Description = ({ title, children, className = "" }: DescriptionProps) => {
  return (
    <div className={`py-16 ${className}`}>
      <h1 className="md:text-center mb-5">{title}</h1>
      {children}
    </div>
  );
};

export default Description;
