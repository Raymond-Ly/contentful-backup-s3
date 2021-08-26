import { S3 } from 'aws-sdk';
import fs from 'fs';
import config from '../../config';

export const uploadFile = async (): Promise<unknown> => {
  const s3 = new S3();
  const key = `${Date.now().toString()}.json`;
  const outputFile = config.exportDir + config.contentFile;
  const fileBuffer = Buffer.from(fs.readFileSync(outputFile));
  fs.unlinkSync(outputFile);

  const params = {
    Bucket: config.s3ExportBucket,
    Key: key,
    Body: fileBuffer,
  };

  console.info(`Contentful space exported to S3 bucket ${config.s3ExportBucket} under ${key}`);

  return s3.putObject(params).promise();
};
