import React, { Component } from "react";

import LessonsPIA from "components/LessonsPIA";

import SiteData from "Data";
import Hero from "components/Hero";
import Description from "components/Description";
import ParagraphTitle from "components/ParagraphTitle";

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
        <ParagraphTitle text="Lezioni passion in action" />
        <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
          <LessonsPIA lessons={SiteData.LessonsPIA} />
        </div>
      </div>
    );
  }
}
