import React from "react";

import Button from "components/Button";
import Sponsors from "components/Sponsors";
import Timeline from "components/Timeline";

import LogoStartupChallenge from "assets/logo_startupchallenge.jpg";
import detailed from "assets/Start_Up_Challenge_Document.pdf";
import SiteData from "Data";
import JoinUsBar from "components/JoinUsBar";
import ParagraphTitle from "components/ParagraphTitle";
import Description from "components/Description";

const StartupChallenge = () => {
  return (
    <div className="w-full">
      <div
        className="md:mx-auto md:my-28 px-5 md:pl-10 py-10 md:py-0 max-w-6xl
      flex flex-col-reverse md:flex-row text-center md:text-left items-center md:gap-8"
      >
        <div className="w-full md:w-1/2">
          <h1 className="mt-8 text-slate-800 font-extrabold text-4xl leading-tight header-squares-decoration">
            University Startup Challenge Milan
          </h1>
          <span className="mt-3 text-slate-600 font-semibold text-xl block">
            The first Milan startup challenge for Bocconi and PoliMi students.
          </span>
          <div className="flex gap-4 md:flex-row flex-col items-center pt-8">
            <Button
              to="https://docs.google.com/forms/d/e/1FAIpQLSe5mjZx5pybybNLd6kCvpOTxCX4gh8mIFN1vLm-cTmiDwQJ3g/viewform"
              theme="orange"
              className="align-middle"
            >
              Sign up
            </Button>
            <p className="text-sm text-gray-400">
              Submissions are open until April 27th
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="lg:w-3/4"
            src={LogoStartupChallenge}
            alt="Startup challenge logo"
          />
        </div>
      </div>
      <div className="py-10 bg-slate-50">
        <Sponsors
          title="Organizers"
          logos={SiteData.StartupChallengeOrgLogos}
        />
      </div>
      <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Description title="A two-weekend entrepreneurship event and competition">
          <p className="text-center">
            The University Startup challenge is open to anyone who might be
            interested, but at least half of the members of each team must be
            from Politecnico di Milano or Bocconi University. <br />
            It will be held in person on both campuses, and will include
            seminars, workshops and networking moments. <br />
            Participants will be given a challenge by the partner company, and
            will work together in groups of 4-6 people to create an innovative
            startup idea that will help solve a practical problem for the city
            of Milan. <br />
            The finalists will present their startup pitch in front of a jury of
            experts and the best teams will be rewarded!
          </p>
        </Description>
      </div>
      <ParagraphTitle text="Events schedule" />
      <div className="py-16 max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Timeline data={SiteData.StartupChallengeTimeline} theme="split" />

        <div className="flex pt-11 gap-4 md:flex-row flex-col items-center justify-center pt-8">
          <p className="text-center">Download detailed program: </p>
          <Button
            to="assets/Start_Up_Challenge_Document.pdf"
            theme="dark"
            className="align-middle"
          >
            Download
          </Button>
        </div>
      </div>
      <JoinUsBar
        title="Sign up by April 27th!"
        color="blue"
        buttonText="Sign up"
        to="https://docs.google.com/forms/d/e/1FAIpQLSe5mjZx5pybybNLd6kCvpOTxCX4gh8mIFN1vLm-cTmiDwQJ3g/viewform"
      />
      <div className="pt-5">
        <Sponsors
          title="Sponsors"
          logos={SiteData.StartupChallengeSponsorsLogos}
        />
      </div>
    </div>
  );
};

export default StartupChallenge;
