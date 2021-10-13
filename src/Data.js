import Image1 from "assets/test1.png";
import Image2 from "assets/test2.png";
import Image3 from "assets/test3.png";

import descriptionLogo from "assets/logo-512x512.png";
import homepageHeroBackground from "assets/homepage_hero.jpg";
import logoWhite from "assets/logo_white.svg";
import logoPolimi from "assets/polimi_logo_white.png";

/**
 * @description This class holds global, static data, to avoid duplication between production code and tests
 * @note All members of this class must be declared static
 */
export default class SiteData {
  // COMMON
  static LogoWhite = logoWhite;
  static LogoPolimi = logoPolimi;

  // NAVBAR

  static NavbarItems = [
    {
      title: "About Us",
      target: "/About",
      type: "nav-link",
    },
    {
      title: "Events",
      target: "/Events",
      type: "nav-link",
    },
    {
      title: "Travel",
      target: "/Travel",
      type: "nav-link",
    },
    /*{
      title: "Guests",
      target: "/Guests",
      type: "nav-link",
    }*/
    {
      title: "Passion in action",
      target: "/PassionInAction",
      type: "nav-link",
    },
    {
      title: "Network",
      target: "/Network",
      type: "nav-link",
    },
    {
      title: "Join Us",
      target: "/Join",
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
    { src: Image3, href: "#", alt: "Test3" },
  ];

  static MainDescription = {
    logo: descriptionLogo,
    title0: "Learn",
    title1: "Network",
    title2: "Build",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  static HomepageHeroBackground = homepageHeroBackground;
}
