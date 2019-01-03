import * as React from 'react';

interface Props {
  message: string
}

export const Hello = (props: Props) => <h1>Hello, {props.message}.</h1>;
