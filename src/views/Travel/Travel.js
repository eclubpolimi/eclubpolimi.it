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
        <li>Arrival in Bali</li>
        <li>Check-in at the hotel</li>
        <li>Free time</li>
      </ul>
    ),
  },
  {
    date: "18/11/2022",
    title: "Day 2",
    children: (
      <ul className="list-disc ml-4 mt-2">
        <li>Arrival in Bali</li>
        <li>Check-in at the hotel</li>
        <li>Free time</li>
      </ul>
    ),
  },
  {
    date: "19/11/2022",
    title: "Day 3",
    children: (
      <ul className="list-disc ml-4 mt-2">
        <li>Arrival in Bali</li>
        <li>Check-in at the hotel</li>
        <li>Free time</li>
      </ul>
    ),
  },
  {
    date: "20/11/2022",
    title: "Day 4",
    children: (
      <ul className="list-disc ml-4 mt-2">
        <li>Arrival in Bali</li>
        <li>Check-in at the hotel</li>
        <li>Free time</li>
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
              Subtitle placeholder
            </span>
            <TravelBar
              className="mt-8 md:mt-12 w-full lg:w-2/3"
              info={{
                place: "Rotterdam",
                date: "17/11/2022",
                peoples: "55",
                price: "€205,00",
                priceTerms: "after PoliMi discount",
              }}
              registerLink={registerLink}
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <Description className="w-4/5 mx-auto" title="Trip to the Netherlands">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl eget aliquam lacinia, nunc nisl aliquet nisl, eget
            aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget aliquam
            lacinia, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet
            nisl. Sed tincidunt, nisl eget aliquam lacinia, nunc nisl aliquet
            <br />
            <br />
            nisl, eget aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget
            aliquam lacinia, nunc nisl aliquet nisl, eget aliquam nisl nisl sit
            amet nisl. Sed tincidunt, nisl eget aliquam lacinia, nunc nisl
            aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed
            <br />
            <br />
            tincidunt, nisl eget aliquam lacinia, nunc nisl aliquet nisl, eget
            aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget aliquam
            lacinia, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet
            nisl. Sed tincidunt, nisl eget aliquam lacinia, nunc nisl aliquet
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
