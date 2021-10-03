import React from "react";

import Footer from "./Footer";

import Logo from "../../assets/logo_white.svg";

import "./../../common.css";

export default {
  component: Footer,
  title: "Components/Footer",
};

export const Primary = () => (
  <Footer
    logo={Logo}
    copyrightName={"E-club Polimi"}
    facebookUrl={"https://facebook.com/"}
    instagramUrl={"https://instagram.com/"}
    linkedinUrl={"https://linkedin.com/"}
  />
);
