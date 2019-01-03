import { createStore, Store } from 'redux';
import { combinedReducer, RootAction, RootState } from '../reducers';

export const configureStore = (initialState: object = {}): Store<RootState, RootAction> => {
  return createStore(combinedReducer, initialState);
};
