// Temporary types to fix build issues until GraphQL codegen is properly configured

export interface Driver {
  team?: string | null;
  role?: string | null;
  nameSurname?: string | null;
  quote?: string | null;
  quoteAuthor?: string | null;
  quoteColor?: string | null;
  email?: string | null;
  linkedinLink?: string | null;
  instagramLink?: string | null;
  image?: {
    url?: string | null;
  } | null;
}

export interface AllDriversQuery {
  driverCollection?: {
    items: Array<Driver | null>;
  } | null;
}

export interface StartupChallengeDataQuery {
  startupchallengeCollection?: {
    items: Array<{
      name?: string | null;
      signUpLink?: string | null;
      submissionsOpen?: boolean | null;
      submissionsOpenDate?: string | null;
      submissionsCloseDate?: string | null;
      detailedProgramDescription?: string | null;
      detailedProgram?: {
        url?: string | null;
      } | null;
      timelineCollection?: {
        items: Array<{
          date?: string | null;
          title?: string | null;
          description?: string | null;
        } | null>;
      } | null;
      organizersCollection?: {
        items: Array<{
          name?: string | null;
          url?: string | null;
          logo?: {
            url?: string | null;
          } | null;
          logoDark?: {
            url?: string | null;
          } | null;
        } | null>;
      } | null;
      sponsorsCollection?: {
        items: Array<{
          name?: string | null;
          url?: string | null;
          logo?: {
            url?: string | null;
          } | null;
          logoDark?: {
            url?: string | null;
          } | null;
        } | null>;
      } | null;
    } | null>;
  } | null;
}

export interface JoinQuery {
  joinCollection?: {
    items: Array<{
      title?: string | null;
      explorerJoinLink?: string | null;
      driverJoinLink?: string | null;
      sponsorJoinLink?: string | null;
    } | null>;
  } | null;
}

export interface LatestTripDataQuery {
  tripCollection?: {
    items: Array<{
      destinationCountry?: string | null;
      destinationCities?: Array<string | null> | null;
      slogan?: string | null;
      departDate?: string | null;
      returnDate?: string | null;
      availableSpots?: number | null;
      price?: string | null;
      isPolimiSponsored?: boolean | null;
      refundAmount?: string | null;
      servicesIncluded?: string | null;
      registerLink?: string | null;
      registrationsOpenDate?: string | null;
      description?: string | null;
      image?: {
        url?: string | null;
        title?: string | null;
      } | null;
      timelineCollection?: {
        items: Array<{
          date?: string | null;
          title?: string | null;
          description?: string | null;
        } | null>;
      } | null;
    } | null>;
  } | null;
}

export interface EventQuery {
  eventCollection?: {
    items: Array<{
      date?: string | null;
      title?: string | null;
      description?: string | null;
      location?: string | null;
      registrationLink?: string | null;
    } | null>;
  } | null;
}
