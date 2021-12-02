import { Link } from "react-router-dom";
import Button from "components/Button";

import Image1 from "assets/test1.png";
import Image2 from "assets/test2.png";
import Image3 from "assets/test3.png";
import Img from "assets/who_we_are_img_1.jpg";

import logoLearnNetworkBuild from "assets/logo_learn_network_build.svg";
import homepageHeroBackground from "assets/homepage_hero.jpg";
import logoWhite from "assets/logo_white.svg";

import image1LessonPIA from "assets/img-lessons-pia-346x220.jpg";
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

  static MainDescription = {
    logo: logoLearnNetworkBuild,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  static HomepageHeroBackground = homepageHeroBackground;

  // ABOUT US
  static AboutDescription = {
    title: "Our mission",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  static Teams = [
    {
      teamName: "Team test 1",
      members: [
        {
          image: Img,
          cardText: {
            role: "IT member",
            nameSurname: "Nome cognome",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quoteAuthor: "Lorem ipsum",
            email: "lorem.ipsum@loremipsum.com",
            linkedinUrl: "#",
            instagramUrl: "#",
          },
        },
        {
          image: Img,
          cardText: {
            role: "IT member",
            nameSurname: "Nome cognome",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quoteAuthor: "Lorem ipsum",
            email: "lorem.ipsum@loremipsum.com",
            linkedinUrl: "#",
            instagramUrl: "#",
          },
        },
        {
          image: Img,
          cardText: {
            role: "IT member",
            nameSurname: "Nome cognome",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quoteAuthor: "Lorem ipsum",
            email: "lorem.ipsum@loremipsum.com",
            linkedinUrl: "#",
            instagramUrl: "#",
          },
        },
        {
          image: Img,
          cardText: {
            role: "IT member",
            nameSurname: "Nome cognome",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quoteAuthor: "Lorem ipsum",
            email: "lorem.ipsum@loremipsum.com",
            linkedinUrl: "#",
            instagramUrl: "#",
          },
        },
        {
          image: Img,
          cardText: {
            role: "IT member",
            nameSurname: "Nome cognome",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quoteAuthor: "Lorem ipsum",
            email: "lorem.ipsum@loremipsum.com",
            linkedinUrl: "#",
            instagramUrl: "#",
          },
        },
      ],
    },
    {
      teamName: "Team test 2",
      members: [
        {
          image: Img,
          cardText: {
            role: "IT member",
            nameSurname: "Nome cognome",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quoteAuthor: "Lorem ipsum",
            email: "lorem.ipsum@loremipsum.com",
            linkedinUrl: "#",
            instagramUrl: "#",
          },
        },
        {
          image: Img,
          cardText: {
            role: "IT member",
            nameSurname: "Nome cognome",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quoteAuthor: "Lorem ipsum",
            email: "lorem.ipsum@loremipsum.com",
            linkedinUrl: "#",
            instagramUrl: "#",
          },
        },
        {
          image: Img,
          cardText: {
            role: "IT member",
            nameSurname: "Nome cognome",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quoteAuthor: "Lorem ipsum",
            email: "lorem.ipsum@loremipsum.com",
            linkedinUrl: "#",
            instagramUrl: "#",
          },
        },
        {
          image: Img,
          cardText: {
            role: "IT member",
            nameSurname: "Nome cognome",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quoteAuthor: "Lorem ipsum",
            email: "lorem.ipsum@loremipsum.com",
            linkedinUrl: "#",
            instagramUrl: "#",
          },
        },
        {
          image: Img,
          cardText: {
            role: "IT member",
            nameSurname: "Nome cognome",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quoteAuthor: "Lorem ipsum",
            email: "lorem.ipsum@loremipsum.com",
            linkedinUrl: "#",
            instagramUrl: "#",
          },
        },
      ],
    },
    {
      teamName: "Team test 3",
      members: [
        {
          image: Img,
          cardText: {
            role: "IT member",
            nameSurname: "Nome cognome",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quoteAuthor: "Lorem ipsum",
            email: "lorem.ipsum@loremipsum.com",
            linkedinUrl: "#",
            instagramUrl: "#",
          },
        },
        {
          image: Img,
          cardText: {
            role: "IT member",
            nameSurname: "Nome cognome",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quoteAuthor: "Lorem ipsum",
            email: "lorem.ipsum@loremipsum.com",
            linkedinUrl: "#",
            instagramUrl: "#",
          },
        },
        {
          image: Img,
          cardText: {
            role: "IT member",
            nameSurname: "Nome cognome",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            quoteAuthor: "Lorem ipsum",
            email: "lorem.ipsum@loremipsum.com",
            linkedinUrl: "#",
            instagramUrl: "#",
          },
        },
      ],
    },
  ];

  // LESSONS PIA (placeholder)

  static PIAHeroBackground = imageLogoPIA;

  static DescriptionPIA = {
    title: "Passion In Action",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };

  static LessonsPIA = [
    {
      name: "Lezione 1",
      title: "Titolo Lezione 1 PIA",
      image: image1LessonPIA,
      alt: "Passion in Action lesson image",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Lezione 2",
      title: "Titolo Lezione 2 PIA",
      image: image1LessonPIA,
      alt: "Passion in Action lesson image",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Lezione 3",
      title: "Titolo Lezione 3 PIA",
      image: image1LessonPIA,
      alt: "Passion in Action lesson image",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Lezione 4",
      title: "Titolo Lezione 4 PIA",
      image: image1LessonPIA,
      alt: "Passion in Action lesson image",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Lezione 5",
      title: "Titolo Lezione 5 PIA",
      image: image1LessonPIA,
      alt: "Passion in Action lesson image",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

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

  //NETWORK

  static NetworkHeroImage = networkHeroImage;

  static NetworkSlogan = [
    "Coming together is a beginning",
    "Staying together is a progress",
    "Working together is a success",
  ];

  static NetworkAbout = {
    title: "About our network",
    text: "The Entrepreneurship Club Network is a community of thinkers and doers motivated by the same passion for innovation and disruption. Our network of clubs aims at spreading the entrepreneurial spirit and supporting students in their entrepreneurial journey by connecting and exchanging skills and thoughts. We bring together future and established entrepreneurs who strive to make an impact. Our work focuses on providing our ecosystem with opportunities for connection and ideas contamination. In doing so, we strongly believe that expanding and nurturing our network is key to the well being of our mission.",
  };

  static NetworkPartnersDescription = {
    title: "Enterpreneurship clubs in Italy",
    text: "The first Entrepreneurship Club was founded in 2011 in Bocconi University in Milan. The core values (Learn, Network, Build) remained present ever since and are everyday refined by our experiences. Throughout the years, E-Club Bocconi was able to establish strong connections with similar entities around Italy and Europe. This international culture characterised the E-Club community from day one and mirrors its ambition to expand beyond Italian borders. The network was born in 2020 with the establishment of the Entrepreneurship Club Polimi at Politecnico di Milano. This important step will allow the community to grow further. Thanks to motivated actors who share our vision and embrace our values, we are helping the spread of the entrepreneurial spirit.",
  };

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
