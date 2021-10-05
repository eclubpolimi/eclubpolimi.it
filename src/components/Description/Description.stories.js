import React from "react";

import Description from "./Description";

export default {
  component: Description,
  title: "Components/Description",
};

const Template = (args) => <Description {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "This is a title",
  text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};
