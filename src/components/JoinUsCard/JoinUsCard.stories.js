import React from "react";

import JoinUsCard from "./JoinUsCard";
import "./../../common.css";

export default {
  component: JoinUsCard,
  title: "Components/JoinUsCard",
};

const Template = (args) => <JoinUsCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  role: "Role",
  height: "300px",
  width: "250px",
  advantages: [""],
  label: "Join Us",
  closed: true,
};
