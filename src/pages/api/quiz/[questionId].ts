import type { NextApiRequest, NextApiResponse } from "next";
import { questionsMock } from "../mocks";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<boolean>,
) {
  const question = questionsMock.find((q) => q.id === req.query.questionId);
  if (!question) {
    res.status(404).json(false);
    return;
  }
  const isTrue = question.answers.filter((a) => a.isTrue && a.answer === req.query.answer).length > 0;  
  if (isTrue) {
    res.status(200).json(true);
  } else { 
    res.status(200).json(false);
  }
}