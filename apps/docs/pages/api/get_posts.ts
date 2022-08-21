import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../../lib/utility";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await getData();

    res.status(200).json({
      data: result,
      error: null,
    });
  } catch (err) {
    res.status(500).json({ data: null, error: err });
  }
}
