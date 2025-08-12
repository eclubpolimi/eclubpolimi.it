//changed startup challgenge to a white button to make it stand out and added a rocket emoji next to it

import Button from 'components/Button';
import pialessons from 'assets/pialessons';
import homepageHeroBackground from 'assets/homepage_hero.jpg';
import logoLearnNetworkBuild from 'assets/logo_learn_network_build.svg';
import logoWhite from 'assets/logo_white.svg';
import networkHeroImage from 'assets/eclub-network.png';
import logo2 from 'assets/img-eclub-bocconi.png';
import logo3 from 'assets/img-eclub-pavia.png';
import logo1 from 'assets/logo-colors.png';
import logo4 from 'assets/logo_white.png';
import { ReactNode } from 'react';
/**
 * @description This class holds global, static data, to avoid duplication between production code and tests
 * @note All members of this class must be declared static
 */

export default class SiteData {
  // COMMON
  static LogoWhite = logoWhite;

  static isDarkMode = () =>
    typeof window !== 'undefined' &&
    document.documentElement.classList.contains('dark');

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
  static TestTarget = '/test'; // New test page link

  // NAVBAR

  static NavbarItems: Array<{ type: 'link' | 'button'; content: ReactNode }> = [
    {
      content: <a href={this.AboutUsTarget}>About Us</a>,
      type: 'link',
    },
    {
      content: <a href={this.EventsTarget}>Events</a>,
      type: 'link',
    },
    // {
    //   content: <a href={this.StartupChallengeTarget}>Startup Challenge</a>,
    //   type: 'link',
    // },
    {
      content: (
        <Button to={this.StartupChallengeTarget} theme="light">
          🚀 Startup Challenge
        </Button>
      ),
      type: 'button',
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
    // {
    //   content: <a href={this.TestTarget}>Test</a>, // New test page link
    //   type: 'link',
    // },
  ];

  // HOMEPAGE - SPONSORS (dynamically loaded via useSponsors hook)
  static SponsorsData = [
    {
      key: 'sponsors_astra',
      href: 'https://astraincubator.com',
      alt: 'Astra incubator',
    },
    {
      key: 'sponsors_tutored',
      href: 'https://www.tutored.me',
      alt: 'Tutored',
    },
    {
      key: 'sponsors_polihub',
      href: 'https://www.polihub.it/it/',
      alt: 'Polihub',
    },
    {
      key: 'sponsors_jemp',
      href: 'https://www.jemp.it',
      alt: 'Jemp',
    },
  ];

  static LogoLearnNetworkBuild = logoLearnNetworkBuild;

  static HomepageHeroBackground = homepageHeroBackground;

  // ABOUT US

  // LESSONS PIA (placeholder)
  static LessonsPIA = pialessons;
  // PIAHeroBackground now uses: useImageAsset('pia_hero')

  // JOIN US
  static ApplyDriverLink = 'https://forms.gle/NWyuKPKhxDtEVYAA6'; //depracated, not changed from here
  static ApplyExplorerLink = 'https://forms.gle/CUsujfatS28vioox9'; //depracated, not changed from here

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

  // EVENTS - Dynamic carousel data (images loaded via useCarouselImages hook)
  static eventsCarouselData = [
    { key: 'carousel_1' },
    { key: 'carousel_2' }, 
    { key: 'carousel_3' },
    { key: 'carousel_4' },
    { key: 'carousel_5' },
  ];

  //NETWORK - Dynamic images (loaded via hooks)
  static NetworkHeroImage = networkHeroImage;
  // NetworkHeroBackground now uses: useImageAsset('network_hero')
  static SC2022_board = '/startupChallenge/previousYear/SC2022_board.jpg';

  static NetworkSlogan = [
    'Coming together is a beginning',
    'Staying together is a progress',
    'Working together is a success',
  ];

  static NetworkMembers = [
    {
      alt: 'E-Club Polimi',
      href: 'https://www.eclubpolimi.it/',
      src: logo1,
      darkSrc: logo4,
    },
    {
      alt: 'E-Club Bocconi',
      href: 'https://www.eclubbocconi.com/',

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
