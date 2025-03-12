import Hero from 'components/Hero';
import JoinUsCard from 'components/JoinUsCard';
import SiteData from 'Data';
import { JOIN_QUERY } from 'data/queries';
import client from 'utils/apollo_client';

interface JoinProps {
  joinData: {
    explorerJoinLink: string;
    driverJoinLink: string;
    sponsorJoinLink: string;
    explorerBenefits: string[];
    driverBenefits: string[];
    sponsorBenefits: string[];
  };
}

const cleanString = (text: string | null) =>
  text
    ? text
        .replace(/__.*?__/g, '')
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
    : [];

export const getServerSideProps = async (): Promise<{
  props: {
    joinData: {
      explorerJoinLink: string;
      driverJoinLink: string;
      sponsorJoinLink: string;
    };
  };
}> => {
  const joinData = {
    explorerJoinLink: 'https://forms.gle/CUsujfatS28vioox9', // Default
    driverJoinLink: 'https://forms.gle/NWyuKPKhxDtEVYAA6', // Default
    sponsorJoinLink: '',
    explorerBenefits: [
      'Membership Badge',
      'Priority bookings for limited seats',
      'Access members-only events',
      'Exclusive interaction with guests',
    ],
    driverBenefits: [
      'Be involved in the organisation of E-Club Polimi activities',
      'Participate in dedicated trainings',
      'Unique personal and professional growth opportunity',
    ],
    sponsorBenefits: [
      'Do you want to support us?',
      'Do you want to share your entrepreneurial experience - failure or success - with the first entrepreneurial community of Polimi?',
    ],
  };

  try {
    const { data } = await client.query({
      query: JOIN_QUERY,
    });

    if (data?.joinCollection?.items) {
      // Find the correct entry by title
      const selectedEntry = data.joinCollection.items.find(
        (item: any) => item.title === 'Join Us Links',
      );

      if (selectedEntry) {
        joinData.explorerJoinLink =
          selectedEntry.explorerJoinLink || joinData.explorerJoinLink;
        joinData.driverJoinLink =
          selectedEntry.driverJoinLink || joinData.driverJoinLink;
        joinData.sponsorJoinLink =
          selectedEntry.sponsorJoinLink || joinData.sponsorJoinLink;

        joinData.explorerBenefits = cleanString(selectedEntry.explorerBenefits);
        joinData.driverBenefits = cleanString(selectedEntry.driverBenefits);
        joinData.sponsorBenefits = cleanString(selectedEntry.sponsorBenefits);
      }
    }
  } catch (error) {
    console.error('Error fetching join links from Contentful:', error);
  }

  return {
    props: {
      joinData,
    },
  };
};

const Join = ({ joinData }: { joinData: JoinProps['joinData'] }) => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        backgroundImage={SiteData.HomepageHeroBackground}
        height="250px"
        darkness={0.6}
        contentType="text"
        text="Join the E-Club Polimi Community"
      />

      {/* Student Membership Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Join as a Student
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Whether you're looking to engage with like-minded individuals, build
          your network, or take an active role in organizing events, E-Club
          Polimi has the right place for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <JoinUsCard
            role="Explorer"
            height="420px"
            width="100%"
            advantages={joinData.explorerBenefits}
            to={joinData.explorerJoinLink}
          />
          <JoinUsCard
            role="Driver"
            height="420px"
            width="100%"
            advantages={joinData.driverBenefits}
            to={joinData.driverJoinLink}
          />
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="bg-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">Partner with Us</h2>
          </div>
          <p className="text-gray-300 mb-8">
            We collaborate with organizations, startups, and professionals to
            create impactful experiences for our members. If you're looking to
            share your expertise, mentor students, or contribute to our
            community, we’d love to hear from you.
          </p>
          <div className="bg-gray-900 py-20 px-6">
            <div className="flex justify-center">
              <JoinUsCard
                role="Collaborator"
                height="420px"
                width="400px"
                advantages={joinData.sponsorBenefits}
                to={joinData.sponsorJoinLink}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
