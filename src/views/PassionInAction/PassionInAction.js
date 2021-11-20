import React, { Component } from "react";

import HeroPIA from "components/HeroPIA";
import DescriptionPIA from "components/DescriptionPIA";
import LessonsPIA from "components/LessonsPIA";

import "./PassionInAction.css";

import SiteData from "Data";

export default class PassionInAction extends Component {
  render() {
    return (
      <div className="passion-in-action">
        <HeroPIA heroPIA={SiteData.HeroPIA} />
        <div className="md:px-10">
          <DescriptionPIA descriptionPIA={SiteData.DescriptionPIA} />
        </div>
        <LessonsPIA
          lessons={SiteData.LessonsPIA}
          className="w-3/4 mx-auto mb-16"
        />
      </div>
    );
  }
}
