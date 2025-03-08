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

export const getServerSideProps = async (): Promise<{
  props: { joinData: { explorerJoinLink: string; driverJoinLink: string } };
}> => {
  let joinData = {
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

        const cleanString = (text: string | null) =>
          text
            ? text
                .replace(/__.*?__/g, '')
                .split('\n')
                .map((line) => line.trim())
                .filter(Boolean)
            : [];

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
      <Hero
        backgroundImage={SiteData.HomepageHeroBackground}
        height="200px"
        darkness={0.5}
        contentType="text"
        text="Join us!"
      />
      <div className="bg-gray-100 flex flex-col justify-center items-center py-8 gap-8 sm:flex-row">
        <JoinUsCard
          role="Explorer"
          height="400px"
          width="300px"
          advantages={joinData.explorerBenefits}
          to={joinData.explorerJoinLink}
        />

        <JoinUsCard
          role="Driver"
          height="420px"
          width="300px"
          advantages={joinData.driverBenefits}
          to={joinData.driverJoinLink}
        />

        <JoinUsCard
          role="Sponsor"
          height="400px"
          width="300px"
          advantages={joinData.sponsorBenefits}
          to={joinData.sponsorJoinLink}
        />
      </div>
    </div>
  );
};

export default Join;
