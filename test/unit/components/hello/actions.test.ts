import { ACTION_CLICK, createAction } from '../../../../src/components/hello/actions';

describe('create action', () => {
  it('show create action based on type', () => {
    expect(createAction(ACTION_CLICK)).toEqual({ type: ACTION_CLICK });
  });
});
