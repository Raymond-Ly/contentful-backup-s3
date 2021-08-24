import assert from 'assert';
import { ALBResult } from 'aws-lambda';
import { STATUS_CODES } from 'http';
import { errorResponse, successResponse } from '../../src/helpers/responseHelper';

const jsonResponse = (status: number, body: any): ALBResult => ({
  statusCode: status,
  statusDescription: `${status} ${STATUS_CODES[status]}`,
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
  body: JSON.stringify(body),
  isBase64Encoded: false,
});

describe('successResponse', () => {
  it('returns a success response using ALBResult type', () => {
    const body = {
      id: 123,
      name: 'helloWorld',
    };

    assert.strictEqual(JSON.stringify(successResponse(body)), JSON.stringify(jsonResponse(200, body)));
  });
});

describe('errorResponse', () => {
  it('returns an error response using ALBResult type', () => {
    const body = {
      message: 'An unpexcted error occurred',
    };

    assert.strictEqual(JSON.stringify(errorResponse(body)), JSON.stringify(jsonResponse(500, body)));
  });
});
