const SPACE = import.meta.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT = import.meta.env.CONTENTFUL_ENVIRONMENT ?? 'master';
const DELIVERY_TOKEN = import.meta.env.CONTENTFUL_DELIVERY_TOKEN;

const TEAM_QUERY = /* GraphQL */ `
  query DriversQuery {
    driverCollection {
      items {
        nameSurname
        team
        role
        email
        instagramLink
        linkedinLink
        image {
          url
        }
      }
    }
  }
`;

const EVENT_QUERY = /* GraphQL */ `
  query Events {
    eventCollection(order: date_DESC, limit: 100) {
      items {
        title
        date
        description
      }
    }
  }
`;

const TEAM_DESCRIPTION_QUERY = /* GraphQL */ `
  query TeamDescriptions {
    decriptionParagraphCollection(limit: 50) {
      items {
        textArea
        textField
      }
    }
  }
`;

const SITE_IMAGE_QUERY = /* GraphQL */ `
  query SiteImageAssets {
    siteImageAssetCollection(limit: 50) {
      items {
        key
        url
        imageLightMode {
          url
          description
          title
        }
        imageDarkMode {
          url
          description
          title
        }
      }
    }
  }
`;

const SPONSOR_QUERY = /* GraphQL */ `
  query Sponsors {
    sponsorCollection(limit: 50) {
      items {
        name
        url
        logo {
          url
          description
          title
        }
        logoDark {
          url
          description
          title
        }
      }
    }
  }
`;

const SITE_VIDEO_QUERY = /* GraphQL */ `
  query SiteVideoAssets {
    siteVideoAssetCollection(limit: 20) {
      items {
        videoName
        video {
          url
          contentType
          description
          fileName
        }
      }
    }
  }
`;

export type SiteImageAsset = {
  key?: string | null;
  url?: string | null;
  imageLightMode?: {
    url?: string | null;
    description?: string | null;
    title?: string | null;
  } | null;
  imageDarkMode?: {
    url?: string | null;
    description?: string | null;
    title?: string | null;
  } | null;
};

export type EventEntry = {
  title?: string | null;
  date?: string | null;
  description?: string | null;
};

export type SponsorEntry = {
  name?: string | null;
  url?: string | null;
  logo?: {
    url?: string | null;
    description?: string | null;
    title?: string | null;
  } | null;
  logoDark?: {
    url?: string | null;
    description?: string | null;
    title?: string | null;
  } | null;
};

export type SiteVideoAsset = {
  videoName?: string | null;
  video?: {
    url?: string | null;
    contentType?: string | null;
    description?: string | null;
    fileName?: string | null;
  } | null;
};

async function fetchFromContentful<T>(query: string, collection: string): Promise<T[]> {
  if (!SPACE || !DELIVERY_TOKEN) {
    console.error('[Contentful] Missing CONTENTFUL_SPACE_ID or CONTENTFUL_DELIVERY_TOKEN env variables');
    return [];
  }

  const url = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${DELIVERY_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Contentful] Failed to fetch ${collection}:`, errorText);
      return [];
    }

    const payload = await response.json();
    return payload?.data?.[collection]?.items ?? [];
  } catch (error) {
    console.error(`[Contentful] Error fetching ${collection}:`, error);
    return [];
  }
}

export function fetchTeamMembersFromContentful() {
  return fetchFromContentful(TEAM_QUERY, 'driverCollection');
}

export function fetchTeamDescriptionsFromContentful() {
  return fetchFromContentful(TEAM_DESCRIPTION_QUERY, 'decriptionParagraphCollection');
}

export function fetchSiteImagesFromContentful(): Promise<SiteImageAsset[]> {
  return fetchFromContentful(SITE_IMAGE_QUERY, 'siteImageAssetCollection');
}

export function fetchEventsFromContentful(): Promise<EventEntry[]> {
  return fetchFromContentful(EVENT_QUERY, 'eventCollection');
}

export function fetchSponsorsFromContentful(): Promise<SponsorEntry[]> {
  return fetchFromContentful(SPONSOR_QUERY, 'sponsorCollection');
}

export function fetchSiteVideosFromContentful(): Promise<SiteVideoAsset[]> {
  return fetchFromContentful(SITE_VIDEO_QUERY, 'siteVideoAssetCollection');
}
