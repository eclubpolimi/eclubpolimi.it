//Changed some team names

import Description from 'components/Description';
import Hero from 'components/Hero';
import JoinUsBar from 'components/JoinUsBar';
import { TeamProps } from 'components/Team/Team';
import Teams from 'components/Teams';

import SiteData from 'Data';
import { ALL_DRIVERS_NOT_ALUMNI_QUERY, DESCRIPTION_QUERY } from 'data/queries';
import { AllDriversQuery } from 'generated/cms/types';
import client from 'utils/apollo_client';

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
  drivers.forEach((driver) => {
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
      {/* Hero Section */}
      <Hero
        backgroundImage={SiteData.aboutUsHeroBackground}
        height="700px"
        darkness={0.5}
        contentType="text"
        text="About us"
      />

      {/* Mission Section */}
      <div className="max-w-full mx-auto px-5 lg:px-10">
        <Description title="Our mission">
          <p>{description}</p> {/* Dynamically replaced with Contentful data */}
        </Description>
      </div>

      {/* Join Us Bar */}
      <JoinUsBar to={SiteData.JoinTarget} color="blue" />

      {/* Teams Section */}
      <div className="bg-white">
        <div className="max-w-full mx-auto px-5 lg:px-10">
          <Teams teams={getTeams(data)} className="pt-8 pb-12" />
        </div>
      </div>
    </div>
  );
};

export default About;
