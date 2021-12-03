import Timeline from "components/Timeline";
import React, { Component } from "react";

import SiteData from "Data";
import Hero from "components/Hero";

export default class Events extends Component {
  render() {
    return (
      <div className="events">
        <Hero
          height="500px"
          backgroundImage={SiteData.HomepageHeroBackground}
          darkness={0.5}
        />
        <div className="lg:my-20 my-12 max-w-screen-lg lg:mx-auto px-5 lg:px-0">
          <Timeline data={SiteData.eventsList} {...{ style: "centered" }} />
        </div>
      </div>
    );
  }
}
