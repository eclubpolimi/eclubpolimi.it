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
        <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
          <MainDescription image={SiteData.LogoLearnNetworkBuild}>
            <p>
              <b>Learn</b>
              <br />
              We organize events, workshops, and meetings engaging speakers,
              entrepreneurs, and experts of the startup ecosystem who share
              their stories and knowledge with us.
              <br />
              <br />
              <b>Network</b>
              <br />
              We give you the opportunity to enter a heterogeneous ecosystem
              where you will be able to share ideas and get in touch with future
              partners with different skills and backgrounds.
              <br />
              <br />
              <b>Build</b>
              <br />
              Once you have the expertise, knowledge, and the right network, all
              you have to do is to put your idea into practice: work in a team,
              develop, define, and scale up your project.
            </p>
          </MainDescription>
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
