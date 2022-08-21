/* eslint-disable no-case-declarations */
import { NextApiRequest, NextApiResponse } from "next";
import { getData, postData, REQUESTMETHOD } from "../../../lib/utility";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  let result, error;
  try {
    switch (method) {
      case REQUESTMETHOD.GET:
        result = await getData();
        break;
      case REQUESTMETHOD.POST:
        const { title, description, author, tags } = req.body;
        result = await postData({
          title,
          description,
          author,
          tags,
        });
        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
    res.status(200).json({
      data: result,
      error,
    });
  } catch (err) {
    console.log("errpr");
    res.status(500).json({ data: result, error: err });
  }
}
