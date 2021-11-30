import React, { Component } from "react";

import LessonsPIA from "components/LessonsPIA";

import "./PassionInAction.css";

import SiteData from "Data";
import Hero from "components/Hero";
import Description from "components/Description";

export default class PassionInAction extends Component {
  render() {
    return (
      <div className="passion-in-action">
        <Hero
          backgroundImage={SiteData.PIAHeroBackground}
          height="500px"
          darkness={0.5}
          contentType="text"
          text="Passion in action"
        />
        <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
          <Description
            title={SiteData.DescriptionPIA.title}
            text={SiteData.DescriptionPIA.text}
          />
        </div>
        <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
          <LessonsPIA
            lessons={SiteData.LessonsPIA}
            className="w-3/4 mx-auto mb-16"
          />
        </div>
      </div>
    );
  }
}
