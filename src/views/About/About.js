import React, { Component } from "react";
import "./About.css";

import SiteData from "Data";

import Hero from "components/Hero";
import Description from "components/Description";
import Teams from "components/Teams";
import JoinUsBar from "components/JoinUsBar";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Hero
          backgroundImage={SiteData.HomepageHeroBackground}
          height="500px"
          darkness={0.5}
          contentType="img"
          logo={SiteData.LogoWhite}
        />
        <div className="md:px-10">
          <Description
            title={SiteData.AboutDescription.title}
            text={SiteData.AboutDescription.text}
          />
        </div>
        <JoinUsBar />
        <Teams teams={SiteData.Teams} className="md:w-3/4 md:mx-auto pt-8 pb-12" />
      </div>
    );
  }
}
