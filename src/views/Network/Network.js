import React, { Component } from "react";

import SiteData from "Data";
import Hero from "components/Hero";
import Description from "components/Description";
import Sponsors from "components/Sponsors";
import Slogan from "components/Slogan";

export default class Network extends Component {
  render() {
    return (
      <div className="h-full">
        <Hero
          height="500px"
          darkness={0.5}
          backgroundImage={SiteData.HomepageHeroBackground}
          contentType="logo"
          logo={SiteData.NetworkHeroImage}
          logoWidth="400px"
        />
        <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
          <Description
            title={SiteData.NetworkAbout.title}
            text={SiteData.NetworkAbout.text}
          />
        </div>
        <Slogan slogan={SiteData.NetworkSlogan} />
        <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
          <Description
            title={SiteData.NetworkPartnersDescription.title}
            text={SiteData.NetworkPartnersDescription.text}
          />
        </div>
        <Sponsors
          className="max-w-screen-lg lg:mx-auto px-5 lg:px-0"
          title="Members"
          logos={SiteData.NetworkMembers}
        />
      </div>
    );
  }
}
