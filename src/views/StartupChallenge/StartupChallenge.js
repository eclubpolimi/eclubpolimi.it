import React from "react";

import Button from "components/Button";
import Sponsors from "components/Sponsors";
import Timeline from "components/Timeline";

import LogoStartupChallenge from "assets/logo_startupchallenge.jpg";
import SiteData from "Data";
import JoinUsBar from "components/JoinUsBar";
import ParagraphTitle from "components/ParagraphTitle";

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
      <ParagraphTitle text="Events schedule" />
      <div className="py-16 max-w-screen-lg lg:mx-auto px-5 lg:px-0">
        <Timeline data={SiteData.StartupChallengeTimeline} theme="split" />
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
