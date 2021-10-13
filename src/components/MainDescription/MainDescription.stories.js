import React from "react";

import MainDescription from "./MainDescription";

import "common.css";
import SiteData from "Data";

export default {
  component: MainDescription,
  title: "Components/MainDescription",
};

export const Primary = () => (
  <MainDescription mainDescriptions={SiteData.MainDescription} />
);
