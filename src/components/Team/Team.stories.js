import React from "react";

import Team from "components/Team";
import Img from "assets/who_we_are_img_1.jpg";
import "common.css";

export default {
  component: Team,
  title: "Components/Team",
};

const teamName = "IT Team";
const members = [
  {
    image: Img,
    cardText: {
      role: "IT member",
      nameSurname: "Nome cognome",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quoteAuthor: "Lorem ipsum",
      email: "lorem.ipsum@loremipsum.com",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
  },
  {
    image: Img,
    cardText: {
      role: "IT member",
      nameSurname: "Nome cognome",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quoteAuthor: "Lorem ipsum",
      email: "lorem.ipsum@loremipsum.com",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
  },
  {
    image: Img,
    cardText: {
      role: "IT member",
      nameSurname: "Nome cognome",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quoteAuthor: "Lorem ipsum",
      email: "lorem.ipsum@loremipsum.com",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
  },
  {
    image: Img,
    cardText: {
      role: "IT member",
      nameSurname: "Nome cognome",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quoteAuthor: "Lorem ipsum",
      email: "lorem.ipsum@loremipsum.com",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
  },
  {
    image: Img,
    cardText: {
      role: "IT member",
      nameSurname: "Nome cognome",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quoteAuthor: "Lorem ipsum",
      email: "lorem.ipsum@loremipsum.com",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
  },
];

export const Primary = () => <Team members={members} teamName={teamName} />;
