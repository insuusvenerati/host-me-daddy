import { S3_BUCKET } from "@/config/constants";
import multer from "multer";
import multerS3 from "multer-s3";
import { s3Client } from "./s3Client";

export const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: S3_BUCKET,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});
