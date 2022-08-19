/* eslint-disable turbo/no-undeclared-env-vars */
import { Client } from "@notionhq/client";
export const api_key = process.env.NOTION_API_KEY || "";

const notion = new Client({
  auth: api_key,
});

export default notion;
