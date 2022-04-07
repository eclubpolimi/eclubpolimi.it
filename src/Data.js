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
      content: <Link to={this.PiaTarget}>Passion in Action</Link>,
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
  static ApplyDriverLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSfnsrBYQGg5LEStS9z3jBYVYcQvCbdhVWDYIYbMeOZNhTYu7w/viewform";
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
}
