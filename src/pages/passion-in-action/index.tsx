import LessonsPIA from 'components/LessonsPIA';

import SiteData from 'Data';
import Hero from 'components/Hero';
import Description from 'components/Description';
import ParagraphTitle from 'components/ParagraphTitle';

const PassionInAction = () => {
  return (
    <div>
      <Hero
        backgroundImage={SiteData.PIAHeroBackground}
        height="600px"
        darkness={0.5}
        contentType="text"
        text="Passion in Action"
        alignTop
      />
      <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Description title="Passion in Action">
          <p>
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
      <ParagraphTitle text="Passion in Action Lessons" />
      <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <LessonsPIA lessons={SiteData.LessonsPIA} />
      </div>
    </div>
  );
};

export default PassionInAction;
