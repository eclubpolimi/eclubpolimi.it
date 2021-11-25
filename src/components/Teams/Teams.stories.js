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
    members: [
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
    ],
  },
  {
    teamName: "Team test 2",
    members: [
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
    ],
  },
  {
    teamName: "Team test 3",
    members: [
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
    ],
  },
];

export const Primary = () => <Teams teams={teams} />;
