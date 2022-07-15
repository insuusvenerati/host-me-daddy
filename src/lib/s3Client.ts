import { REGION } from "@/config/constants";
import { AWS_ACCESS_KEY, AWS_SECRET_KEY } from "@/config/env";
import { S3Client } from "@aws-sdk/client-s3";
import { Credentials } from "aws-sdk";

const credentials: Credentials = {
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
};
const s3Client = new S3Client({ region: REGION, credentials });

export { s3Client };
