import { Link } from "react-router-dom";
import Button from "components/Button";

import { getTeams } from "assets/teams";
import pialessons from "assets/pialessons";

import Image1 from "assets/test1.png";
import Image2 from "assets/test2.png";
import Image3 from "assets/test3.png";

import logoLearnNetworkBuild from "assets/logo_learn_network_build.svg";
import homepageHeroBackground from "assets/homepage_hero.jpg";
import logoWhite from "assets/logo_white.svg";

import imageLogoPIA from "assets/img-lessons-pia-346x220.jpg";

import networkHeroImage from "assets/eclub-network.png";
import logo1 from "assets/logo-colors.png";
import logo2 from "assets/img-eclub-bocconi.png";
import logo3 from "assets/img-eclub-pavia.png";

/**
 * @description This class holds global, static data, to avoid duplication between production code and tests
 * @note All members of this class must be declared static
 */
export default class SiteData {
  // COMMON
  static LogoWhite = logoWhite;

  // SUBPAGE TARGETS
  static HomeTarget = "/";
  static AboutUsTarget = "/about";
  static EventsTarget = "/events";
  static TripsTarget = "/trips";
  static GuestsTarget = "/guests";
  static PiaTarget = "/passion-in-action";
  static NetworkTarget = "/network";
  static JoinTarget = "/join";

  // NAVBAR
  static NavbarItems = [
    {
      content: <Link to={this.AboutUsTarget}>About us</Link>,
      type: "link",
    },
    {
      content: <Link to={this.EventsTarget}>Events</Link>,
      type: "link",
    },
    {
      content: <Link to={this.PiaTarget}>Passion in action</Link>,
      type: "link",
    },
    {
      content: <Link to={this.NetworkTarget}>Network</Link>,
      type: "link",
    },
    {
      content: <Button to={this.JoinTarget}>Join us</Button>,
      type: "button",
    },
  ];

  // HOMEPAGE
  static Sponsors = [
    { src: Image1, href: "#", alt: "Test1" },
    { src: Image2, href: "#", alt: "Test2" },
    { src: Image3, href: "#", alt: "Test3" },
    { src: Image1, href: "#", alt: "Test1" },
    { src: Image2, href: "#", alt: "Test2" },
    { src: Image3, href: "#", alt: "Test3" },
    { src: Image1, href: "#", alt: "Test1" },
    { src: Image2, href: "#", alt: "Test2" },
  ];

  static LogoLearnNetworkBuild = logoLearnNetworkBuild;

  static HomepageHeroBackground = homepageHeroBackground;

  // ABOUT US
  static GetTeams() {
    return getTeams();
  }

  // LESSONS PIA (placeholder)
  static LessonsPIA = pialessons;

  static PIAHeroBackground = imageLogoPIA;

  // JOIN US
  static ApplyDriverLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSd3_-zGhEsoeedX0v49roaxc_k44Gxa1oU3vWeG4XxSITmCGA/viewform";
  static ApplyExplorerLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSeRpSAN8E9W7AG5xgoL3h4Ysu8c76_NWzEJmBFZYmuj_dzvUg/viewform";

  // JOIN US CARD EXPLORER
  static explorerAdvantages = [
    "Membership Badge",
    "Priority bookings for limited seats",
    "Access members-only events",
    "Exclusive interaction with guests",
  ];

  // JOIN US CARD DRIVER
  static driverAdvantages = [
    "Be involved in the organisation of E-Club Polimi activities",
    "Partecipate in dedicated trainings",
    "Unique personal and professional growth opportunity",
  ];

  // JOIN US CARD SPONSORS
  static sponsorAdvantages = [
    "Do you want to support us?",
    "Do you want to share your entrepreneurial experience - failure or success - with the firt entrepreneurial community of Polimi?",
  ];

  // EVENTS

  static eventsCarouselImages = [
    {
      image: "https://www.w3schools.com/howto/img_lights_wide.jpg",
    },
    {
      image: "https://www.w3schools.com/howto/img_nature_wide.jpg",
    },
    {
      image: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    },
  ];

  static eventsList = [
    {
      date: "09 November 2021",
      title: "Desacralizing Entrepreneurship with Jean-Michel Ledru",
      body: "Inspirational Talk in which the guest will destroy the myth of entrepreneurship as something realizable only by a few excellent minds. He will prove that everybody can become an entrepreneur by presenting some examples from his experience as a coach in the incubator and accelerator of EDHEC Entrepreneurs.",
    },
    {
      date: "16 November 2021",
      title: "Aperitivo with Italian Embedded",
      body: "The event will revolve around the entrepreneurial efforts in the world of embedded systems, from both the points of view of the startup and of the well-established company, addressing the problem from different perspectives.",
    },
    {
      date: "17-19 December 2021",
      title: "Trip to Turin",
      body: "Fantastic trip to discover one of the most important startup accelerators in Italy, I3P, meet the students of the Politecnico di Torino and networking with our colleagues of the Entrepreneurship Club Polito. Of course, you cannot miss a guided tour of the city and a visit to Palazzo Reale and Museo Egizio.",
    },
    {
      date: "19 December 2021",
      title: "Christmas aperitivo with Eclub Bocconi",
      body: "Aperitivo organized with our colleagues of the Entrepreneurship Club Bocconi to expand our network, create new friendships, and greet each other before the Christmas holidays.",
    },
  ];

  //NETWORK
  static NetworkHeroImage = networkHeroImage;

  static NetworkSlogan = [
    "Coming together is a beginning",
    "Staying together is a progress",
    "Working together is a success",
  ];

  static NetworkMembers = [
    { alt: "E-Club Polimi", href: "https://www.eclubpolimi.it/", src: logo1 },
    {
      alt: "E-Club Bocconi",
      href: "https://www.unibocconi.it/wps/wcm/connect/bocconi/sitopubblico_it/albero+di+navigazione/home/corsi+di+studio/studenti+iscritti/campus+life/attivita+studentesche/associazioni+studentesche/elenco+annuale/e-club",

      src: logo2,
    },
    { alt: "E-Club Pavia", href: "https://www.eclubpavia.it/", src: logo3 },
  ];
}
