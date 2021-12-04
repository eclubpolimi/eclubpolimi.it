import { Link } from "react-router-dom";
import Button from "components/Button";

import teams from "assets/teams";
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
  static Teams = teams;
  static aboutUsHeroBackground =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/231d53bb-9e18-4186-b7b7-40813c32777f/aboutUs-2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173751Z&X-Amz-Expires=86400&X-Amz-Signature=11ffde9c4c79033fa9ff76e105f9b40b5ed419bcb84820889c145ace52530f6f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22aboutUs-2.png%22&x-id=GetObject";

  // LESSONS PIA (placeholder)
  static LessonsPIA = pialessons;

  static PIAHeroBackground =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/07209298-c76b-4a09-bc45-1b6376859062/passionInAction-2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T174106Z&X-Amz-Expires=86400&X-Amz-Signature=e9f7d2242952d3f05d1347da15992054f9cb302353c4e595f1ff5b50dbbc3ced&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22passionInAction-2.png%22&x-id=GetObject";

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
      image:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6322138d-23fa-4c4c-b45c-0706d00e7974/2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T165759Z&X-Amz-Expires=86400&X-Amz-Signature=48c2fc414ddf14d1b0038079591a8c0aaf3e714211b0798da2eae14990712374&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%222.jpg%22&x-id=GetObject",
    },
    {
      image:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/77d6b2a1-a655-4999-bb77-70ce4e5bcc57/3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T165802Z&X-Amz-Expires=86400&X-Amz-Signature=ef3fbb92bde7a30aaf07bb4bd46e9fa3f4e804544bed9d2e610490c2f86bc082&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%223.jpg%22&x-id=GetObject",
    },
    {
      image:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/651ed302-f19b-441e-9c88-449e30621490/4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T165805Z&X-Amz-Expires=86400&X-Amz-Signature=14d71e044e66785a3e55cd8bdb9e845823133fef14566372f00940fb7b011093&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%224.jpg%22&x-id=GetObject",
    },
    {
      image:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/77f9f142-3f98-47d2-a2af-ab5c6996b728/5.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T165809Z&X-Amz-Expires=86400&X-Amz-Signature=870e81288f2591a7895c94ce50f505753248674dc8e887f4195b78c6bbaa2241&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%225.jpg%22&x-id=GetObject",
    },
    {
      image:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/67554fb8-3e8f-4445-921e-756e5ac33572/6.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T165812Z&X-Amz-Expires=86400&X-Amz-Signature=364c9edbbf82d7f79585baf547c5f3d30e25a1045438b36e3691169f9a5414d3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%226.jpg%22&x-id=GetObject",
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
  static NetworkHeroBackground =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d7e352b4-1b92-474c-8d37-5076ec3df517/networkHero.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T174203Z&X-Amz-Expires=86400&X-Amz-Signature=15860d689bd91262d9ad20dcb54e877034300bd9d8a34ef881c0fb42a9668dda&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22networkHero.jpg%22&x-id=GetObject";

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
