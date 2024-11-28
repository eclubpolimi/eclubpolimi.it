import Image from "next/image";

import Button from "components/Button";
import Description from "components/Description";
import JoinUsBar from "components/JoinUsBar";
import ParagraphTitle from "components/ParagraphTitle";
import Sponsors from "components/Sponsors";
import Timeline from "components/Timeline";

import LogoStartupChallenge from "assets/logo_startupchallenge.jpg";
import SiteData from "Data";

import { LATEST_STARTUP_CHALLENGE_QUERY } from "data/queries";
import { StartupChallengeDataQuery } from "generated/cms/types";
import client from "utils/apollo_client";
import { formatDate } from "utils/formatting";

interface StartupChallengeProps {
  data: StartupChallengeDataQuery;
  submissionsEnabled: boolean;
}

export const getServerSideProps = async (): Promise<{
  props: StartupChallengeProps;
}> => {
  const { data } = await client.query<StartupChallengeDataQuery>({
    query: LATEST_STARTUP_CHALLENGE_QUERY,
  });

  // Determine if submissions are enabled on the server
  const submissionsEnabled = (() => {
    const pageData = data?.startupchallengeCollection?.items[0];
    if (!pageData) return false;

    const now = new Date();
    const open = new Date(pageData.submissionsOpenDate);
    const closed = new Date(pageData.submissionsCloseDate);
    return open <= now && now <= closed && pageData.submissionsOpen === true;
  })();

  return {
    props: {
      data: data,
      submissionsEnabled: submissionsEnabled,
    },
  };
};

const StartupChallenge = ({
  data,
  submissionsEnabled,
}: StartupChallengeProps) => {
  const challengeData = data?.startupchallengeCollection?.items[0];

  return (
    <div className="w-full">
      <div
        className="md:mx-auto md:my-28 px-5 sm:px-8 py-4 md:py-0 max-w-6xl
      flex flex-col-reverse md:flex-row text-center md:text-left items-center md:gap-10"
      >
        <div className="w-full md:w-1/2">
          <h1 className="mt-8 text-slate-800 font-extrabold text-4xl leading-tight header-squares-decoration">
            University Startup Challenge Milan
          </h1>
          <span className="mt-3 text-slate-600 font-semibold text-xl block">
            The first Milan startup challenge organized by Entrepreneurship Club
            Polimi and Bocconi, for all Politecnico, Bocconi, Statale and
            Cattolica students
          </span>
          <div className="flex gap-4 md:flex-row flex-col items-center pt-8">
            <Button
              to={challengeData?.signUpLink || ""}
              theme="orange"
              className="align-middle"
              disabled={!submissionsEnabled}
            >
              Apply here
            </Button>
            {challengeData?.submissionsOpenDate && (
              <p className="text-sm text-gray-400">
                Registrations open on{" "}
                {formatDate(challengeData.submissionsOpenDate)}
              </p>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            className="lg:w-3/4"
            src={LogoStartupChallenge}
            alt="Startup challenge logo"
          />
        </div>
      </div>
      <div className="py-0 bg-slate-50">
        <Sponsors
          title="Organizers in partnership with"
          logos={
            challengeData?.organizersCollection?.items.map((entry) => ({
              src: entry?.logo?.url || "",
              alt: entry?.name || "",
              href: entry?.url || "",
            })) || []
          }
        />
      </div>
      <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Description title="A two-weekend entrepreneurship event and competition">
          <p className="text-justify">
            The University Startup challenge is a unique event that brings
            together Politecnico, Bocconi, Statale and Cattolica students with
            the goal of delivering a groundbreaking start-up idea to solve the
            challenge proposed by our partners. The event will be held in person
            at Politecnico and Bocconi campuses, and it will include seminars,
            workshops and networking time. Participants will be given a
            challenge by the partner companies, and they will work together in
            groups of 4-6 people to create an innovative startup idea that will
            help solve a practical problem for the city of Milan. The finalists
            will present their startup pitch in front of a jury of experts and
            the best teams will be rewarded!
          </p>
        </Description>
      </div>
      {challengeData?.detailedProgramDescription && (
        <div className="mb-2 text-sm text-gray-400 text-center">
          {challengeData.detailedProgramDescription}
        </div>
      )}
      <div className="w-full flex items-center justify-center pb-10">
        <Button
          forceAnchor
          to={challengeData?.detailedProgram?.url || ""}
          theme="orange"
        >
          Detailed program
        </Button>
      </div>
      <ParagraphTitle text="Events schedule" />
      <div className="py-16 max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Timeline
          data={
            challengeData?.timelineCollection?.items.map((item) => ({
              date: formatDate(item?.date) || "",
              title: item?.title || "",
              body: item?.description || "",
            })) || []
          }
          theme="split"
        />
      </div>
      <JoinUsBar
        title="Registrations open on March 22nd, 2024"
        color="blue"
        buttonText="Apply here"
        to={challengeData?.signUpLink || ""}
        disabled={!submissionsEnabled}
      />
      <div className="py-0 bg-slate-50">
        <Sponsors
          title="The partners of last year's edition"
          logos={
            challengeData?.sponsorsCollection?.items.map((sponsor) => ({
              src: sponsor?.logo?.url || "",
              alt: sponsor?.name || "",
              href: sponsor?.url || "",
            })) || []
          }
        />
        <p className="text-right text-xs">
          {" "}
          *Iniziativa realizzata con il contributo del Politecnico di Milano.{" "}
        </p>
      </div>
      <div className="lg:px-0 py-0 relative w-full">
        <Image
          src={SiteData.SC2022_board}
          className="object-cover -z-10 brightness-75 w-full h-auto"
          alt="Images SC 2022"
          width={1920 * 0.75}
          height={1080 * 0.75}
        />
        <div
          className="absolute h-min lg:py-2 rounded-xl md:inset-x-1/3 md:top-8 top-4 flex flex-col"
          title="Last Year Event"
        >
          <h1 className="md:text-center lg:px-0 px-1 text-slate-100 mb-5 [text-shadow:0px_4px_8px_black]">
            Last Year Event
          </h1>
          <div className="lg:mx-auto md:px-0 px-4">
            <ul className="list-none">
              <li>
                <h1 className="lg:mt-6 text-slate-100 font-bold text-xl [text-shadow:0px_4px_8px_black]">
                  Sementa - Winner of ATM Prize
                </h1>
              </li>
              <li>
                <h1 className="lg:mt-6 text-slate-100 font-bold text-xl [text-shadow:0px_4px_8px_black]">
                  Neunek - Winner of PoliHub Prize
                </h1>
              </li>
              <li>
                <h1 className="lg:mt-6 text-slate-100 font-bold text-xl [text-shadow:0px_4px_8px_black]">
                  Specis - Winner of B4i Prize
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupChallenge;
