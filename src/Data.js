import Image1 from "assets/test1.png";
import Image2 from "assets/test2.png";
import Image3 from "assets/test3.png";
import Img from "assets/who_we_are_img_1.jpg";

import descriptionLogo from "assets/logo-512x512.png";
import homepageHeroBackground from "assets/homepage_hero.jpg";
import logoWhite from "assets/logo_white.svg";
import logoPolimi from "assets/polimi_logo_white.png";

import image1LessonPIA from "assets/img-lessons-pia-346x220.jpg";
import imageLogoPIA from "assets/img-lessons-pia-346x220.jpg";

/**
 * @description This class holds global, static data, to avoid duplication between production code and tests
 * @note All members of this class must be declared static
 */
export default class SiteData {
  // COMMON
  static LogoWhite = logoWhite;
  static LogoPolimi = logoPolimi;

  // SUBPAGE TARGETS
  static HomeTarget = "/";
  static AboutUsTarget = "/about";
  static EventsTarget = "/events";
  static TravelTarget = "/target";
  static GuestsTarget = "/guests";
  static PiaTarget = "/passion-in-action";
  static NetworkTarget = "/network";
  static JoinTarget = "/join";

  // NAVBAR

  static NavbarItems = [
    {
      title: "About Us",
      target: this.AboutUsTarget,
      type: "nav-link",
    },
    {
      title: "Events",
      target: this.EventsTarget,
      type: "nav-link",
    },
    {
      title: "Travel",
      target: this.TravelTarget,
      type: "nav-link",
    },
    /*{
      title: "Guests",
      target: this.GuestsTarget,
      type: "nav-link",
    }*/
    {
      title: "Passion in action",
      target: this.PiaTarget,
      type: "nav-link",
    },
    {
      title: "Network",
      target: this.NetworkTarget,
      type: "nav-link",
    },
    {
      title: "Join Us",
      target: this.JoinTarget,
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
    logo: descriptionLogo,
    title0: "Learn",
    title1: "Network",
    title2: "Build",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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

  static HeroPIA = {
    logoPIA: imageLogoPIA,
  };

  static DescriptionPIA = {
    titlePIA: "Passion In Action",
    textPIA:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };
}
