import * as React from 'react';
import { ErrorType, ErrorObject } from './models/errorObject';
import { Props as ErrorViewProps } from './View';

export interface Props {
  errorType: ErrorType;
}

const mapToError = (errorType: ErrorType): ErrorObject => {
  switch (errorType) {
    case 'NotFound':
      return ErrorObject.NotFound;
    default:
      return ErrorObject.InternalError;
  }
};

export const withErrorObject = (Child: React.ComponentType<ErrorViewProps>):
  React.ComponentType<Props> => ((props: Props) =>
  <Child error={ mapToError(props.errorType) }/>);
