import "./LessonsPIA.css";

export type LessonProps = {
  lessonData: {
    name: string;
    title: string;
    image: string;
    alt: string;
    description: string;
  };
  className?: string;
};

const Lesson = ({ lessonData, className = "" }: LessonProps) => {
  return (
    <div className={className}>
      <div className="lessons-pia-description-container">
        <div className="lessons-pia-image">
          <img
            src={lessonData.image}
            alt={lessonData.alt}
            width="100%"
            height="100%"
          ></img>
        </div>
        <div className="lessons-pia-description">
          <div className="lessons-pia-title">{lessonData.title}</div>
          {lessonData.description}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
