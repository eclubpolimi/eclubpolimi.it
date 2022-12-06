import { getNotionData, Sources } from "utils/notion_requests";

type Links = {
  [urlKey: string]: string;
};

export const getJoinLinks = async (): Promise<Links> => {
  return getNotionData(Sources.Links).then((data: Array<unknown>) => {
    const links: Links = {};
    data.forEach(
      (elem: any) =>
        (links[elem.properties.Name.title[0].plain_text] =
          elem.properties.Link.url)
    );
    return links;
  });
};
