import React from "react";
import Img from "../../assets/who_we_are_img_1.jpg";
import Team from "./Team";
import "./../../common.css";

export default {
  component: Team,
  title: "Components/Team",
};

const team = {
  teamName: "Team test 2",
  teamComponents: [
    {
      name: "Nome cognome",
      image: Img,
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Nome cognome",
      image: Img,
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Nome cognome",
      image: Img,
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Nome cognome",
      image: Img,
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Nome cognome",
      image: Img,
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Nome cognome",
      image: Img,
      description: "Lorem ipsum dolor sit amet...",
    },
  ],
};

export const Primary = () => <Team team={team} />;
