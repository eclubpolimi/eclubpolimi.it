import React from "react";

import Teams from "./Teams";
import Img from "assets/who_we_are_img_1.jpg";
import "common.css";

export default {
  component: Teams,
  title: "Components/Teams",
};

const teams = [
  {
    teamName: "Team test 1",
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
    ],
  },
  {
    teamName: "Team test 2",
    teamComponents: [
      {
        name: "Nome cognome",
        image: Img,
        description: "Lorem ipsum dolor sit amet...",
      },
    ],
  },
  {
    teamName: "Team test 3",
    teamComponents: [
      {
        name: "Nome cognome",
        image: Img,
        description: "Lorem ipsum dolor sit amet...",
      },
    ],
  },
];

export const Primary = () => <Teams teams={teams} />;
