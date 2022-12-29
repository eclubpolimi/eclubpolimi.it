import { createClient, Entry } from "contentful";

// A list of all the sources we want to use in the app
export const Sources = {
};

const client = createClient({
  // The space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID as string,
  // Access token for this space.
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const getContentfulData = async <T>(
  source: typeof Sources[keyof typeof Sources]
): Promise<Entry<T>> => {
  return client.getEntry(source);
};
