import React from "react";

import Carousel from "./Carousel";

export default {
  component: Carousel,
  title: "Components/Carousel",
};

const Template = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  arrowSize: "40px",
  sliderData: [
    {
      image: "https://www.w3schools.com/howto/img_lights_wide.jpg",
    },
    {
      image: "https://www.w3schools.com/howto/img_nature_wide.jpg",
    },
    {
      image: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    },
  ],
  autoplay: 1000,
};
