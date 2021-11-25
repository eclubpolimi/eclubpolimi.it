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
    cardText={{
      nameSurname: "Valeria Amato",
      role: "IT Coordinator",
      quote:
        "I think it is possible for ordinary people to choose to be extraordinary",
      quoteAuthor: "Elon Musk",
      marksColor: "#7b0432",
      email: "valeria.amato@eclubpolimi.it",
      linkedIn: "#",
      Instagram: "#",
    }}
  />
);
