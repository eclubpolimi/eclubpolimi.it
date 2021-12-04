import React, { Component } from "react";

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
        <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
          <Description title="Our mission">
            <p>
              We bring together future and established entrepreneurs who strive
              to make an impact. Our work focuses on providing our ecosystem
              with opportunities for connection and ideas contamination. In
              doing so, we strongly believe that expanding and nurturing our
              network is key to the well-being of our mission.
            </p>
          </Description>
        </div>
        <JoinUsBar to={SiteData.JoinTarget} />
        <div className="bg-gray-200">
          <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
            <Teams
              teams={SiteData.GetTeams()}
              className="max-w-screen-lg lg:mx-auto px-5 lg:px-0 pt-8 pb-12"
            />
          </div>
        </div>
      </div>
    );
  }
}
