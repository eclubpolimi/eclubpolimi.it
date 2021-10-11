import React from "react";
import Navbar from "./Navbar";

import SiteData from "./../../Data";
import "./../../common.css";

export default {
  component: Navbar,
  title: "Components/Navbar",
};

export const Primary = () => <Navbar items={SiteData.NavbarItems} />;
