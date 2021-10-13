import React from "react";

import ParagraphTitle from "./ParagraphTitle";
import "./ParagraphTitle.css";
import "common.css";

export default {
  component: ParagraphTitle,
  title: "Components/ParagraphTitle",
};

export const Primary = () => <ParagraphTitle text="Paragraph" />;
