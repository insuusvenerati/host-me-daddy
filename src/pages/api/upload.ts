import { upload } from "@/lib/multer";
import multer from "multer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  upload.array("photos", 3)(req, res, (err) => console.log(err));
  res.status(200).json("File uploaded");
}

export const config = {
  api: {
    bodyParser: false,
  },
};
