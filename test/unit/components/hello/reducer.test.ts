import { reducer, State } from '../../../../src/components/hello';
import { ACTION_CLICK, createAction } from '../../../../src/components/hello/actions';

describe('Hello reducer', () => {
  it('should mark isClicked as true when action is ACTION_CLICK', () => {
    const currentState: State = { isClicked: false };
    const action = createAction(ACTION_CLICK);
    const state = reducer(currentState, action);

    expect(currentState.isClicked).toBeFalsy();
    expect(state.isClicked).toBeTruthy();
  });

  it('should mark isClicked as false when action is default one', () => {
    const currentState: State = { isClicked: false };
    const state = reducer(currentState, {} as any);

    expect(currentState.isClicked).toBeFalsy();
    expect(state.isClicked).toBeFalsy();
  });
});
