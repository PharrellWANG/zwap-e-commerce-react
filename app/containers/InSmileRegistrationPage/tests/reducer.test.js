
import { fromJS } from 'immutable';
import inSmileRegistrationPageReducer from '../reducer';

describe('inSmileRegistrationPageReducer', () => {
  it('returns the initial state', () => {
    expect(inSmileRegistrationPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
