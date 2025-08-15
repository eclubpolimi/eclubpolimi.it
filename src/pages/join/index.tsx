import Image from 'next/image';
import JoinUsCard from 'components/JoinUsCard/JoinUsCard';
import { JOIN_QUERY } from 'data/queries';
import client from 'utils/apollo_client';
import { useImageAsset, useImageAssets } from 'hooks/useImageAssets';
// Removed fallback import to test pure dynamic loading

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
    explorerJoinLink: '', // No default - will be empty if not found in query
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
        // Only set explorerJoinLink if it exists in the query
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
      {/* Hero Section - Testing Pure Dynamic Loading (NO FALLBACKS) */}
      <div className="relative w-full h-[250px]">
        {/* Background Image - Light Mode */}
        <Image
          src={
            getImageUrl('join_hero_background', false) ||
            joinHeroImage.url ||
            ''
          }
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 36%' }}
          alt="Join Us Hero Background"
          className="block dark:hidden"
        />
        {/* Background Image - Dark Mode */}
        <Image
          src={
            getImageUrl('join_hero_background', true) || joinHeroImage.url || ''
          }
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 36%' }}
          alt="Join Us Hero Background Dark Mode"
          className="hidden dark:block"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold">
          Join the E-Club Polimi Community
        </div>
      </div>

      {/* Student Membership Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-ec_text dark:text-ec_text_darkmode text-center mb-6">
          Join as a Student
        </h2>
        <p className="text-ec_text_secondary dark:text-ec_text_secondary_darkmode text-center max-w-2xl mx-auto mb-10">
          Whether you're looking to engage with like-minded individuals, build
          your network, or take an active role in organizing events, E-Club
          Polimi has the right place for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {joinData.explorerJoinLink && (
            <JoinUsCard
              role="Explorer"
              height="420px"
              advantages={joinData.explorerBenefits}
              to={joinData.explorerJoinLink}
            />
          )}
          <div
            className={`${!joinData.explorerJoinLink ? 'md:col-span-2 flex justify-center' : ''}`}
          >
            <JoinUsCard
              role="Driver"
              height="420px"
              advantages={joinData.driverBenefits}
              to={joinData.driverJoinLink}
            />
          </div>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="bg-ec_background_light dark:bg-ec_background_darkmode py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-ec_text_light dark:text-ec_text_darkmode">
            <h2 className="text-3xl font-bold mb-4">Partner with Us</h2>
          </div>
          <p className="text-ec_text_secondary dark:text-ec_text_secondary_darkmode mb-8">
            We collaborate with organizations, startups, and professionals to
            create impactful experiences for our members. If you're looking to
            share your expertise, mentor students, or contribute to our
            community, we’d love to hear from you.
          </p>
          <div className="flex justify-center">
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
