import { Action } from 'redux';

export type ActionType = 'ACTION_CLICK';

export const ACTION_CLICK = 'ACTION_CLICK';
export const createAction = (type: ActionType): Action<ActionType> => {
  return { type };
};
