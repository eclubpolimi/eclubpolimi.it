import Footer from 'components/Footer/Footer';
import Image from 'next/image';
import JoinUsCard from 'components/JoinUsCard/JoinUsCard';
import HeroSection from 'components/HeroSection/HeroSection';
import TranslucentBox from 'components/TranslucentBox';
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

  const bgImage =
    getImageUrl('join_hero_background', false) || joinHeroImage.url || '';
  const bgImageDark =
    getImageUrl('join_hero_background', true) || joinHeroImage.url || '';

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Fixed full-page background image */}
      <div
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 33%',
          backgroundAttachment: 'fixed',
          transition: 'background-image 0.3s',
        }}
      />
      <div
        className="fixed inset-0 w-full h-full z-0 hidden dark:block"
        style={{
          backgroundImage: `url(${bgImageDark})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 33%',
          backgroundAttachment: 'fixed',
          transition: 'background-image 0.3s',
        }}
      />
      {/* Overlay for readability */}
      <div className="fixed inset-0 bg-black bg-opacity-40 z-0 pointer-events-none" />

      {/* Content on top of background */}
      <div className="relative z-10">
        {/* Student Membership Section */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col items-center gap-4 mb-10">
            <TranslucentBox className="w-full max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-ec_text dark:text-ec_text_darkmode transition-colors duration-300 text-center mb-2">
                Join as a Student
              </h2>
              <p className="text-ec_text dark:text-ec_text_darkmode transition-colors duration-300 text-center">
                Whether you're looking to engage with like-minded individuals,
                build your network, or take an active role in organizing events,
                E-Club Polimi has the right place for you.
              </p>
            </TranslucentBox>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {joinData.explorerJoinLink && (
              <TranslucentBox className="w-full flex justify-center">
                <JoinUsCard
                  role="Explorer"
                  height="420px"
                  advantages={joinData.explorerBenefits}
                  to={joinData.explorerJoinLink}
                  className="bg-transparent border-none shadow-none text-ec_text dark:text-ec_text_darkmode"
                />
              </TranslucentBox>
            )}
            <div
              className={`${!joinData.explorerJoinLink ? 'md:col-span-2 flex justify-center' : ''} flex gap-8`}
            >
              <TranslucentBox className="w-full flex justify-center">
                <JoinUsCard
                  role="Driver"
                  height="420px"
                  advantages={joinData.driverBenefits}
                  to={joinData.driverJoinLink}
                  className="bg-transparent border-none shadow-none text-ec_text dark:text-ec_text_darkmode"
                />
              </TranslucentBox>
            </div>
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-4 mb-8">
              <TranslucentBox className="w-full max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-ec_text dark:text-ec_text_darkmode transition-colors duration-300 mb-2">
                  Partner with Us
                </h2>
                <p className="text-ec_text dark:text-ec_text_darkmode transition-colors duration-300 text-center">
                  We collaborate with organizations, startups, and professionals
                  to create impactful experiences for our members. If you're
                  looking to share your expertise, mentor students, or
                  contribute to our community, we'd love to hear from you.
                </p>
              </TranslucentBox>
            </div>
            <div className="flex justify-center">
              <TranslucentBox className="w-full max-w-md mx-auto flex justify-center px-2 py-2">
                <JoinUsCard
                  role="Collaborator"
                  height="420px"
                  advantages={joinData.sponsorBenefits}
                  to={joinData.sponsorJoinLink}
                  className="bg-transparent border-none shadow-none text-ec_text dark:text-ec_text_darkmode"
                />
              </TranslucentBox>
            </div>
          </div>
        </div>
      </div>
      {/* Footer is automatically rendered by layout, do not add manually */}
    </div>
  );
};

export default Join;
