import React from "react";

import Footer from "./Footer";

import "common.css";
import SiteData from "Data";

export default {
  component: Footer,
  title: "Components/Footer",
};

export const Primary = () => (
  <Footer
    polimiLogo={SiteData.LogoPolimi}
    organizationLogo={SiteData.LogoWhite}
    copyrightName="E-club Polimi"
    facebookUrl="https://facebook.com/"
    instagramUrl="https://instagram.com/"
    linkedinUrl="https://linkedin.com/"
  />
);
