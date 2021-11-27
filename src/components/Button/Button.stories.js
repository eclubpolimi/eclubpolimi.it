import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});

Primary.args = {
  theme: "normal",
};
