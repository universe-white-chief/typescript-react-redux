import { Action } from 'redux';
import { State } from './index';
import { ACTION_CLICK, ActionType } from './actions';

const initialState: State = {
  isClicked: false
};

export const reducer = (state: State = initialState, action: Action<ActionType>): State => {
  switch (action.type) {
    case ACTION_CLICK:
      return { ...state, isClicked: true };
    default:
      return state;
  }
};
