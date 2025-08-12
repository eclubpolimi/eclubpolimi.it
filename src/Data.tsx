//changed startup challgenge to a white button to make it stand out and added a rocket emoji next to it

import Button from 'components/Button/Button';
import pialessons from 'images/pialessons';
import { ReactNode } from 'react';
/**
 * @description This class holds global, static data, to avoid duplication between production code and tests
 * @note All members of this class must be declared static
 */

export default class SiteData {
  // COMMON - This should be loaded dynamically from Contentful
  // Components using this should use: useImageAsset('branding_logo_white')
  static LogoWhite = ''; // Use Contentful branding_logo_white asset instead

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

  // These should be loaded dynamically from Contentful
  // Use: useImageAsset('branding_learn_network_build')
  static LogoLearnNetworkBuild = ''; // Use Contentful asset instead

  // Use: useImageAsset('homepage_hero_background')
  static HomepageHeroBackground = ''; // Use Contentful asset instead

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
  // Use: useImageAsset('network_hero_logo')
  static NetworkHeroImage = ''; // Use Contentful asset instead
  // NetworkHeroBackground now uses: useImageAsset('network_hero_background')
  
  // DEPRECATED: This image section is commented out in startup challenge page
  // static SC2022_board = '/startupChallenge/previousYear/SC2022_board.jpg';

  static NetworkSlogan = [
    'Coming together is a beginning',
    'Staying together is a progress',
    'Working together is a success',
  ];

  // DEPRECATED: Use useNetworkMembers() hook instead - loads from Contentful
  // static NetworkMembers = [
  //   {
  //     alt: 'E-Club Polimi',
  //     href: 'https://www.eclubpolimi.it/',
  //     src: 'placeholder-polimi.png', // Use: network_members__polimi
  //     darkSrc: 'placeholder-polimi-dark.png',
  //   },
  //   {
  //     alt: 'E-Club Bocconi',
  //     href: 'https://www.eclubbocconi.com/',
  //     src: 'placeholder-bocconi.png', // Use: network_members__bocconi
  //   },
  //   { 
  //     alt: 'E-Club Pavia', 
  //     href: 'https://www.eclubpavia.it/', 
  //     src: 'placeholder-pavia.png' // Use: network_members__pavia
  //   },
  // ];

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
