import React from "react";

import Button from "components/Button";

import LogoStartupChallenge from "assets/logo_startupchallenge.jpg";

const StartupChallenge = () => {
  return (
    <div className="w-full">
      <div
        className="md:mx-auto md:my-28 px-5 md:pl-10 py-10 md:py-0 max-w-6xl
      flex flex-col-reverse md:flex-row text-center md:text-left items-center md:gap-8"
      >
        <div className="w-full md:w-1/2">
          <h1
            className="mt-8 text-slate-800 font-extrabold text-4xl leading-tight relative
            after:hidden md:after:block after:absolute after:bg-yellow-500
            after:-top-8 after:left-0 after:transform
            after:content-[''] after:w-3 after:h-3
            before:hidden md:before:block before:absolute before:bg-stone-800
            before:-top-10 before:left-2 before:transform
            before:content-[''] before:w-3 before:h-3"
          >
            This page is under construction...
          </h1>
          <span className="mt-3 text-slate-600 font-semibold text-xl block">
            ....but it will appear soon, pinky promise! In the meantime,
            click on the button below to get more info about the startup challenge
          </span>
          <Button
            to="https://www.eclubbocconi.com/universitystartupchallenge"
            theme="orange"
            className="mt-8 align-middle"
          >
            More info
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="lg:w-3/4"
            src={LogoStartupChallenge}
            alt="Startup challenge logo"
          />
        </div>
      </div>
    </div>
  );
};

export default StartupChallenge;
