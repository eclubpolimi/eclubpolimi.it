import React from "react";

import FlipCard from "./FlipCard";
import "common.css";

import Image from "assets/who_we_are_img_1.jpg";

export default {
  component: FlipCard,
  title: "Components/FlipCard",
};

export const Primary = () => (
  <FlipCard
    frontImage={Image}
    height="400px"
    width="300px"
    frontText="Name Surname"
    backText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
              ut aliquip ex ea commodo consequat. "
  />
);
