import * as React from 'react';

export interface Props {
  message: string;
  isClicked: boolean;
  onClick: (this: void) => void;
}

export const View = ({ message, isClicked, onClick }: Props) =>
  <div>
    <h1 className="title">Hello, { message }{ isClicked ? ', again' : '' }.</h1>
    <button type="button" onClick={ onClick }>Hi</button>
  </div>;
