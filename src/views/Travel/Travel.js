import React, { Component } from "react";

import LessonsPIA from "components/LessonsPIA";
import "./Travel.css";

import SiteData from "Data";
import Hero from "components/Hero";
import Description from "components/Description";
import ParagraphTitle from "components/ParagraphTitle";

export default class Travel extends Component {
  render() {
    return (
      <div className="travel">
        <Hero
          backgroundImage={SiteData.TravelMainBackground}
          height="500px"
          darkness={0.5}
          contentType="text"
          text="Travel"
        />
        <div className="px-5 lg:px-0 grid grid-cols-5 margin-0 min-h-screen">
          <div
            className="h-full w-full col-span-4 grid grid-cols-5 bg-cover"
            style={{
              backgroundImage:
                "url(" + SiteData.travelMainBackgroundOpacity30 + ")",
            }}
          >
            <div className="col-start-2 col-span-2">
              <Description title="Travel">
                <p>
                  <b>Lean Startup: the art to be entrepreneurial</b> is the
                  first Politecnico course organized in collaboration with a
                  student association, Entrepreneurship Club Polimi. The course
                  is organized by students, for students.
                  <br />
                  <br />
                  The objective of the course is to introduce the students to
                  the so-called "entrepreneurial mentality": a way of reasoning
                  that typically belongs to the startup world, but that can be
                  employed whatever career they will pursue.
                </p>
              </Description>
            </div>
          </div>
          <div
            className="h-128 w-128 bg-cover absolute self-center right-0 hidden lg:block"
            style={{
              backgroundImage: "url(" + SiteData.TravelMainBackground + ")",
            }}
          ></div>
        </div>

        <div
          className="px-5 lg:px-0 grid grid-cols-5 margin-0 min-h-screen bg-cover"
          style={{
            backgroundImage:
              "url(" + SiteData.travelMainBackgroundOpacity30 + ")",
          }}
        >
          <div className="col-start-2 col-span-3">
            <Description title="Travel">
              <p>
                <b>Lean Startup: the art to be entrepreneurial</b> is the first
                Politecnico course organized in collaboration with a student
                association, Entrepreneurship Club Polimi. The course is
                organized by students, for students.
                <br />
                <br />
                The objective of the course is to introduce the students to the
                so-called "entrepreneurial mentality": a way of reasoning that
                typically belongs to the startup world, but that can be employed
                whatever career they will pursue.
                <br />
                <br />
                The objective of the course is to introduce the students to the
                so-called "entrepreneurial mentality": a way of reasoning that
                typically belongs to the startup world, but that can be employed
                whatever career they will pursue.
                <br />
                <br />
                The objective of the course is to introduce the students to the
                so-called "entrepreneurial mentality": a way of reasoning that
                typically belongs to the startup world, but that can be employed
                whatever career they will pursue.
              </p>
            </Description>
          </div>
        </div>

        <div className="max-w-screen-lg lg:mx-auto px-5 lg:px-0">
          <LessonsPIA lessons={SiteData.LessonsPIA} />
        </div>
      </div>
    );
  }
}
