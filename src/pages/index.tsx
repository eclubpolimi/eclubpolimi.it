import Button from 'components/Button';
import JoinUsBar from 'components/JoinUsBar';
import LabeledOutlineCard from 'components/LabeledOutlineCard';
import SiteData from 'Data';

import PeopleSvg from 'assets/people_graphics.svg';
import PeopleSvg_darkmode from 'assets/people_graphics_darkmode.png';
import LogoStartupChallenge from 'assets/logo_startupchallenge.jpg';
import Munich2 from 'assets/munich2.jpg';
import Munich3 from 'assets/munich3.jpg';
import Image from 'next/image';
import { DESCRIPTION_QUERY } from 'data/queries';
import client from 'utils/apollo_client';

interface HomeProps {
  textData: Record<string, string>; // Store all text snippets from Contentful
}

export const getServerSideProps = async (): Promise<{ props: HomeProps }> => {
  let textData: Record<string, string> = {};

  try {
    const { data } = await client.query({
      query: DESCRIPTION_QUERY,
    });

    // Convert Contentful response into a key-value store
    textData = data?.decriptionParagraphCollection?.items.reduce(
      (acc: Record<string, string>, item: any) => {
        acc[item.textArea] = item.textField;
        return acc;
      },
      {},
    );
  } catch (error) {
    console.error('Error fetching home page text:', error);
  }

  return {
    props: {
      textData,
    },
  };
};

const Home = ({ textData }: HomeProps) => {
  return (
    <div className="w-full">
      <div
        className="md:mx-auto md:my-28 px-5 sm:px-8 py-4 pb-8 md:py-0 max-w-6xl
      flex flex-col-reverse md:flex-row text-center md:text-left items-center md:gap-10"
      >
        <div className="w-full md:w-1/2">
          <h1 className="mt-8 text-ec_text dark:text-ec_text_darkmode font-extrabold text-4xl leading-tight header-squares-decoration">
            Entrepreneurship Club Polimi
          </h1>
          <span className="mt-3 text-ec_grey_darkmode dark:text-ec_grey font-semibold text-xl block">
            {textData['home - tagline'] ||
              'A community of entrepreneurial-minded people to reach your full potential'}
          </span>
          <div className="flex gap-4 md:flex-row flex-col items-center pt-8">
            <Button
              to={SiteData.JoinTarget}
              theme="orange"
              className="align-middle"
            >
              Join us
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          {/* Light Mode Image */}
          <Image
            className="lg:w-5/6 block dark:hidden"
            src={PeopleSvg}
            alt="People graphics"
          />

          {/* Dark Mode Image */}
          <Image
            className="lg:w-5/6 hidden dark:block"
            src={PeopleSvg_darkmode}
            alt="People graphics dark mode"
          />
        </div>
      </div>
      <div className="bg-ec_background dark:bg-ec_background_darkmode relative overflow-hidden">
        <div
          className="absolute my-6 mx-4 md:my-6 md:mx-6 inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url(${SiteData.LogoLearnNetworkBuild.src})`,
            backgroundRepeat: 'round',
            backgroundSize: '180px',
          }}
        />
        <div className="px-5 md:px-40 py-12 flex flex-col gap-12 md:max-w-7xl mx-auto">
          <h2 className="md:text-center">
            {textData['home - what we stand for'] || 'What we stand for'}
          </h2>
          <LabeledOutlineCard
            className="place-self-center xl:w-4/5"
            label="Learn"
            text={
              textData['home - learn'] ||
              'We organize events, workshops, and meetings engaging speakers, entrepreneurs, and experts of the startup ecosystem who share their stories and knowledge with us.'
            }
          />
          <LabeledOutlineCard
            invertedColors
            className="place-self-center xl:w-4/5"
            label="Network"
            text={
              textData['home - network'] ||
              'We give you the opportunity to enter a heterogeneous ecosystem where you will be able to share ideas and get in touch with future partners with different skills and backgrounds.'
            }
          />
          <LabeledOutlineCard
            className="place-self-center xl:w-4/5"
            label="Build"
            text={
              textData['home - build'] ||
              'Once you have the expertise, knowledge, and the right network, all you have to do is to put your idea into practice: work in a team, develop, define, and scale up your project.'
            }
          />
        </div>
      </div>
      <JoinUsBar to={SiteData.JoinTarget} color="blue" />
      <div className="bg-ec_background dark:bg-ec_background_darkmode">
        <div className="px-5 md:px-40 py-12 flex flex-col gap-12 md:max-w-7xl mx-auto">
          <h2 className="md:text-center">
            {textData['home - a glimpse'] || 'A glimpse of what we do'}
          </h2>
          <div className="flex flex-col xl:flex-row justify-center items-center">
            <LabeledOutlineCard
              invertedColors
              className="place-self-center xl:w-4/5"
              label="Events"
              text={
                textData['home - events'] ||
                'We organize different events concerning activities and speeches from the best entrepreneurs and innovators of our area.'
              }
            />
            <div className="xl:w-1/2 xl:-ml-28 border border-solid border-ec_border dark:border-ec_border_darkmode rounded-xl p-2">
              <Image
                src={Munich2}
                className="rounded-xl place-self-center"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col-reverse xl:flex-row justify-center items-center">
            <div className="xl:w-1/2 xl:-mr-28 border border-solid border-ec_orange dark:border-ec_orange_darkmode rounded-xl p-2">
              <Image
                src={LogoStartupChallenge}
                className="rounded-xl place-self-center"
                alt=""
              />
            </div>

            <LabeledOutlineCard
              labelDx
              className="place-self-center xl:w-4/5"
              label="Startup Challenge"
              text={
                textData['home - usc'] ||
                'The challenge will bring together top university students from Politecnico and Bocconi passionate about entrepreneurship.'
              }
            />
          </div>
          <div className="flex flex-col xl:flex-row justify-center items-center">
            <LabeledOutlineCard
              invertedColors
              className="place-self-center xl:w-4/5"
              label="Travel"
              text={
                textData['home - travel'] ||
                'We discover Europe and its active startup ecosystems! We will not only bring you to visit startups and their founders, but you will also get a taste of different cultures.'
              }
            />
            <div className="xl:w-1/2 xl:-ml-28 border border-solid border-ec_border dark:border-ec_border_darkmode rounded-xl p-2">
              <Image
                src={Munich3}
                className="rounded-xl place-self-center"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 bg-ec_blue dark:bg-ec_blue_darkmode my-6"></div>
    </div>
  );
};

export default Home;
