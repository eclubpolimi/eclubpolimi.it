import React, { Component } from "react";

import Hero from "components/Hero";
import MainDescription from "components/MainDescription";
import JoinUsBar from "components/JoinUsBar";
import Sponsors from "components/Sponsors";
import TeaserVideo from "assets/teaser_video.mp4";

import "./Home.css";

import SiteData from "Data";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero
          backgroundType="video"
          backgroundVideo={TeaserVideo}
          height="600px"
          darkness={0.25}
        />
        <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
          <MainDescription mainDescription={SiteData.MainDescription} />
        </div>
        <JoinUsBar to={SiteData.JoinTarget} color="orange" />

        <Sponsors
          className="px-4 md:px-0 md:w-5/6 mx-auto mt-8 mb-14"
          logos={SiteData.Sponsors}
        />
      </div>
    );
  }
}
