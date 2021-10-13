import React from "react";
import Sponsors from "./Sponsors";
import SiteData from "Data";

import "common.css";

export default {
  component: Sponsors,
  title: "Components/Sponsors",
};

export const Primary = () => <Sponsors arrLogos={SiteData.Sponsors} />;
