import React from "react";
import Slogan from "./Slogan";
import SiteData from "Data";

import "common.css";

export default {
  component: Slogan,
  title: "Components/Slogan",
};

export const Primary = () => <Slogan slogan={SiteData.NetworkSlogan} />;
