import React from "react";

import LinkButton from "./LinkButton";

export default {
  component: LinkButton,
  title: "Components/LinkButton",
};

const Template = (args) => <LinkButton {...args}>Button</LinkButton>;

export const Primary = Template.bind({});

Primary.args = {
  theme: "normal",
};
