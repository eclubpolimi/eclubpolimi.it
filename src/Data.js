import { Link } from "react-router-dom";
import Button from "components/Button";

import { getTeams } from "assets/teams";
import pialessons from "assets/pialessons";

import logoLearnNetworkBuild from "assets/logo_learn_network_build.svg";
import homepageHeroBackground from "assets/homepage_hero.jpg";
import logoWhite from "assets/logo_white.svg";

import networkHeroImage from "assets/eclub-network.png";
import logo1 from "assets/logo-colors.png";
import logo2 from "assets/img-eclub-bocconi.png";
import logo3 from "assets/img-eclub-pavia.png";

import b4i from "assets/startupChallenge/organizers/b4i.svg";
import eclub_bocconi from "assets/startupChallenge/organizers/eclub_bocconi.webp";
import eclub_polimi from "assets/startupChallenge/organizers/eclub_polimi.png";
import polihub from "assets/startupChallenge/organizers/polihub.png";

import atm from "assets/startupChallenge/sponsors/atm.png";
import dott from "assets/startupChallenge/sponsors/dott.png";
import macai from "assets/startupChallenge/sponsors/macai.jpg";
import utravel from "assets/startupChallenge/sponsors/utravel.png";
import mammt from "assets/startupChallenge/sponsors/mammt.jpg";

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
  static GuestsTarget = "/guests";
  static PiaTarget = "/passion-in-action";
  static NetworkTarget = "/network";
  static JoinTarget = "/join";
  static OpenDayTarget = "/openday";
  static NewsTarget = "/news";
  static StartupChallengeTarget = "/startupchallenge";
  static TripsTarget = "/trips";
  static TravelTarget = "/travel";

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
      content: <Link to={this.StartupChallengeTarget}>Startup Challenge</Link>,
      type: "link",
    },
    {
      content: <Link to={this.PiaTarget}>Passion in Action</Link>,
      type: "link",
    },
    {
      content: <Link to={this.TravelTarget}>Travel</Link>,
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
    {
      src: "/images/data/Astra.png",
      href: "https://astraincubator.com",
      alt: "Astra incubator",
    },
    {
      src: "/images/data/Tutored.png",
      href: "https://www.tutored.me",
      alt: "Tutored",
    },
    {
      src: "/images/data/Polihub.png",
      href: "https://www.polihub.it/it/",
      alt: "Polihub",
    },
    {
      src: "/images/data/Jemp.png",
      href: "https://www.jemp.it",
      alt: "Jemp",
    },
  ];

  static LogoLearnNetworkBuild = logoLearnNetworkBuild;

  static HomepageHeroBackground = homepageHeroBackground;

  // ABOUT US
  static aboutUsHeroBackground = "/images/data/aboutUs_hero.png";

  static GetTeams() {
    return getTeams();
  }

  // LESSONS PIA (placeholder)
  static LessonsPIA = pialessons;
  static PIAHeroBackground = "/images/data/pia_hero.png";

  // JOIN US
  static ApplyDriverLink = "https://forms.gle/juKWjhi2LsicZC896";
  static ApplyExplorerLink = "https://forms.gle/cPn2VyGoZbWeSHv1A";

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
      image: "/images/data/carousel1.jpg",
    },
    {
      image: "/images/data/carousel2.jpg",
    },
    {
      image: "/images/data/carousel3.jpg",
    },
    {
      image: "/images/data/carousel4.jpg",
    },
    {
      image: "/images/data/carousel5.jpg",
    },
  ];

  static eventsList = [
    {
      date: "03 March 2022",
      title: "Ibrida Birra",
      body: "Ibrida Birra is a groundbreaking startup that had the crazy idea of giving a new life to surplus bread by crafting it into beers. During this insightful aperitivo, we will discover the journey of four young entrepreneurs who managed to merge the social symbol of beer with circular economy and, at the same time, support small businesses in the area of Milan.",
    },
    {
      date: "15 March 2022",
      title: "Inspirational talk by Augusto Metidieri",
      body: "Elected “Most Influential CEO Europe 2019 for Humancentric Driven Innovation”, Augusto Metidieri is nowadays one of the most interesting personalities in the field of business design, leadership and innovation. Since 2011, Augusto Mitidieri has covered the position of Corporate CEO of the Sintetica Group where he implemented a successful strategic vision which places the individual at the very centre of corporate decisions. The Entrepreneurship Club Polimi is thrilled to welcome Augusto in Politecnico for a live Inspirational Talk during which he will share the most salient insights on his career path.",
    },
  ];

  //NETWORK
  static NetworkHeroImage = networkHeroImage;
  static NetworkHeroBackground = "/images/data/network_hero.jpg";

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

  // STARTUP CHALLANGE
  static StartupChallengeOrgLogos = [
    {
      src: eclub_polimi,
      href: "https://eclubpolimi.it",
      alt: "Eclub polimi",
    },
    {
      src: eclub_bocconi,
      href: "https://www.eclubbocconi.com",
      alt: "Eclub bocconi",
    },
    {
      src: polihub,
      href: "#",
      alt: "Polihub",
    },
    {
      src: b4i,
      href: "#",
      alt: "B4I",
    },
  ];

  static StartupChallengeSponsorsLogos = [
    {
      src: atm,
      href: "https://atm.it",
      alt: "Atm",
    },
    {
      src: dott,
      href: "https://www.dott.com",
      alt: "Dott",
    },
    {
      src: macai,
      href: "#",
      alt: "Macai",
    },
    {
      src: mammt,
      href: "#",
      alt: "Mammt",
    },
    {
      src: utravel,
      href: "#",
      alt: "uTravel",
    },
  ];

  static StartupChallengeTimeline = [
    {
      date: "29 April 2022",
      title: "[Bocconi] The opening ceremony and presentation of the challenge",
      body: "",
    },
    {
      date: "30 April 2022",
      title:
        "[Bocconi] Working on the challenge, seminars and workshops to help develop your startup ideas",
      body: "",
    },
    {
      date: "1-5 May 2022",
      title:
        "Team works on their own to develop their presentation and prototype",
      body: "",
    },
    {
      date: "6 May 2022",
      title:
        "[Polimi] Working on the pitch, seminars and workshops to help deliver the perfect pitch",
      body: "",
    },
    {
      date: "7 May 2022",
      title:
        "[Polimi] Pitch presentations, startup fair and closing award ceremony",
      body: "",
    },
  ];

  static SmushMaterialsEventBanner = {
    imgSource:
      "https://smushmaterials.com/wp-content/uploads/2022/04/Smush_cmyk-1.png",
    registerLink:
      "https://www.instagram.com/p/Ci-zob4K-GS/?igshid=YmMyMTA2M2Y=",
    affliateLink: "https://smushmaterials.com",
    eventName: "Smush Materials",
    eventInfo: "Just Café - October 3, 2022 - 7PM",
    eventType: "Meet the startup",
  };
}
