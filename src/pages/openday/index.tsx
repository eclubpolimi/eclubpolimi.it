import Button from "components/Button";
import JoinUsBar from "components/JoinUsBar";
import LabeledOutlineCard from "components/LabeledOutlineCard";
import SiteData from "Data";

import PeopleSvg from "assets/people_graphics.svg";
import LogoStartupChallenge from "assets/logo_startupchallenge.jpg";
import Munich2 from "assets/munich2.jpg";
import Munich3 from "assets/munich3.jpg";
import Image from "next/image";

const OpenDay = () => {
  return (
    <div className="w-full">
      <div className="pb-10 pt-4 md:py-10 px-5 md:px-20 flex flex-col-reverse md:flex-row text-center md:text-left items-center md:gap-8">
        <div className="w-full md:w-1/2 md:pl-6 xl:pl-28">
          <h1 className="mt-8 text-slate-800 font-extrabold text-4xl leading-tight header-squares-decoration">
            E-Club ×{" "}
            <a
              className="underline underline-offset-4 text-slate-600 hover:text-slate-500"
              href="https://atupertu.svoltastudenti.it/"
            >
              ATuxTu 2022
            </a>
          </h1>
          <span className="mt-3 text-slate-600 font-semibold text-xl block">
            Join a community of entrepreneurs and reach your full potential
          </span>
          <Button
            to={SiteData.JoinTarget}
            theme="orange"
            className="mt-8 align-middle"
          >
            Join Us
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image className="lg:w-3/4" src={PeopleSvg} alt="People graphics" />
        </div>
      </div>
      <div className="px-5 md:px-40 py-12 flex flex-col gap-16 bg-slate-50">
        <div className="flex flex-col xl:flex-row justify-center items-center">
          <LabeledOutlineCard
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
          <div className=" xl:w-1/2 xl:-ml-28  border border-solid border-ec_orange rounded-xl p-2">
            <Image
              src={Munich2}
              className="rounded-xl place-self-center"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col-reverse xl:flex-row justify-center items-center">
          <div className="xl:w-1/2 xl:-mr-28  border border-solid border-ec_blue rounded-xl p-2">
            <Image
              src={LogoStartupChallenge}
              className="rounded-xl place-self-center"
              alt=""
            />
          </div>
          <LabeledOutlineCard
            labelDx
            invertedColors
            className="place-self-center xl:w-4/5"
            label="Startup Challenge"
            text={
              <p>
                The challenge will bring together top university students from
                Politecnico and Bocconi passionate about entrepreneurship and
                will challenge them with a real world problem to solve. Moreover
                there will be keynote speakers to assist the realization of this
                project through many seminars.
                <br />
                <br />
                The startup challenge aims to combine events with entrepreneurs,
                workshops and networking initiatives.
              </p>
            }
          />
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center">
          <LabeledOutlineCard
            className="place-self-center xl:w-4/5"
            label="Travel"
            text={
              <p>
                We discover Europe and its active startup ecosystems! We will
                not only bring you visit startups and its founders, but also you
                will have the chance to have a taste of different cultures all
                around the old continent!
              </p>
            }
          />
          <div className=" xl:w-1/2 xl:-ml-28  border border-solid border-ec_orange rounded-xl p-2">
            <Image
              src={Munich3}
              className="rounded-xl place-self-center"
              alt=""
            />
          </div>
        </div>
      </div>
      <JoinUsBar to={SiteData.JoinTarget} />
    </div>
  );
};

export default OpenDay;
