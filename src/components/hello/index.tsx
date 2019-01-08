import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ACTION_CLICK, ActionType, createAction } from './actions';
import { View } from './View';
import { RootState } from '../../reducers';

export { reducer } from './reducer';

export interface State {
  isClicked: boolean;
}

const mapStateToProps = (state: RootState) => ({
  isClicked: state.hello.isClicked
});

const mapDispatchToProps = (dispatch: Dispatch<Action<ActionType>>) => ({
  onClick: () => dispatch(createAction(ACTION_CLICK))
});

export const Hello = connect(mapStateToProps, mapDispatchToProps)(View);
