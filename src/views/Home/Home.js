import React, { Component } from "react";

import Hero from "components/Hero";
import MainDescription from "components/MainDescription";
import JoinUsBar from "components/JoinUsBar";
import Sponsors from "components/Sponsors";

import "./Home.css";

import SiteData from "Data";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero
          backgroundImage={SiteData.HomepageHeroBackground}
          height="500px"
          darkness={0.5}
          contentType="img"
          logo={SiteData.LogoWhite}
        />
        <MainDescription
          className="md:px-10"
          mainDescriptions={SiteData.MainDescription}
        />
        <JoinUsBar link={SiteData.JoinTarget} color="red" />
        <Sponsors
          className="px-4 md:px-0 md:w-5/6 mx-auto mt-8 mb-14"
          logos={SiteData.Sponsors}
        />
      </div>
    );
  }
}
