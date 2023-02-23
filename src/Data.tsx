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

import { TimelineEvent } from "components/Timeline/Timeline";
import { ReactNode } from "react";

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
  static OpenDayTarget = "/openday";
  static NewsTarget = "/news";
  static StartupChallengeTarget = "/startupchallenge";
  static TravelTarget = "/trips";

  // NAVBAR
  static NavbarItems: Array<{ type: "link" | "button"; content: ReactNode }> = [
    {
      content: <a href={this.AboutUsTarget}>About us</a>,
      type: "link",
    },
    {
      content: <a href={this.EventsTarget}>Events</a>,
      type: "link",
    },
    {
      content: <a href={this.StartupChallengeTarget}>Startup Challenge</a>,
      type: "link",
    },
    {
      content: <a href={this.PiaTarget}>Passion in Action</a>,
      type: "link",
    },
    {
      content: <a href={this.TravelTarget}>Travel</a>,
      type: "link",
    },
    {
      content: <a href={this.NetworkTarget}>Network</a>,
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
      src: "/netsonsImages/Astra.png",
      href: "https://astraincubator.com",
      alt: "Astra incubator",
    },
    {
      src: "/netsonsImages/Tutored.png",
      href: "https://www.tutored.me",
      alt: "Tutored",
    },
    {
      src: "/netsonsImages/Polihub.png",
      href: "https://www.polihub.it/it/",
      alt: "Polihub",
    },
    {
      src: "/netsonsImages/Jemp.png",
      href: "https://www.jemp.it",
      alt: "Jemp",
    },
  ];

  static LogoLearnNetworkBuild = logoLearnNetworkBuild;

  static HomepageHeroBackground = homepageHeroBackground;

  // ABOUT US
  static aboutUsHeroBackground = "/netsonsImages/aboutUs_hero.png";

  static GetTeams() {
    return getTeams();
  }

  // LESSONS PIA (placeholder)
  static LessonsPIA = pialessons;
  static PIAHeroBackground = "/netsonsImages/pia_hero.png";

  // JOIN US
  static ApplyDriverLink = "https://forms.gle/qnRBCQGmdbVdXzxdA";
  static ApplyExplorerLink = "https://forms.gle/cPn2VyGoZbWeSHv1A";
  static ApplyStartupChallenge = "https://forms.gle/e7wU4aqDpdxAo69R8";

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
      image: "/netsonsImages/carousel1.jpg",
    },
    {
      image: "/netsonsImages/carousel2.jpg",
    },
    {
      image: "/netsonsImages/carousel3.jpg",
    },
    {
      image: "/netsonsImages/carousel4.jpg",
    },
    {
      image: "/netsonsImages/carousel5.jpg",
    },
  ];

  static eventsList = [
    {
      date: "21 September 2022",
      title: "Welcoming aperitivo",
      body: "Entrepreneurship is not only working but also networking! Here in E-Club we give value to this pillar and we think that meeting each other is fundamental to create a strong bond with people! In our first aperitivo we met many new people, can’t wait for the next one!",
    },
    {
      date: "03 October 2022",
      title: "Aperitivo with Smush Materials",
      body: "We had the opportunity to meet Smush Materials, the winning startup of the XIII edition of Polihub's Switch to product! They transform industrial agri-food waste into raw materials for the production of green solutions in the fields of sustainable packaging and thermal and acoustic insulation by transforming mycelium, the root system of mushrooms.",
    },
    {
      date: "10 October 2022",
      title: "Learning Buyer personas for marketing",
      body: "Workshop held by Alessio Sorrentino, Marketing Manager of 7Ads- eCommerce Advertising. After defining what digital marketing is really about, we discovered the roadmap to create Buyer Personas - the same used in the framework of 7Ads-eCommerce Advertising to create their advertising plans. This roadmap can also be used to identify your audience and creat marketing content to promote your personal brand.",
    },
    {
      date: "24 October 2022",
      title: "In-company visit at Moviri",
      body: "Moviri, an international tech company based in Milan. It was such a pleasure to be hosted and have the opportunity to listen to their story, from the beginnings to the success. Thanks to Moviri, we learnt to never give up!",
    },
    {
      date: "12 November 2022",
      title: "Business game held by Con4us",
      body: "In E-Club we like to face new challenges. We had the opportunity to join new people from other clubs and universities for one day and to compete in teams against each others by creating a new service in Con4us app. The theme was about connection between students, one of the main goal of Con4us",
    },
  ];

  //NETWORK
  static NetworkHeroImage = networkHeroImage;
  static NetworkHeroBackground = "/netsonsImages/network_hero.jpg";
  static SC2022_board = "/startupChallenge/previousYear/SC2022_board.jpg";

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
  static StartupChallengePDF =
    "/startupChallenge/USC Detailed event guide 23.pdf";

  static StartupChallengeOrgLogos = [
    {
      src: "/startupChallenge/organizers/eclub_polimi.png",
      href: "https://eclubpolimi.it",
      alt: "Eclub polimi",
    },
    {
      src: "/startupChallenge/organizers/eclub_bocconi.webp",
      href: "https://www.eclubbocconi.com",
      alt: "Eclub bocconi",
    },
  ];

  static StartupChallengePartnerLogos = [
    {
      src: "/startupChallenge/organizers/polihub.png",
      href: "https://www.polihub.it/en/",
      alt: "Polihub",
    },
    {
      src: "/startupChallenge/organizers/b4i.svg",
      href: "https://www.b4i.unibocconi.it/",
      alt: "B4I",
    },
    {
      src: "/startupChallenge/a2a.png",
      href: "https://www.a2aenergia.eu/",
      alt: "A2A",
    },
    {
      src: "/startupChallenge/moneyit_logo.png",
      href: "https://www.money.it/",
      alt: "Money.it",
    },
    {
      src: "/startupChallenge/osservatori_logo.png",
      href: "https://www.osservatori.net/it/home",
      alt: "Osservatori.net",
    },
    {
      src: "/startupChallenge/fondazioneunimi_logo.png",
      href: "https://www.unimi.it/",
      alt: "Università degli Studi di Milano",
    },
    {
      src: "/startupChallenge/impactconsulting_logo.png",
      href: "https://www.ic-impactconsulting.com/",
      alt: "Impact Consulting Milan",
    },
    {
      src: "/startupChallenge/hellofresh_logo.png",
      href: "https://www.hellofresh.it/",
      alt: "Hello Fresh",
    },
    {
      src: "/startupChallenge/jecomm_logo.png",
      href: "https://jecomm.it/",
      alt: "JECoMM",
    },
    {
      src: "/startupChallenge/alumnieclub_logo.png",
      href: "",
      alt: "Alumni E-Club",
    },
  ];

  static StartupChallengeSponsorsLogos2022 = [
    {
      src: "/startupChallenge/sponsors/atm.png",
      href: "https://atm.it",
      alt: "Atm",
    },
    {
      src: "/startupChallenge/sponsors/dott.png",
      href: "https://www.dott.com",
      alt: "Dott",
    },
    {
      src: "/startupChallenge/sponsors/macai.jpg",
      href: "#",
      alt: "Macai",
    },
    {
      src: "/startupChallenge/sponsors/mammt.jpg",
      href: "#",
      alt: "Mammt",
    },
    {
      src: "/startupChallenge/sponsors/utravel.png",
      href: "#",
      alt: "uTravel",
    },
  ];

  static StartupChallengeTimeline: Array<TimelineEvent> = [
    {
      date: "24 March 2023",
      title: "[Bocconi] The opening ceremony and presentation of the challenge",
      body: "",
    },
    {
      date: "25 March 2023",
      title:
        "[Bocconi] Working on the challenge, seminars and workshops to help develop your startup ideas",
      body: "",
    },
    {
      date: "25-31 March 2023",
      title:
        "Team works on their own to develop their presentation and prototype",
      body: "",
    },
    {
      date: "31 March 2023",
      title:
        "[Polimi] Working on the pitch, seminars and workshops to help deliver the perfect pitch",
      body: "",
    },
    {
      date: "1 April 2023",
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
    affiliateLink: "https://smushmaterials.com",
    eventName: "Smush Materials",
    eventInfo: "Just Café - October 3, 2022 - 7PM",
    eventType: "Meet the startup",
  };
}
