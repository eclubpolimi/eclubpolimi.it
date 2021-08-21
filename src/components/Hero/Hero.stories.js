import React from "react";

import Hero from "./Hero";
import "font-awesome/css/font-awesome.min.css";
import "./../../common.css";

import homepageHero from "../../assets/homepage_hero.jpg";
import Logo from "../../assets/logo_white.svg";

export default {
  component: Hero,
  title: "Components/Hero",
};

export const HomepageImage = () => (
  <Hero
    backgroundImage={homepageHero}
    height="500px"
    darkness={0.5}
    contentType="img"
    logo={Logo}
  />
);

export const HomepageText = () => (
  <Hero
    backgroundImage={homepageHero}
    height="300px"
    darkness={0.5}
    text="Eclub polimi"
    contentType="text"
  />
);
