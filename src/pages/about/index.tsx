//Changed some team names

import Description from 'components/Description';
import JoinUsBar from 'components/JoinUsBar';
import { TeamProps } from 'components/Team/Team';
import Teams from 'components/Teams';
import SiteData from 'Data';
import { ALL_DRIVERS_NOT_ALUMNI_QUERY, DESCRIPTION_QUERY } from 'data/queries';
import { AllDriversQuery, Driver } from 'types/cms';
import client from 'utils/apollo_client';
import Image from 'next/image';

interface AboutProps {
  data: AllDriversQuery;
  description: string; // New prop for mission description
}

export const getServerSideProps = async (): Promise<{ props: AboutProps }> => {
  const { data } = await client.query<AllDriversQuery>({
    query: ALL_DRIVERS_NOT_ALUMNI_QUERY,
  });

  // Fetch mission description from Contentful
  let missionDescription =
    'We bring together future and established entrepreneurs who strive to make an impact. Our work focuses on providing our ecosystem with opportunities for connection and ideas contamination. In doing so, we strongly believe that expanding and nurturing our network is key to the well-being of our mission.'; // Fallback in case Contentful query fails

  try {
    const { data: descriptionData } = await client.query({
      query: DESCRIPTION_QUERY,
    });

    // Find the "mission" entry from Contentful
    missionDescription =
      descriptionData?.decriptionParagraphCollection?.items.find(
        (item: any) => item.textArea === 'about us - our mission',
      )?.textField || missionDescription;
  } catch (error) {
    console.error('Error fetching mission description:', error);
  }

  return {
    props: {
      data,
      description: missionDescription, // Pass mission description as prop
    },
  };
};

const teamNames = [
  'Board',
  'Human Capital and Internal Processes',
  'Events',
  'Corporate and External Relationships',
  'Marketing',
  'Information Technology', //to be renamed
];

const getTeams = (data: AllDriversQuery) => {
  const teams: Array<TeamProps> = [];
  const teamMap: Record<string, TeamProps> = {};

  const drivers = data.driverCollection?.items;
  if (!drivers || drivers.length === 0) return teams;

  // Setup the teams, and insert them into a map for quick access
  for (const team of teamNames) {
    const teamProp: TeamProps = {
      teamName: team,
      members: [],
    };

    teams.push(teamProp);
    teamMap[team] = teamProp;
  }

  // Add drivers to their respective teams
  drivers.forEach((driver: Driver | null) => {
    if (!driver?.team) return;

    // Ensure the team exists in the map before accessing it
    const targetTeam = teamMap[driver.team];
    if (!targetTeam) {
      console.warn(`Unmatched team "${driver.team}" in fetched data.`);
      return;
    }

    targetTeam.members.push({
      image: driver.image?.url || '',
      cardText: {
        role: driver.role || '',
        nameSurname: driver.nameSurname || '',
        quote: driver.quote || '',
        quoteAuthor: driver.quoteAuthor || '',
        marksColor: driver.quoteColor || '',
        email: driver.email || '',
        linkedinUrl: driver.linkedinLink || '',
        instagramUrl: driver.instagramLink || '',
      },
    });
  });

  return teams;
};

const About = ({ data, description }: AboutProps) => {
  return (
    <div>
      {/* About Us Hero Section */}
      <div className="relative w-full h-[350px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/netsonsImages/aboutUs_hero.png"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 36%' }}
          alt="About Us Background"
        />

        {/* Light & Dark Mode Overlay */}
        <div className="absolute inset-0 bg-white dark:bg-black opacity-30 dark:opacity-50 transition-opacity duration-300"></div>

        {/* About Us Title */}
        <h1 className="absolute text-4xl font-extrabold text-ec_text dark:text-ec_text_darkmode transition-colors duration-300">
          About Us
        </h1>
      </div>

      {/* Mission Section */}
      <div className="max-w-full mx-auto px-5 lg:px-10">
        <Description title="Our mission">
          <p className="text-ec_text dark:text-ec_text_darkmode">
            {description}
          </p>
        </Description>
      </div>

      {/* Join Us Bar */}
      <JoinUsBar to={SiteData.JoinTarget} color="blue" />

      {/* Teams Section */}
      <div className="bg-ec_background dark:bg-ec_background_darkmode">
        <div className="max-w-full mx-auto px-5 lg:px-10">
          <Teams
            teams={getTeams(data)}
            className="pt-8 pb-12 text-ec_text dark:text-ec_text_darkmode"
          />
        </div>
      </div>
      <div className="w-full h-2 bg-ec_blue dark:bg-ec_blue_darkmode my-6"></div>
    </div>
  );
};

export default About;
