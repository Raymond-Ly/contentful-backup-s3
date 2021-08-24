export default {
  awsAccessKey: process.env.AWS_ACCESS_KEY_ID as string,
  awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  maxParallelRequests: parseInt(process.env.MAX_PARALLEL as string, 1),

  spaceId: process.env.CONTENTFUL_SPACE_ID as string,
  environmentId: process.env.CONTENTFUL_ENVIRONMENT_ID as string,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN as string,
  contentFile: process.env.CONTENTFUL_EXPORT_FILE_NAME as string,
  exportDir: process.env.LOCAL_BACKUP_PATH as string,
  s3ExportBucket: process.env.S3_EXPORT_BUCKET_NAME as string,
};
