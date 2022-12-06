import { APIResponseError, Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export const Sources = {
  Links: process.env.NOTION_DATA_LINKS,
};

const notion = new Client({ auth: process.env.NOTION_AUTH_TOKEN });

export const getNotionData = async (
  source: typeof Sources[keyof typeof Sources]
): Promise<Array<unknown>> => {
  // Database queries returns either a QueryDatabaseResponse or APIResponseError
  // This is undocumented in the notion client docs
  const response: QueryDatabaseResponse | APIResponseError =
    await notion.databases.query({
      database_id: source as string,
    });

  if ("code" in response) {
    throw Error(`Error: ${(response as APIResponseError).code}`);
  }

  return response.results as Array<unknown>;
};
