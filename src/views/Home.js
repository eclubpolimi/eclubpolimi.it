import React, { Component } from "react";
import Hero from "../components/Hero";
import homeBackground from "../assets/home_hero_bg.jpg";
import logo from "../assets/logo_white.svg";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <Hero
          height="800"
          backgroundType="img"
          backgroundAsset={homeBackground}
          contentType="img"
          content={logo}
        />
      </div>
    );
  }
}
