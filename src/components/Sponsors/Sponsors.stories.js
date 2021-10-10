import React from "react";
import Sponsors from "./Sponsors";
import Image1 from "../../assets/test1.png";
import Image2 from "../../assets/test2.png";
import Image3 from "../../assets/test3.png";

import "./../../common.css";

export default {
  component: Sponsors,
  title: "Components/Sponsors",
};

<<<<<<< HEAD
export const Primary = () => (
  <Sponsors
    arrLogos={[
      { src: Image1, href: "#", alt: "Test1" },
      { src: Image2, href: "#", alt: "Test2" },
      { src: Image3, href: "#", alt: "Test3" },
=======
export const Primary = () => (<Sponsors 
  arrLogos={[
    { src: Image1, href: "#", alt: "Test1" },
    { src: Image2, href: "#", alt: "Test2" },
    { src: Image3, href: "#", alt: "Test3" },
    { src: Image1, href: "#", alt: "Test1" },
    { src: Image2, href: "#", alt: "Test2" },
    { src: Image3, href: "#", alt: "Test3" },
    { src: Image1, href: "#", alt: "Test1" },
    { src: Image2, href: "#", alt: "Test2" },
    { src: Image3, href: "#", alt: "Test3" },
    { src: Image1, href: "#", alt: "Test1" },
    { src: Image2, href: "#", alt: "Test2" },
    { src: Image3, href: "#", alt: "Test3" },
>>>>>>> f48b370 (Fixed UI bugs on sponsors,)
    ]}
  />
);
