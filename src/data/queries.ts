import { gql } from "@apollo/client";
import {
  FILE_URL_FRAGMENT,
  TIMELINE_ITEM_FRAGMENT,
  SPONSOR_FRAGMENT,
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
