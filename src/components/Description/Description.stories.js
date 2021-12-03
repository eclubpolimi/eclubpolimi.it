import React from "react";

import Description from "./Description";

export default {
  component: Description,
  title: "Components/Description",
};

const Template = (args) => (
  <Description {...args}>
    <p>Testo di prova.</p>
  </Description>
);

export const Primary = Template.bind({});

Primary.args = {
  title: "Title",
};
