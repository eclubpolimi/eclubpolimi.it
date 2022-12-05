import Timeline from "components/Timeline";

import SiteData from "Data";
import Carousel from "components/Carousel";

const Events = () => {
  return (
    <div>
      <Carousel sliderData={SiteData.eventsCarouselImages} autoplay={5000} />
      <div className="lg:my-20 my-12 max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Timeline data={SiteData.eventsList} theme="centered" />
      </div>
    </div>
  );
};

export default Events;
