import * as React from 'react';
import { ErrorObject } from './models/errorObject';

export interface Props {
  error: ErrorObject;
}

export const View: React.ComponentType<Props> = ({ error }: Props) =>
  <div>
    <h1>{ error.title }</h1>
    <p>{ error.message }</p>
  </div>;
