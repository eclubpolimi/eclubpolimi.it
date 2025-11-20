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

export async function fetchTeamMembersFromContentful() {
  if (!SPACE || !DELIVERY_TOKEN) {
    console.warn(
      '[Contentful] Missing CONTENTFUL_SPACE_ID or CONTENTFUL_DELIVERY_TOKEN env variables'
    );
    return [];
  }

  const url = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${DELIVERY_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: TEAM_QUERY }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[Contentful] Failed to fetch team members:', errorText);
    return [];
  }

  const payload = await response.json();
  const items = payload?.data?.driverCollection?.items ?? [];
  console.log('[Contentful] First driver returned:', items[0]);

  return items;
}

export async function fetchTeamDescriptionsFromContentful() {
  if (!SPACE || !DELIVERY_TOKEN) {
    return [];
  }

  const url = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${DELIVERY_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: TEAM_DESCRIPTION_QUERY}),
  });

  if (!response.ok) {
    return [];
  }

  const payload = await response.json();
  return payload?.data?.decriptionParagraphCollection?.items ?? [];
}

export async function fetchSiteImagesFromContentful(): Promise<SiteImageAsset[]> {
  if (!SPACE || !DELIVERY_TOKEN) {
    return [];
  }

  const url = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${DELIVERY_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: SITE_IMAGE_QUERY}),
  });

  if (!response.ok) {
    return [];
  }

  const payload = await response.json();
  return payload?.data?.siteImageAssetCollection?.items ?? [];
}

export async function fetchEventsFromContentful(): Promise<EventEntry[]> {
  if (!SPACE || !DELIVERY_TOKEN) {
    console.warn(
      '[Contentful] Missing CONTENTFUL_SPACE_ID or CONTENTFUL_DELIVERY_TOKEN env variables'
    );
    return [];
  }

  const url = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${DELIVERY_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: EVENT_QUERY}),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[Contentful] Failed to fetch events:', errorText);
    return [];
  }

  const payload = await response.json();
  return payload?.data?.eventCollection?.items ?? [];
}
