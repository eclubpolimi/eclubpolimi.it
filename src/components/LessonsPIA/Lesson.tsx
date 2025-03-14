import Image from 'next/image';

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

const Lesson = ({ lessonData, className = '' }: LessonProps) => {
  return (
    <div
      className={`${className} bg-ec_background dark:bg-ec_background_darkmode p-6 rounded-lg shadow-md`}
    >
      <div className="flex flex-col lg:flex-row justify-center w-full h-full">
        <div className="w-full lg:w-1/2 h-96 relative flex flex-col flex-grow">
          <Image
            src={lessonData.image}
            alt={lessonData.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-100 pt-5 pl-0 lg:w-1/2 lg:pl-5 text-justify leading-6 text-ec_text dark:text-ec_text_darkmode">
          <div className="mb-2 text-center text-xl font-bold">
            {lessonData.title}
          </div>
          {lessonData.description}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
