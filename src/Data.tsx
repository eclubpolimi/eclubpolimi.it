import Button from 'components/Button';

import pialessons from 'assets/pialessons';

import homepageHeroBackground from 'assets/homepage_hero.jpg';
import logoLearnNetworkBuild from 'assets/logo_learn_network_build.svg';
import logoWhite from 'assets/logo_white.svg';
import networkHeroImage from 'assets/eclub-network.png';
import logo2 from 'assets/img-eclub-bocconi.png';
import logo3 from 'assets/img-eclub-pavia.png';
import logo1 from 'assets/logo-colors.png';

import { ReactNode } from 'react';

/**
 * @description This class holds global, static data, to avoid duplication between production code and tests
 * @note All members of this class must be declared static
 */
export default class SiteData {
  // COMMON
  static LogoWhite = logoWhite;

  // SUBPAGE TARGETS
  static HomeTarget = '/';
  static AboutUsTarget = '/about';
  static EventsTarget = '/events';
  static TripsTarget = '/trips';
  static GuestsTarget = '/guests';
  static PiaTarget = '/passion-in-action';
  static NetworkTarget = '/network';
  static JoinTarget = '/join';
  static OpenDayTarget = '/openday';
  static NewsTarget = '/news';
  static StartupChallengeTarget = '/startupchallenge';
  static TravelTarget = '/trips';

  // NAVBAR
  static NavbarItems: Array<{ type: 'link' | 'button'; content: ReactNode }> = [
    {
      content: <a href={this.AboutUsTarget}>About us</a>,
      type: 'link',
    },
    {
      content: <a href={this.EventsTarget}>Events</a>,
      type: 'link',
    },
    {
      content: <a href={this.StartupChallengeTarget}>Startup Challenge</a>,
      type: 'link',
    },
    {
      content: <a href={this.PiaTarget}>Passion in Action</a>,
      type: 'link',
    },
    {
      content: <a href={this.TravelTarget}>Travel</a>,
      type: 'link',
    },
    {
      content: <a href={this.NetworkTarget}>Network</a>,
      type: 'link',
    },
    {
      content: <Button to={this.JoinTarget}>Join us</Button>,
      type: 'button',
    },
  ];

  // HOMEPAGE
  static Sponsors = [
    {
      src: '/netsonsImages/Astra.png',
      href: 'https://astraincubator.com',
      alt: 'Astra incubator',
    },
    {
      src: '/netsonsImages/Tutored.png',
      href: 'https://www.tutored.me',
      alt: 'Tutored',
    },
    {
      src: '/netsonsImages/Polihub.png',
      href: 'https://www.polihub.it/it/',
      alt: 'Polihub',
    },
    {
      src: '/netsonsImages/Jemp.png',
      href: 'https://www.jemp.it',
      alt: 'Jemp',
    },
  ];

  static LogoLearnNetworkBuild = logoLearnNetworkBuild;

  static HomepageHeroBackground = homepageHeroBackground;

  // ABOUT US
  static aboutUsHeroBackground = '/netsonsImages/aboutUs_hero.png';

  // LESSONS PIA (placeholder)
  static LessonsPIA = pialessons;
  static PIAHeroBackground = '/netsonsImages/pia_hero.png';

  // JOIN US
  static ApplyDriverLink = 'https://app.gomry.co/form/Pcw5CIs4bj57TgHXr40r';
  static ApplyExplorerLink = 'https://app.gomry.co/form/u59VyQui2MiJPUXGvVnp';

  // JOIN US CARD EXPLORER
  static explorerAdvantages = [
    'Membership Badge',
    'Priority bookings for limited seats',
    'Access members-only events',
    'Exclusive interaction with guests',
  ];

  // JOIN US CARD DRIVER
  static driverAdvantages = [
    'Be involved in the organisation of E-Club Polimi activities',
    'Partecipate in dedicated trainings',
    'Unique personal and professional growth opportunity',
  ];

  // JOIN US CARD SPONSORS
  static sponsorAdvantages = [
    'Do you want to support us?',
    'Do you want to share your entrepreneurial experience - failure or success - with the firt entrepreneurial community of Polimi?',
  ];

  // EVENTS
  static eventsCarouselImages = [
    {
      image: '/netsonsImages/carousel1.jpg',
    },
    {
      image: '/netsonsImages/carousel2.jpg',
    },
    {
      image: '/netsonsImages/carousel3.jpg',
    },
    {
      image: '/netsonsImages/carousel4.jpg',
    },
    {
      image: '/netsonsImages/carousel5.jpg',
    },
  ];

  //NETWORK
  static NetworkHeroImage = networkHeroImage;
  static NetworkHeroBackground = '/netsonsImages/network_hero.jpg';
  static SC2022_board = '/startupChallenge/previousYear/SC2022_board.jpg';

  static NetworkSlogan = [
    'Coming together is a beginning',
    'Staying together is a progress',
    'Working together is a success',
  ];

  static NetworkMembers = [
    { alt: 'E-Club Polimi', href: 'https://www.eclubpolimi.it/', src: logo1 },
    {
      alt: 'E-Club Bocconi',
      href: 'https://www.unibocconi.it/wps/wcm/connect/bocconi/sitopubblico_it/albero+di+navigazione/home/corsi+di+studio/studenti+iscritti/campus+life/attivita+studentesche/associazioni+studentesche/elenco+annuale/e-club',

      src: logo2,
    },
    { alt: 'E-Club Pavia', href: 'https://www.eclubpavia.it/', src: logo3 },
  ];

  static SmushMaterialsEventBanner = {
    imgSource:
      'https://smushmaterials.com/wp-content/uploads/2022/04/Smush_cmyk-1.png',
    registerLink:
      'https://www.instagram.com/p/Ci-zob4K-GS/?igshid=YmMyMTA2M2Y=',
    affiliateLink: 'https://smushmaterials.com',
    eventName: 'Smush Materials',
    eventInfo: 'Just Café - October 3, 2022 - 7PM',
    eventType: 'Meet the startup',
  };
}
