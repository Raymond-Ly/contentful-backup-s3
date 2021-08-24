import { ALBResult } from 'aws-lambda';
import { STATUS_CODES } from 'http';
import { HttpError } from '../errors';

const jsonResponse = (status: number, body: unknown): ALBResult => ({
  statusCode: status,
  statusDescription: `${status} ${STATUS_CODES[status]}`,
  headers: { 'Content-Type': 'application/vnd.api+json' },
  body: JSON.stringify(body),
  isBase64Encoded: false,
});

export const successResponse = (body: unknown): ALBResult => {
  console.info('Returning success');
  return jsonResponse(200, body);
};

export const errorResponse = (err: unknown): ALBResult => {
  if (err instanceof HttpError) {
    console.info(`Failed to get response: ${err.message}\n${err.stack ?? ''}`);
    return jsonResponse(err.status, { message: err.message });
  }

  return jsonResponse(500, { message: 'An unpexcted error occurred' });
};
