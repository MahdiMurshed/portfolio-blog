import type { NextApiResponse } from "next";
import { getProperty } from "../../lib/utility";

export default async function handler(
  req: {
    query: {
      id: string;
    };
  },
  res: NextApiResponse
) {
  const { id } = req.query;
  console.log(id);
  try {
    const result = await getProperty(id);

    res.status(200).json({
      data: result,
      error: null,
    });
  } catch (err) {
    res.status(500).json({ data: null, error: err });
  }
}
