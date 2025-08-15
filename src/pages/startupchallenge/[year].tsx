import Image from 'next/image';
import { GetServerSideProps } from 'next';

import Button from 'components/Button/Button';
import Description from 'components/Description/Description';
import JoinUsBar from 'components/JoinUsBar/JoinUsBar';
import ParagraphTitle from 'components/ParagraphTitle/ParagraphTitle';
import Sponsors from 'components/Sponsors/Sponsors';
import Timeline from 'components/Timeline/Timeline';

import { useImageAssets } from 'hooks/useImageAssets';

import { ALL_STARTUP_CHALLENGES_QUERY } from 'data/queries';
import { StartupChallengeDataQuery } from 'types/cms';
import client from 'utils/apollo_client';
import { formatDate } from 'utils/formatting';

interface StartupChallengeYearProps {
  data: StartupChallengeDataQuery | null;
  submissionsEnabled: boolean;
  year: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { year } = context.params as { year: string };

  try {
    const { data } = await client.query<StartupChallengeDataQuery>({
      query: ALL_STARTUP_CHALLENGES_QUERY,
    });

    // Map years to array indices
    const yearToIndex: { [key: string]: number } = {
      '2024': 0,
      '2025': 1,
      '2026': 2,
    };

    const selectedIndex = yearToIndex[year];
    const challengeData =
      data?.startupchallengeCollection?.items[selectedIndex] || null;

    // Determine if submissions are enabled on the server
    const submissionsEnabled = (() => {
      if (
        !challengeData ||
        !challengeData.submissionsOpenDate ||
        !challengeData.submissionsCloseDate
      )
        return false;

      const now = new Date();
      const open = new Date(challengeData.submissionsOpenDate);
      const closed = new Date(challengeData.submissionsCloseDate);
      return (
        open <= now && now <= closed && challengeData.submissionsOpen === true
      );
    })();

    return {
      props: {
        data: challengeData
          ? { startupchallengeCollection: { items: [challengeData] } }
          : null,
        submissionsEnabled: submissionsEnabled,
        year: year,
      },
    };
  } catch (error) {
    console.error('Error fetching startup challenge data:', error);
    return {
      props: {
        data: null,
        submissionsEnabled: false,
        year: year,
      },
    };
  }
};

const StartupChallengeYear = ({
  data,
  submissionsEnabled,
  year,
}: StartupChallengeYearProps) => {
  const challengeData = data?.startupchallengeCollection?.items[0];
  const { getImageUrl } = useImageAssets();

  // If no data available, show "Coming soon" page
  if (!challengeData) {
    return (
      <div className="w-full">
        <div className="md:mx-auto md:my-28 px-5 sm:px-8 py-4 md:py-0 max-w-6xl flex flex-col text-center items-center min-h-[400px] justify-center">
          <h1 className="text-ec_text dark:text-ec_text_darkmode font-extrabold text-4xl leading-tight mb-6 transition-colors duration-300">
            University Startup Challenge {year}
          </h1>
          <p className="text-ec_text_secondary dark:text-ec_text_secondary_darkmode text-xl mb-8 transition-colors duration-300">
            Coming Soon!
          </p>
          <p className="text-ec_text_secondary dark:text-ec_text_secondary_darkmode max-w-2xl transition-colors duration-300">
            The details for the {year} edition of the University Startup
            Challenge are not yet available. Stay tuned for updates!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        className="md:mx-auto md:my-28 px-5 sm:px-8 py-4 md:py-0 max-w-6xl
      flex flex-col-reverse md:flex-row text-center md:text-left items-center md:gap-10"
      >
        <div className="w-full md:w-1/2">
          <h1 className="mt-8 text-ec_text dark:text-ec_text_darkmode font-extrabold text-4xl leading-tight header-squares-decoration transition-colors duration-300">
            University Startup Challenge {year}
          </h1>
          <span className="mt-3 text-ec_text dark:text-ec_text_darkmode font-semibold text-xl block transition-colors duration-300">
            The first Milan startup challenge organized by the Entrepreneurship
            Club network, open to students of all partnered clubs' universities.
          </span>
          <div className="flex gap-4 md:flex-row flex-col items-center pt-8">
            <Button
              variant="external"
              href={challengeData?.signUpLink || ''}
              theme="orange"
              className="align-middle"
              disabled={!submissionsEnabled}
            >
              Apply here
            </Button>
            {challengeData?.submissionsOpenDate && (
              <p className="text-sm text-ec_grey">
                Registrations open on{' '}
                {formatDate(challengeData.submissionsOpenDate)}
              </p>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="lg:w-3/4 relative">
            {/* Light mode logo */}
            <Image
              className="block dark:hidden"
              src={getImageUrl('homepage_section_startup_logo', false) || ''}
              alt="Startup challenge logo"
              width={500}
              height={400}
              priority
            />
            {/* Dark mode logo */}
            <Image
              className="hidden dark:block"
              src={getImageUrl('homepage_section_startup_logo', true) || ''}
              alt="Startup challenge logo"
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Description
          title={`A${challengeData?.duration ? ` ${challengeData.duration}-long` : ' month-long'} entrepreneurship competition`}
        >
          <p className="text-ec_text dark:text-ec_text_darkmode text-center transition-colors duration-300">
            {challengeData?.detailedProgramDescription ||
              `The University Startup Challenge ${year} is a unique event that brings
              together students from leading universities with the goal of delivering groundbreaking
              startup ideas. The event includes seminars, workshops and networking time.
              Participants will work together in groups to create innovative startup ideas
              that help solve practical problems.`}
          </p>
        </Description>
      </div>

      {/* Program Details */}
      {challengeData?.detailedProgram && (
        <div className="w-full flex items-center justify-center pb-10">
          <Button
            variant="external"
            href={challengeData.detailedProgram.url || ''}
            theme="orange"
          >
            Detailed program
          </Button>
        </div>
      )}

      {/* Timeline Section */}
      {challengeData?.timelineCollection?.items &&
        challengeData.timelineCollection.items.length > 0 && (
          <>
            <ParagraphTitle text="Events schedule" />
            <div className="py-16 max-w-screen-lg lg:mx-auto px-5 lg:px-0">
              <Timeline
                data={
                  challengeData.timelineCollection.items
                    .filter(
                      (
                        item: {
                          date?: string | null;
                          title?: string | null;
                          description?: string | null;
                        } | null,
                      ) => item !== null,
                    )
                    .map(
                      (
                        item: {
                          date?: string | null;
                          title?: string | null;
                          description?: string | null;
                        } | null,
                      ) => ({
                        date: formatDate(item?.date || '') || '',
                        title: item?.title || '',
                        body: item?.description || '',
                      }),
                    ) || []
                }
                theme="split"
              />
            </div>
          </>
        )}

      {/* Organizers Section */}
      {challengeData?.organizersCollection?.items &&
        challengeData.organizersCollection.items.length > 0 && (
          <div className="py-16 bg-ec_background dark:bg-ec_background_darkmode transition-colors duration-300">
            <Sponsors
              title="Organizers"
              logos={challengeData.organizersCollection.items.map(
                (
                  entry: {
                    name?: string | null;
                    url?: string | null;
                    logo?: { url?: string | null } | null;
                    logoDark?: { url?: string | null } | null;
                  } | null,
                ) => ({
                  src: entry?.logo?.url || '',
                  darkSrc: entry?.logoDark?.url || entry?.logo?.url || '',
                  alt: entry?.name || '',
                  href: entry?.url || '',
                }),
              )}
            />
          </div>
        )}

      {/* Join Us Bar */}
      <JoinUsBar
        title={`Apply for USC ${year}`}
        color="blue"
        buttonText="Apply here"
        to={challengeData?.signUpLink || ''}
        disabled={!submissionsEnabled}
      />

      {/* Sponsors Section */}
      {challengeData?.sponsorsCollection?.items &&
        challengeData.sponsorsCollection.items.length > 0 && (
          <div className="py-16 bg-ec_background dark:bg-ec_background_darkmode transition-colors duration-300">
            <Sponsors
              title="Partners"
              logos={challengeData.sponsorsCollection.items.map(
                (
                  sponsor: {
                    name?: string | null;
                    url?: string | null;
                    logo?: { url?: string | null } | null;
                    logoDark?: { url?: string | null } | null;
                  } | null,
                ) => ({
                  src: sponsor?.logo?.url || '',
                  darkSrc: sponsor?.logoDark?.url || sponsor?.logo?.url || '',
                  alt: sponsor?.name || '',
                  href: sponsor?.url || '',
                }),
              )}
            />
          </div>
        )}
    </div>
  );
};

export default StartupChallengeYear;
