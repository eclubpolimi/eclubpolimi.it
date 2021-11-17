import React from "react";

import Carousel from "./Carousel";

export default {
  component: Carousel,
  title: "Components/Carousel",
};

const Template = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  height: "300px",
  width: "900px",
  arrowSize: "40px",
  SliderData: [
    {
      image: "http://blog.hosting99.it/wp-content/uploads/2016/03/events.jpg",
    },
    {
      image:
        "https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6",
    },
    {
      image:
        "https://www.bsigroup.com/globalassets/localfiles/375x275/conference-media-center-375x275.jpg",
    },
  ],
  autoplay: 1000,
};
