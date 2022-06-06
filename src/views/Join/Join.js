import React, { Component } from "react";

import Hero from "components/Hero";
import JoinUsCard from "components/JoinUsCard";

import SiteData from "Data";

export default class Join extends Component {
  render() {
    return (
      <div>
        <Hero
          backgroundImage={SiteData.HomepageHeroBackground}
          height="200px"
          darkness={0.5}
          contentType="text"
          text="Join us!"
        />
        <div className="bg-gray-100 flex flex-col justify-center items-center py-8 gap-8 sm:flex-row">
          <JoinUsCard
            role="Explorer"
            height="340px"
            width="300px"
            advantages={SiteData.explorerAdvantages}
            to={SiteData.ApplyExplorerLink}
          />

          <JoinUsCard
            role="Driver"
            height="340px"
            width="300px"
            advantages={SiteData.driverAdvantages}
            to={SiteData.ApplyDriverLink}
            closed={true}
          />
        </div>
      </div>
    );
  }
}
