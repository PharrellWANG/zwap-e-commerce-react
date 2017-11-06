
import { fromJS } from 'immutable';
import muiformPageReducer from '../reducer';

describe('muiformPageReducer', () => {
  it('returns the initial state', () => {
    expect(muiformPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
