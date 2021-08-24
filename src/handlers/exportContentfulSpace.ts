import '../helpers/handlerSetUp';
import { ALBResult } from 'aws-lambda';
import { errorResponse, successResponse } from '../helpers/responseHelper';
import { uploadFile } from '../helpers/s3/uploadFile';
import { exportSpace } from '../helpers/contentful/exportSpace';

module.exports.get = async (): Promise<ALBResult> => {
  try {
    const result = await exportSpace();

    await uploadFile();

    return successResponse(result);
  } catch (err) {
    return errorResponse(err);
  }
};
