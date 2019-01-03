export type ErrorType = 'NotFound' | 'InternalError';

export class ErrorObject {
  public static NotFound: ErrorObject = new ErrorObject(
    'NotFound',
    'Page not found',
    'The requested URL was not found');
  public static InternalError: ErrorObject = new ErrorObject(
    'InternalError',
    'Server internal error',
    'Please contact administrator');

  private constructor(public kind: ErrorType, public title: string, public message: string) {
  }
}
