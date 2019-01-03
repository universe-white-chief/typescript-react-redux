import { StateType } from 'typesafe-actions';
import { Action, combineReducers } from 'redux';
import { reducer as hello } from '../components/hello';
import { ActionType as HelloActionType } from '../components/hello/actions';

const reducers = {
  hello
};

type KeyOfRootState = keyof typeof reducers;
export type RootState = {[key in KeyOfRootState]: StateType<typeof hello>};
export type RootAction = Action<HelloActionType>;
export const combinedReducer = combineReducers<RootState, RootAction>(reducers);
