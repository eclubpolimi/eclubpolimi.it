import Timeline from "components/Timeline";
import { Component } from "react";

import SiteData from "Data";
import Carousel from "components/Carousel";

export default class Events extends Component {
  render() {
    return (
      <div>
        <Carousel sliderData={SiteData.eventsCarouselImages} autoplay={5000} />
        <div className="lg:my-20 my-12 max-w-screen-lg lg:mx-auto px-5 lg:px-0">
          <Timeline data={SiteData.eventsList} theme="centered" />
        </div>
      </div>
    );
  }
}
