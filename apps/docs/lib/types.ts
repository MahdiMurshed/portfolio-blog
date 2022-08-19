export interface COREPOST {
  Author: string;
  Description: string;
  Tags: string;
  Title: string;
}
export interface POST {
  archived: boolean;
  cover: object | null;
  created_by: object;
  icon: object | null;
  id: string;
  last_edited_by: object;
  last_edited_time: string;
  object: string;
  parent: object;
  properties: COREPOST;
  url: string;
}
export interface POSTS {
  posts: POST[];
  error: any;
}
