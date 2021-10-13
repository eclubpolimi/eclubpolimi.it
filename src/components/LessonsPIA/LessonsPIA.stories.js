import React from "react";

import LessonsPIA from "./LessonsPIA";
import icon from "assets/img-lessons-pia-346x220.jpg";

import "common.css";

export default {
  component: LessonsPIA,
  title: "Components/LessonsPIA",
};

export const Primary = () => (
  <LessonsPIA
    arrLessons={[
      {
        id: 1,
        name: "Lezione 1",
        image: icon,
        alt: "Passion in Action lesson image",
        description: "TODO: Inserire descrizione",
      },
      {
        id: 2,
        name: "Lezione 2",
        image: icon,
        alt: "Passion in Action lesson image",
        description: "TODO: Inserire descrizione",
      },
      {
        id: 3,
        name: "Lezione 3",
        image: icon,
        alt: "Passion in Action lesson image",
        description: "TODO: Inserire descrizione",
      },
      {
        id: 4,
        name: "Lezione 4",
        image: icon,
        alt: "Passion in Action lesson image",
        description: "TODO: Inserire descrizione",
      },
      {
        id: 5,
        name: "Lezione 5",
        image: icon,
        alt: "Passion in Action lesson image",
        description: "TODO: Inserire descrizione",
      },
      /* if another lesson needs to be added, copy the format above */
    ]}
  />
);
