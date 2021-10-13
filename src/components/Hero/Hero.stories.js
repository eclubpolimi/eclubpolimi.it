import React from "react";

import Hero from "./Hero";

import "common.css";
import SiteData from "Data";

export default {
  component: Hero,
  title: "Components/Hero",
};

export const HomepageImage = () => (
  <Hero
    backgroundImage={SiteData.HomepageHeroBackground}
    height="500px"
    darkness={0.5}
    contentType="img"
    logo={SiteData.LogoWhite}
  />
);

export const HomepageText = () => (
  <Hero
    backgroundImage={SiteData.HomepageHeroBackground}
    height="300px"
    darkness={0.5}
    text="Eclub polimi"
    contentType="text"
  />
);
