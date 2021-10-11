import React from "react";

import TabSelector from "./TabSelector";

import "./../../common.css";

export default {
  component: TabSelector,
  title: "Components/TabSelector",
};

const tabs = [
  {
    id: 0,
    name: "Tab 1",
    content: "Hello world 1"
  },
  {
    id: 1,
    name: "Tab 2",
    content: "Hello world 2"
  },
  {
    id: 2,
    name: "Tab 3",
    content: "Hello world 3"
  },
  {
    id: 3,
    name: "Tab 4",
    content: "Hello world 4"
  },
  {
    id: 4,
    name: "Tab 5",
    content: "Hello world 5"
  },
  {
    id: 5,
    name: "Tab 6",
    content: "Hello world 6"
  }
];

export const Primary = () => <TabSelector tabs={tabs} />;
