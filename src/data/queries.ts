import { gql } from "@apollo/client";
import {
  EVENT_FRAGMENT,
  FILE_URL_FRAGMENT,
  SPONSOR_FRAGMENT,
  TIMELINE_ITEM_FRAGMENT,
  TRIP_FRAGMENT,
} from "./fragments";

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
