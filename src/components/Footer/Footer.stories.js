import React from "react";

import Footer from "./Footer";

import OrgLogo from "../../assets/logo_white.svg";
import PolimiLogo from "../../assets/polimi_logo_white.png";

import "./../../common.css";

export default {
  component: Footer,
  title: "Components/Footer",
};

export const Primary = () => (
  <Footer
    polimiLogo={PolimiLogo}
    organizationLogo={OrgLogo}
    copyrightName="E-club Polimi"
    facebookUrl="https://facebook.com/"
    instagramUrl="https://instagram.com/"
    linkedinUrl="https://linkedin.com/"
  />
);
