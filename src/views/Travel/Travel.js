import React from "react";

import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TravelBar from "components/TravelBar";
import Description from "components/Description";
import Timeline from "components/Timeline";
import TravelPlaceholder from "assets/travelMainBackground.webp";

const timelineData = [
  {
    date: "17/11/2022",
    title: "Day 1",
    children: (
      <ul className="list-disc ml-4 mt-2">
        <li>Thursday morning: meeting at Milan Linate Airport</li>
        <li>
          <FontAwesomeIcon icon={faClock} /> 09:20 AM: departure from Milan
          Linate Airport with ITA flight
        </li>
        <li>
          <FontAwesomeIcon icon={faClock} /> 11:20 AM: landing at Amsterdam
          Schiphol
        </li>
        <li>Afternoon: visit to the first startup</li>
      </ul>
    ),
  },
  {
    date: "18/11/2022",
    title: "Day 2",
    children: (
      <ul className="list-disc ml-4 mt-2">
        <li>
          Friday morning: visit to the historical port and neighborhood & lunch
          at the biggest food market in the Netherlands
        </li>
        <li>Friday afternoon: visit to the second startup</li>
        <li>Bitterballen and drinks together in Delfshaven!</li>
      </ul>
    ),
  },
  {
    date: "19/11/2022",
    title: "Day 3",
    children: (
      <ul className="list-disc ml-4 mt-2">
        <li>
          Saturday morning: train to Delft and visit to the typical Saturday
          market
        </li>
        <li>Saturday afternoon: free afternoon in Delft</li>
        <li>Saturday night: Pubquiz</li>
      </ul>
    ),
  },
  {
    date: "20/11/2022",
    title: "Day 4",
    children: (
      <ul className="list-disc ml-4 mt-2">
        <li>Free morning</li>
        <li>
          <FontAwesomeIcon icon={faClock} /> 5:00 PM: train to Amsterdam
          Schiphol
        </li>
        <li>
          <FontAwesomeIcon icon={faClock} /> 7:50 PM: flight to Milano Linate
        </li>
        <li>
          <FontAwesomeIcon icon={faClock} /> 9:25 PM: landing at Milano Linate
          airport
        </li>
      </ul>
    ),
  },
];

const registerLink = "";

const Travel = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="md:w-full md:absolute top-1/2 right-0 md:-translate-y-1/2 -z-10"
          src={TravelPlaceholder}
          alt="Travel preview"
        />
        <div className="md:backdrop-blur-xl bg-white/30">
          <div className="py-10 md:py-28 px-5 sm:px-8 flex flex-col text-center md:text-left items-center">
            <h1 className="md:mt-8 text-slate-800 font-extrabold text-4xl leading-tight header-squares-decoration w-fit">
              E-Club goes to the Netherlands
            </h1>
            <span className="mt-3 text-slate-700 font-semibold text-xl block w-fit">
              Discovering the Dutch startup ecosystem
            </span>
            <TravelBar
              className="mt-8 md:mt-12 w-full lg:w-2/3"
              info={{
                place: "Rotterdam",
                date: "17/11/2022",
                peoples: "30",
                price: "€205,00",
                priceTerms: true,
              }}
              registerLink={registerLink}
              disabled
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <Description
          className="w-4/5 mx-auto font-medium text-slate-700 text-justify"
          title="Why should I go to the Netherlands?"
        >
          <p>
            You will have the opportunity to dive into one of the most dynamic
            startup ecosystems in Europe. You’ll get to see early-seed startups,
            the spectacular modern architecture of Rotterdam and the student
            life Delft is famous for.
            <br />
            <br />
            Besides the visits to the Dutch startup world, you’ll have the
            opportunity to spend a nice and relaxed weekend enjoying a
            north-European experience surrounded by bikes, canals and the
            uniquely international Dutch culture!
            <br />
            <br />
            Join our trip to Rotterdam & Delft from November 17th through
            November 20th to explore these two cities and discover the Dutch
            startup ecosystem through exclusive company visits!
            <br />
            <br />
            <strong className="block -mx-4 p-4 bg-white rounded-xl border-solid border-[1px] border-slate-200">
              Registrations open{" "}
              <mark className="bg-orange-200 px-1">October 6th at 12:00</mark>.
              Only 30 tickets are available and they'll run out quickly. Save
              the date and train your fingers in the meantime!
            </strong>
            <br />
            <span className="text-sm italic text-slate-500">
              * You’ll have to pay €325,00 upfront, but we will refund €120,00
              after the trip. Price includes: A/R flight, train tickets, 3
              nights accommodation, visit to startups and accelerator, travel
              and health insurance.
            </span>
          </p>
        </Description>
      </div>
      <Timeline
        theme="split"
        data={timelineData}
        className="py-16 max-w-screen-lg lg:mx-auto px-5 lg:px-0 font-medium text-slate-700"
      />
    </div>
  );
};

export default Travel;
