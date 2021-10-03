import React from "react";

import JoinUsBar from "./JoinUsBar";
import "./../../common.css";

export default {
  component: JoinUsBar,
  title: "Components/JoinUsBar",
};

const Template = (args) => <JoinUsBar {...args} />

export const Primary = Template.bind({});

Primary.args = {
  color: "red"
}
