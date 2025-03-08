import { gql } from '@apollo/client';
import {
  DRIVER_FRAGMENT,
  EVENT_FRAGMENT,
  FILE_URL_FRAGMENT,
  SPONSOR_FRAGMENT,
  TIMELINE_ITEM_FRAGMENT,
  TRIP_FRAGMENT,
} from './fragments';

export const LATEST_STARTUP_CHALLENGE_QUERY = gql`
  query StartupChallengeData {
    startupchallengeCollection(limit: 1, order: name_DESC) {
      items {
        name
        signUpLink
        submissionsOpen
        submissionsOpenDate
        submissionsCloseDate
        detailedProgramDescription
        detailedProgram {
          ...FileUrlFragment
        }
        timelineCollection {
          items {
            ...TimelineItemFragment
          }
        }
        organizersCollection {
          items {
            ...SponsorFragment
          }
        }
        sponsorsCollection {
          items {
            ...SponsorFragment
          }
        }
      }
    }
  }
  ${FILE_URL_FRAGMENT}
  ${TIMELINE_ITEM_FRAGMENT}
  ${SPONSOR_FRAGMENT}
`;

export const LATEST_EVENTS_QUERY = gql`
  query Event {
    eventCollection(limit: 4, order: date_ASC) {
      items {
        ...EventFragment
      }
    }
  }
  ${EVENT_FRAGMENT}
`;

export const LATEST_TRIP_QUERY = gql`
  query LatestTripData {
    tripCollection(limit: 1, order: departDate_DESC) {
      items {
        ...TripFragment
      }
    }
  }
  ${TRIP_FRAGMENT}
`;

export const ALL_DRIVERS_NOT_ALUMNI_QUERY = gql`
  query AllDrivers {
    driverCollection(where: { isAlumni: false }) {
      items {
        ...DriverFragment
      }
    }
  }
  ${DRIVER_FRAGMENT}
`;

export const DRIVERS_FOR_TEAM_QUERY = gql`
  query DriversForTeam($team: String) {
    driverCollection(where: { team: $team }) {
      items {
        ...DriverFragment
      }
    }
  }
  ${DRIVER_FRAGMENT}
`;

export const DESCRIPTION_QUERY = gql`
  query DescriptionQuery {
    decriptionParagraphCollection {
      items {
        textArea
        textField
      }
    }
  }
`;
