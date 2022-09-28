import React from "react";

import Button from "components/Button";
import JoinUsBar from "components/JoinUsBar";
import LabeledOutlineCard from "components/LabeledOutlineCard";
import Sponsors from "components/Sponsors";
import EventBanner from "components/EventBanner";
import SiteData from "Data";

import PeopleSvg from "assets/people_graphics.svg";
import LogoStartupChallenge from "assets/logo_startupchallenge.jpg";
import Munich2 from "assets/munich2.jpg";
import Munich3 from "assets/munich3.jpg";

const Home = () => {
  return (
    <div className="w-full">
      <div
        className="md:mx-auto md:my-28 px-5 sm:px-8 py-4 pb-8 md:py-0 max-w-6xl
      flex flex-col-reverse md:flex-row text-center md:text-left items-center md:gap-10"
      >
        <div className="w-full md:w-1/2">
          <h1 className="mt-8 text-slate-800 font-extrabold text-4xl leading-tight header-squares-decoration">
            Entrepreneurship Club Polimi
          </h1>
          <span className="mt-3 text-slate-600 font-semibold text-xl block">
            A community of entrepreneurial-minded people to reach your full
            potential
          </span>
          <div className="flex gap-4 md:flex-row flex-col items-center pt-8">
            <Button
              to={SiteData.JoinTarget}
              theme="orange"
              className="align-middle"
            >
              Join us
            </Button>
            <p className="hidden text-sm text-gray-400">
              Hey, this wasn't supposed to be shown!
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="lg:w-5/6" src={PeopleSvg} alt="People graphics" />
        </div>
      </div>
      <EventBanner
        bannerData={SiteData.SmushMaterialsEventBanner}
        className="bg-sky-100"
      />
      <div className="bg-slate-50 relative overflow-hidden">
        <div
          className="absolute my-6 mx-4 md:my-6 md:mx-6 inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url(${SiteData.LogoLearnNetworkBuild})`,
            backgroundRepeat: "round",
            backgroundSize: "180px",
          }}
        />
        <div className="px-5 md:px-40 py-12 flex flex-col gap-12 md:max-w-7xl mx-auto">
          <h2 className="md:text-center">What we stand for</h2>
          <LabeledOutlineCard
            className="place-self-center xl:w-4/5"
            label="Learn"
            text={
              <>
                We organize events, workshops, and meetings engaging speakers,
                entrepreneurs, and experts of the startup ecosystem who share
                their stories and knowledge with us.
              </>
            }
          />
          <LabeledOutlineCard
            invertedColors
            className="place-self-center xl:w-4/5"
            label="Network"
            text={
              <>
                We give you the opportunity to enter a heterogeneous ecosystem
                where you will be able to share ideas and get in touch with
                future partners with different skills and backgrounds.
              </>
            }
          />
          <LabeledOutlineCard
            className="place-self-center xl:w-4/5"
            label="Build"
            text={
              <>
                Once you have the expertise, knowledge, and the right network,
                all you have to do is to put your idea into practice: work in a
                team, develop, define, and scale up your project.
              </>
            }
          />
        </div>
      </div>
      <JoinUsBar to={SiteData.JoinTarget} color="blue" />
      <div className="bg-slate-50">
        <div className="px-5 md:px-40 py-12 flex flex-col gap-12 md:max-w-7xl mx-auto">
          <h2 className="md:text-center">A glimpse of what we do</h2>
          <div className="flex flex-col xl:flex-row justify-center items-center">
            <LabeledOutlineCard
              invertedColors
              className="place-self-center xl:w-4/5"
              label="Events"
              text={
                <div>
                  <p>
                    We organise different events concerning activities and
                    speeches from the best entrepreneurs and innovators of our
                    area. Some of the latest are:
                  </p>
                  <ul className="list-disc ml-4">
                    <li>Event with the startup Ibrida Birra</li>
                    <li>Inspirational talk with the CEO Augusto Mitidieri</li>
                    <li>Event with Italian Embedded</li>
                  </ul>
                </div>
              }
            />
            <div className=" xl:w-1/2 xl:-ml-28  border border-solid border-ec_blue rounded-xl p-2">
              <img
                src={Munich2}
                className="rounded-xl place-self-center"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col-reverse xl:flex-row justify-center items-center">
            <div className="xl:w-1/2 xl:-mr-28  border border-solid border-ec_orange rounded-xl p-2">
              <img
                src={LogoStartupChallenge}
                className="rounded-xl place-self-center"
                alt=""
              />
            </div>
            <LabeledOutlineCard
              labelDx
              className="place-self-center xl:w-4/5"
              label="Startup Challenge"
              text={
                <p>
                  The challenge will bring together top university students from
                  Politecnico and Bocconi passionate about entrepreneurship and
                  will challenge them with a real world problem to solve.
                  Moreover there will be keynote speakers to assist the
                  realization of this project through many seminars.
                  <br />
                  <br />
                  The startup challenge aims to combine events with
                  entrepreneurs, workshops and networking initiatives.
                </p>
              }
            />
          </div>
          <div className="flex flex-col xl:flex-row justify-center items-center">
            <LabeledOutlineCard
              invertedColors
              className="place-self-center xl:w-4/5"
              label="Travel"
              text={
                <p>
                  We discover Europe and its active startup ecosystems! We will
                  not only bring you visit startups and its founders, but also
                  you will have the chance to have a taste of different cultures
                  all around the old continent!
                </p>
              }
            />
            <div className=" xl:w-1/2 xl:-ml-28  border border-solid border-ec_blue rounded-xl p-2">
              <img
                src={Munich3}
                className="rounded-xl place-self-center"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <Sponsors
          className="max-w-screen-lg lg:mx-auto px-5 lg:px-0 py-16"
          logos={SiteData.Sponsors}
        />
      </div>
    </div>
  );
};

export default Home;
