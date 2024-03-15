// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Question } from "@/interfaces";
import type { NextApiRequest, NextApiResponse } from "next";
import { questionsMock } from "../mocks";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Question>,
) {
  res.status(200).json(questionsMock[0]);
}
