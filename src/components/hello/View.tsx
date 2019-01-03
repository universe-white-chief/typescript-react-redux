import * as React from 'react';

export interface Props {
  message: string;
  isClicked: boolean;
  onClick: (this: void) => void;
}

export const View: React.SFC<Props> = ({ message, isClicked, onClick }: Props) =>
  <div>
    <h1 className="hello">Hello, { message }{ isClicked ? ', again' : '' }.</h1>
    <button type="button" onClick={ onClick }>Hi</button>
  </div>;
