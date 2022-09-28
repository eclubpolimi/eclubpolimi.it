import React from "react";

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
        <li>Thursday morning (about 06:30): meeting at Milan Linate Airport</li>
        <li>9:20 departure from Milan Linate Airport with ITA flight</li>
        <li>11:20 landing at Amsterdam Schiphol</li>
        <li>Afternoon: visit to the first startup</li>
      </ul>
    ),
  },
  {
    date: "18/11/2022",
    title: "Day 2",
    children: (
      <ul className="list-disc ml-4 mt-2">
        <li>Friday morning: visit to the historical port and neighborhood & lunch at the biggest food market of the Netherlands</li>
        <li>Friday afternoon: visit to our second startup</li>
        <li>Bitterballen and drinks together in Delfshaven!</li>
      </ul>
    ),
  },
  {
    date: "19/11/2022",
    title: "Day 3",
    children: (
      <ul className="list-disc ml-4 mt-2">
        <li>Saturday morning: train to Delft and visit to the typical Saturday market</li>
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
        <li>free morning</li>
        <li>h 17 circa: train to Amsterdam Schiphol</li>
        <li>h 19.50: flight to Milano Linate</li>
        <li>h 21.25: landing at Milano Linate airport</li>
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
              Trip to the Netherlands
            </span>
            <TravelBar
              className="mt-8 md:mt-12 w-full lg:w-2/3"
              info={{
                place: "Rotterdam",
                date: "17/11/2022",
                peoples: "78",
                price: "€205,00",
                priceTerms: "after PoliMi discount",
              }}
              registerLink={registerLink}
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <Description className="w-4/5 mx-auto" title="Why should I go to the Netherlands?">
          <p>
              You will have the opportunity to dive into one of the most dynamic startup ecosystem in Europe, visiting the best startups in Europe. You’ll get to see:- early-seed startups;- the spectacular modern architecture of Rotterdam;- the student life Delft is famous for;Besides the visits to the Dutch startup world, you’ll have the opportunity to spend a nice and relaxed weekend enjoying a north-European experience surrounded by bikes, canals and the uniquely international Dutch culture!
            <br />
            <br />
              Join our trip to Rotterdam & Delft (November 17th-20th) to explore these two cities and discover the Dutch startup ecosystem through exclusive company visits!
            <br />
            <br />
              Registration opens on October 6th at 12. 30 tickets available, reserve your seat quickly!
          </p>
        </Description>
      </div>
      <Timeline
        theme="split"
        data={timelineData}
        className="py-16 max-w-screen-lg lg:mx-auto px-5 lg:px-0"
      />
    </div>
  );
};

export default Travel;
