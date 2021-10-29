import React from "react";

import DescriptionPIA from "./DescriptionPIA";

import "common.css";
import SiteData from "Data";

export default {
  component: DescriptionPIA,
  title: "Components/DescriptionPIA",
};

export const Primary = () => (
  <DescriptionPIA descriptionPIA={SiteData.DescriptionPIA} />
);
