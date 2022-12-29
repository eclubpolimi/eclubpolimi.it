import Button from "components/Button";
import Sponsors from "components/Sponsors";
import Timeline from "components/Timeline";

import LogoStartupChallenge from "assets/logo_startupchallenge.jpg";
import Description from "components/Description";
import JoinUsBar from "components/JoinUsBar";
import ParagraphTitle from "components/ParagraphTitle";
import SiteData from "Data";
import Image from "next/image";

import { Asset, Entry } from "contentful";
import useServerSideAPI from "hooks/useServerSideAPI";
import { getContentfulData, Sources } from "utils/contentful_requests";
import { formatDate } from "utils/formatting";

interface TimelineItem {
  title: string;
  date: string;
  description?: string;
}

interface SponsorItem {
  name: string;
  logo: Asset;
  url?: string;
}

interface StartupChallengeData {
  name: string;
  signUpLink?: string;
  submissionsOpen?: boolean;
  submissionsOpenDate: string;
  submissionsCloseDate: string;
  detailedProgramDescription?: string;
  detailedProgram?: Asset;
  timeline: Array<Entry<TimelineItem>>;
  organizers: Array<Entry<SponsorItem>>;
  sponsors: Array<Entry<SponsorItem>>;
}

interface StartupChallengeProps {
  data: StartupChallengeData;
  submissionsEnabled: boolean;
}

export const getServerSideProps = async () => {
  return useServerSideAPI<StartupChallengeProps>(async () => {
    const entry = await getContentfulData<StartupChallengeData>(
      Sources.StartupChallenge
    );
    const data = entry.fields;

    // Determine if submissions are enabled on the server side
    const submissionsEnabled: boolean = (() => {
      const now = new Date();
      const open = new Date(data.submissionsOpenDate);
      const closed = new Date(data.submissionsCloseDate);
      return open <= now && now <= closed && data.submissionsOpen === true;
    })();

    return {
      data: data,
      submissionsEnabled: submissionsEnabled,
    };
  });
};

const StartupChallenge = ({
  data,
  submissionsEnabled,
}: StartupChallengeProps) => {
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
            The first Milan startup challenge for PoliMi, Bocconi and Statale
            students.
          </span>
          <div className="flex gap-4 md:flex-row flex-col items-center pt-8">
            <Button
              to={data.signUpLink || ""}
              theme="orange"
              className="align-middle"
              disabled={!submissionsEnabled}
            >
              Apply here
            </Button>
            {data.submissionsOpenDate && (
              <p className="text-sm text-gray-400">
                Registrations open on {formatDate(data.submissionsOpenDate)}
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
          title="Organizers"
          logos={data.organizers.map((entry) => ({
            src: "https:" + entry.fields.logo.fields.file.url,
            alt: entry.fields.name,
            href: entry.fields.url || "",
          }))}
        />
      </div>
      <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Description title="A two-weekend entrepreneurship event and competition">
          <p className="text-justify">
            The University Startup challenge is open to anyone who might be
            interested, but at least half of the members of each team must be
            from Politecnico di Milano or Bocconi University. It will be held in
            person on both campuses, and will include seminars, workshops and
            networking moments. Participants will be given a challenge by the
            partner company, and will work together in groups of 4-6 people to
            create an innovative startup idea that will help solve a practical
            problem for the city of Milan. The finalists will present their
            startup pitch in front of a jury of experts and the best teams will
            be rewarded!
          </p>
        </Description>
      </div>
      {data.detailedProgramDescription && (
        <div className="mb-2 text-sm text-gray-400 text-center">
          {data.detailedProgramDescription}
        </div>
      )}
      <div className="w-full flex items-center justify-center pb-10">
        <Button
          forceAnchor
          to={"https:" + data.detailedProgram?.fields.file.url || ""}
          theme="orange"
        >
          Detailed program
        </Button>
      </div>
      <ParagraphTitle text="Events schedule" />
      <div className="py-16 max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Timeline
          data={data.timeline.map((item) => ({
            date: formatDate(item.fields.date),
            title: item.fields.title,
            body: item.fields.description,
          }))}
          theme="split"
        />
      </div>
      <JoinUsBar
        title="Registrations open on March 1st, 2023"
        color="blue"
        buttonText="Apply here"
        to={data.signUpLink || ""}
        disabled={!submissionsEnabled}
      />
      <div className="py-0 bg-slate-50">
        <Sponsors
          title="Partners"
          logos={data.sponsors.map((entry) => ({
            src: "https:" + entry.fields.logo.fields.file.url,
            alt: entry.fields.name,
            href: entry.fields.url || "",
          }))}
        />
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
