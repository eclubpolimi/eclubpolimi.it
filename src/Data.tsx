// Global static data for the E-Club website
//mostly depreacated and only a fraction as useful as it once was, everything else was moved.

import Link from 'next/link';
import Button from 'components/Button/Button';
import StartupChallengeDropdown from 'components/StartupChallengeDropdown/StartupChallengeDropdown';
import type { ReactNode } from 'react';

/**
 * @description This class holds global, static data, to avoid duplication between production code and tests
 * @note All members of this class must be declared static
 */

export default class SiteData {
  // SUBPAGE TARGETS
  static HomeTarget = '/';
  static OurTeamTarget = '/our-team';
  static EventsTarget = '/events';
  static NetworkTarget = '/network';
  static JoinTarget = '/join';
  static StartupChallengeTarget = '/startupchallenge';

  // NAVBAR
  static NavbarItems: Array<{ type: 'link' | 'button'; content: ReactNode }> = [
    {
      content: <Link href={this.OurTeamTarget}>Our Team</Link>,
      type: 'link',
    },
    {
      content: <Link href={this.EventsTarget}>Events</Link>,
      type: 'link',
    },
    {
      content: <StartupChallengeDropdown />,
      type: 'button',
    },
    {
      content: <Link href={this.NetworkTarget}>Network</Link>,
      type: 'link',
    },
    {
      content: (
        <Button variant="navigation" href={this.JoinTarget}>
          Join us
        </Button>
      ),
      type: 'button',
    },
  ];

  // NETWORK PAGE
  static NetworkSlogan = [
    'Coming together is a beginning',
    'Staying together is a progress',
    'Working together is a success',
  ];

  // LEGACY - Used as fallback in Navbar (prefer Contentful assets)
  static LogoWhite = '';
}
