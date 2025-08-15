import Image from 'next/image';
import JoinUsCard from 'components/JoinUsCard/JoinUsCard';
import { JOIN_QUERY } from 'data/queries';
import client from 'utils/apollo_client';
import { useImageAsset, useImageAssets } from 'hooks/useImageAssets';

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

export const getServerSideProps = async (): Promise<{ props: JoinProps }> => {
  const joinData = {
    explorerJoinLink: '',
    driverJoinLink: 'https://forms.gle/NWyuKPKhxDtEVYAA6',
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
      const selectedEntry = data.joinCollection.items.find(
        (
          item: {
            title?: string | null;
            explorerJoinLink?: string | null;
            driverJoinLink?: string | null;
            sponsorJoinLink?: string | null;
          } | null,
        ) => item?.title === 'Join Us Links',
      );

      if (selectedEntry) {
        if (selectedEntry.explorerJoinLink) {
          joinData.explorerJoinLink = selectedEntry.explorerJoinLink;
        }
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

const Join = ({ joinData }: JoinProps) => {
  const joinHeroImage = useImageAsset('join_hero_background');
  const { getImageUrl } = useImageAssets();

  return (
    <div>
      {/* Hero Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src={
            getImageUrl('join_hero_background', false) ||
            joinHeroImage.url ||
            ''
          }
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          alt="Join Us Hero Background"
        />
        <div className="absolute inset-0 bg-black dark:opacity-30 opacity-0 transition-opacity duration-300"></div>
      </div>

      {/* Cards Section */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Driver Card */}
            <JoinUsCard
              role="Driver"
              height="420px"
              advantages={joinData.driverBenefits}
              to={joinData.driverJoinLink}
            />
            
            {/* Sponsor Card */}
            <JoinUsCard
              role="Collaborator"
              height="420px"
              advantages={joinData.sponsorBenefits}
              to={joinData.sponsorJoinLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
