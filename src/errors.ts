/* eslint-disable max-classes-per-file */
export class HttpError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestError extends HttpError {
  constructor(message: string) {
    super(message, 400);
    Error.captureStackTrace(this, this.constructor);
  }
}
