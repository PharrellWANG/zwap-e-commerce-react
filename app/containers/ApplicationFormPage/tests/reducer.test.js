
import { fromJS } from 'immutable';
import applicationFormPageReducer from '../reducer';

describe('applicationFormPageReducer', () => {
  it('returns the initial state', () => {
    expect(applicationFormPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
