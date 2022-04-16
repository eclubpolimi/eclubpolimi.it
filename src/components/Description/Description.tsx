import React from "react";

type DescriptionProps = {
  title: string;
  children: React.ReactNode;
};

const Description = ({ title, children }: DescriptionProps) => {
  return (
    <div className="py-16">
      <h1 className="md:text-center mb-5">{title}</h1>
      {children}
    </div>
  );
};

export default Description;
