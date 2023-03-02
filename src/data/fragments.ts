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

export const TRIP_FRAGMENT = gql`
  fragment TripFragment on Trip {
    destinationCountry
    slogan
    destinationCities
    departDate
    returnDate
    availableSpots
    price
    isPolimiSponsored
    refundAmount
    servicesIncluded
    description
    image {
      ...FileUrlFragment
    }
    registerLink
    registrationsOpenDate
    timelineCollection {
      items {
        ...TimelineItemFragment
      }
    }
  }
  ${FILE_URL_FRAGMENT}
  ${TIMELINE_ITEM_FRAGMENT}
`;

export const DRIVER_FRAGMENT = gql`
  fragment DriverFragment on Driver {
    nameSurname
    team
    role
    image {
      ...FileUrlFragment
    }
    quote
    quoteAuthor
    quoteColor
    email
    instagramLink
    linkedinLink
    isAlumni
  }
  ${FILE_URL_FRAGMENT}
`;
