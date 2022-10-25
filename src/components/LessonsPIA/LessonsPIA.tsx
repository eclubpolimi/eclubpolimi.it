import "./LessonsPIA.css";

import TabSelector from "components/TabSelector";
import Lesson, { LessonProps } from "./Lesson";

type LessonsPIAProps = {
  lessons: Array<LessonProps["lessonData"]>;
  className?: string;
};

const LessonsPIA = ({ lessons, className }: LessonsPIAProps) => {
  const tabs = lessons.map((lesson) => {
    return {
      name: lesson.name,
      content: <Lesson lessonData={lesson} />,
    };
  });

  return (
    <div className={`${className} my-12`}>
      <TabSelector tabs={tabs} />
    </div>
  );
};

export default LessonsPIA;
