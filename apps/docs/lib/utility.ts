/* eslint-disable turbo/no-undeclared-env-vars */

export const REQUESTMETHOD = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
};
export interface POSTBODY {
  title: string;
  description: any;
  author: any;
  tags: any[];
}

export const tag_id = process.env.NOTION_TAGS || "";
export const author_id = process.env.NOTION_AUTHOR || "";
export const title_id = process.env.NOTION_TITLE || "";
export const description_id = process.env.NOTION_DESCRIPTION || "";
export const database_id = process.env.NOTION_DATABASE_ID || "";

import notion from "./notion";

export const getData = async () => {
  const notionPages = await notion.databases.query({
    database_id,
    sorts: [{ property: title_id, direction: "descending" }],
  });

  return notionPages.results.map(fromNotionPage);
};

function fromNotionPage(notionPage: any) {
  const propertiesById = getPropertyById(notionPage.properties);

  return {
    id: notionPage.id,
    title: propertiesById[title_id].title[0].plain_text,
    tags: propertiesById[tag_id].multi_select.map(
      (option: { id: any; name: any }) => {
        return { id: option.id, name: option.name };
      }
    ),
    description: propertiesById[description_id].rich_text[0].text.content,
  };
}

export const getProperty = async (property: string) => {
  const { properties } = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID || "",
  });
  switch (property) {
    case "tags":
      return getTags(properties);
    default:
      return [];
  }
};

export const postData = async ({
  title = "New Title",
  description = "new Desc",
  author = "new author",
  tags,
}: POSTBODY) => {
  const response = await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID || "",
    },
    properties: {
      [title_id]: {
        title: [
          {
            text: {
              content: title,
            },
          },
        ],
      },
      [description_id]: {
        rich_text: [
          {
            text: {
              content: description,
            },
          },
        ],
      },
      [author_id]: {
        rich_text: [
          {
            text: {
              content: author,
            },
          },
        ],
      },
      [tag_id]: {
        multi_select: tags,
      },
    } as {},
  });

  return response;
};

//helper functions
export const getPropertyById = (properties: object) => {
  const data = Object.values(properties).reduce((obj: any, property: any) => {
    const { id, ...rest } = property;
    return {
      ...obj,
      [id]: rest,
    };
  }, {});

  return data;
};
export const getTags = (properties: any) => {
  const data = getPropertyById(properties);
  const options = data[tag_id].multi_select.options.map((option: any) => ({
    id: option.id,
    name: option.name,
  }));

  return options;
};
