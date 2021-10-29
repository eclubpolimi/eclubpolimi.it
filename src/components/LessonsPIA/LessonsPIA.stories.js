import React from "react";

import LessonsPIA from "./LessonsPIA";

import "common.css";
import SiteData from "Data";

export default {
  component: LessonsPIA,
  title: "Components/LessonsPIA",
};

export const Primary = () => <LessonsPIA lessons={SiteData.LessonsPIA} />;
