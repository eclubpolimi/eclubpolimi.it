import React from "react";

import HeroPIA from "./HeroPIA";

import "common.css";
import SiteData from "Data";

export default {
  component: HeroPIA,
  title: "Components/HeroPIA",
};

export const Primary = () => <HeroPIA heroPIA={SiteData.HeroPIA} />;
