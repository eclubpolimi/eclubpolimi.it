import TabSelector from 'components/TabSelector/TabSelector';
import Lesson, { LessonProps } from './Lesson';

type LessonsPIAProps = {
  lessons: Array<LessonProps['lessonData']>;
  className?: string;
};

const LessonsPIA = ({ lessons, className }: LessonsPIAProps) => {
  const tabs = lessons.map((lesson) => ({
    name: lesson.name, // Ensuring this remains a string to avoid errors
    content: (
      <Lesson
        lessonData={lesson}
        className="text-ec_text dark:text-ec_text_darkmode transition-colors duration-300"
      />
    ), // Applying text color change inside the Lesson component
  }));

  return (
    <div className={`${className} my-12`}>
      <TabSelector tabs={tabs} />
    </div>
  );
};

export default LessonsPIA;
