import React, { Component } from "react";

import SiteData from "Data";
import Hero from "components/Hero";
import Description from "components/Description";
import Sponsors from "components/Sponsors";
import Slogan from "components/Slogan";

export default class Network extends Component {
  render() {
    return (
      <div>
        <Hero
          height="600px"
          darkness={0.5}
          backgroundImage={SiteData.NetworkHeroBackground}
          contentType="logo"
          logo={SiteData.NetworkHeroImage}
          logoWidth="400px"
        />
        <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
          <Description title="About our network">
            <p>
              The Entrepreneurship Club Network is a community of thinkers and
              doers motivated by the same passion for innovation and disruption.
              Our network of clubs aims at spreading the entrepreneurial spirit
              and supporting students in their entrepreneurial journey by
              connecting and exchanging skills and thoughts. We bring together
              future and established entrepreneurs who strive to make an impact.
              Our work focuses on providing our ecosystem with opportunities for
              connection and ideas contamination. In doing so, we strongly
              believe that expanding and nurturing our network is key to the
              well being of our mission.
            </p>
          </Description>
        </div>
        <Slogan slogan={SiteData.NetworkSlogan} />
        <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
          <Description title="Enterpreneurship clubs in Italy">
            <p>
              The first Entrepreneurship Club was founded in 2011 in Bocconi
              University in Milan. The core values (Learn, Network, Build)
              remained present ever since and are everyday refined by our
              experiences. Throughout the years, E-Club Bocconi was able to
              establish strong connections with similar entities around Italy
              and Europe. This international culture characterised the E-Club
              community from day one and mirrors its ambition to expand beyond
              Italian borders. The network was born in 2020 with the
              establishment of the Entrepreneurship Club Polimi at Politecnico
              di Milano. This important step will allow the community to grow
              further. Thanks to motivated actors who share our vision and
              embrace our values, we are helping the spread of the
              entrepreneurial spirit.
            </p>
          </Description>
        </div>
        <div className="bg-gray-100">
          <Sponsors
            className="max-w-screen-lg lg:mx-auto px-5 lg:px-0 py-16"
            logos={SiteData.NetworkMembers}
          />
        </div>
      </div>
    );
  }
}
