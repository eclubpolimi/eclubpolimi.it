import LessonsPIA from 'components/LessonsPIA';
import Image from 'next/image';

import SiteData from 'Data';
import Description from 'components/Description';
import ParagraphTitle from 'components/ParagraphTitle';
import { useImageAsset } from 'hooks/useImageAssets';

const PassionInAction = () => {
  const piaHeroImage = useImageAsset('pia_hero_background');
  
  return (
    <div>
      {/* Hero Section with Background Image Fix */}
      <div className="relative w-full h-[350px] flex items-center justify-center text-white">
        <Image
          src={piaHeroImage.url || ''}
          fill
          style={{ objectFit: 'cover' }}
          alt="Passion in Action Background"
        />
        <h1 className="absolute text-4xl font-extrabold text-ec_text_darkmode dark:text-ec_text_darkmode">
          Passion in Action
        </h1>
      </div>

      {/* Description Section */}
      <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Description title="Passion in Action">
          <p className="text-ec_text dark:text-ec_text_darkmode">
            <b>Lean Startup: the art to be entrepreneurial</b> is the first
            Politecnico course organized in collaboration with a student
            association, Entrepreneurship Club Polimi. The course is organized
            by students, for students.
            <br />
            <br />
            The objective of the course is to introduce the students to the
            so-called "entrepreneurial mentality": a way of reasoning that
            typically belongs to the startup world, but that can be employed
            whatever career they will pursue.
            <br />
            <br />
            In the course, we will give you the basic tools to create a startup:
            how to protect your business idea and understand if it is good, how
            to design an effective presentation, and how to raise funds for your
            idea. The lessons are held by important players of the Italian
            startup ecosystem such as PoliHub, Plug and Play, and Techstars.
            <br />
            <br />
            The course is held in Italian.
          </p>
        </Description>
      </div>

      {/* Lessons Section */}
      <ParagraphTitle text="Passion in Action Lessons" />
      <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0 text-ec_text dark:text-ec_text_darkmode">
        <LessonsPIA lessons={SiteData.LessonsPIA} />
      </div>
      <div className="w-full h-2 bg-ec_blue dark:bg-ec_blue_darkmode my-6"></div>
    </div>
  );
};

export default PassionInAction;
