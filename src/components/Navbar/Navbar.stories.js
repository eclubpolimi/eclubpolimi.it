import React from "react";
import Navbar from "./Navbar";

import SiteData from "Data";
import "common.css";

export default {
  component: Navbar,
  title: "Components/Navbar",
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  items: SiteData.NavbarItems,
};
