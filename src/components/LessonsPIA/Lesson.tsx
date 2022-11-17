import Image from "next/image";

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
      <div className="flex flex-col lg:flex-row justify-center items-center w-full">
        <div className="w-full h-full lg:w-1/2 relative">
          <Image src={lessonData.image} alt={lessonData.alt} fill />
        </div>
        <div className="w-100 pt-5 pl-0 lg:w-1/2 lg:pl-5 text-justify leading-6">
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
