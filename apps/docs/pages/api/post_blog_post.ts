import type { NextApiResponse } from "next";
import { postData } from "../../lib/utility";

export interface POSTBODY {
  title: string;
  description: any;
  author: any;
  tags: any[];
}

export default async function handler(
  req: {
    body: POSTBODY;
  },
  res: NextApiResponse
) {
  const { title, description, author, tags } = req.body;

  try {
    const result = await postData({
      title,
      description,
      author,
      tags,
    });
    // const result = await postData({ title="new title", description, author, tags });

    res.status(200).json({
      data: result,
      error: null,
    });
  } catch (err) {
    res.status(500).json({ data: null, error: err });
  }
}
