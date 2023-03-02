import { gql } from "@apollo/client";

export const FILE_URL_FRAGMENT = gql`
  fragment FileUrlFragment on Asset {
    title
    url
  }
`;

export const TIMELINE_ITEM_FRAGMENT = gql`
  fragment TimelineItemFragment on TimelineItem {
    title
    date
    description
  }
`;

export const SPONSOR_FRAGMENT = gql`
  fragment SponsorFragment on Sponsor {
    name
    logo {
      ...FileUrlFragment
    }
    url
  }
`;

export const EVENT_FRAGMENT = gql`
  fragment EventFragment on Event {
    title
    date
    description
    link
  }
`;
