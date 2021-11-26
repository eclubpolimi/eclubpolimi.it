import React, { Component } from "react";
import "./Join.css";

import Hero from "components/Hero";
import JoinUsCard from "components/JoinUsCard";

import SiteData from "Data";

export default class Join extends Component {
  render() {
    return (
      <div className="join">
        <div className="bg-gray-300">
          <Hero
            backgroundImage={SiteData.HomepageHeroBackground}
            height="500px"
            text="Join us!"
            contentType="img"
          />
        </div>

        <div className=" flex flex-col justify-center py-8 gap-4 md:flex-row md:gap-6 ">
          <div className=" m-4 h-72 md:m-0 md:h-96 md:w-60 lg:w-80">
            <JoinUsCard
              role="Explorer"
              //height={400}
              //width={280}
              advantages={SiteData.explorerAdvantages}
            />
          </div>
          <div className="mx-4 h-72 md:m-0 md:h-96 md:w-60 lg:w-80">
            <JoinUsCard
              role="Driver"
              //height={400}
              //width={280}
              advantages={SiteData.driverAdvantages}
            />
          </div>
          <div className="m-4 h-72 md:m-0 md:h-96 md:w-60 lg:w-80">
            <JoinUsCard
              role="Sponsor"
              //height={400}
              //width={280}
              advantages={SiteData.sponsorAdvantages}
            />
          </div>
        </div>
      </div>
    );
  }
}
