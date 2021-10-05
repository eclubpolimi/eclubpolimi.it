import React from "react";

import MainDescription from "./MainDescription";
import logo from "../../assets/logo-512x512.png";

import "./../../common.css";

export default {
  component: MainDescription,
  title: "Components/MainDescription",
};

export const Primary = () => (
  <MainDescription
    mainDescriptions={{
      logo: logo,
      title0: "Learn",
      title1: "Network",
      title2: "Build",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }}
  />
);
