/*
 *
 * MainPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_AND_LOAD,
  FETCH_AND_LOAD_SUCCESS,
  FETCH_AND_LOAD_FAIL,
} from './constants';

const initialState = fromJS({
  fetching: false,
  success: false,
  error: false,
  data: '',
});

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_AND_LOAD:
      return state
        .set('fetching', true)
        .set('success', false)
        .set('error', false)
        .set('data', '');
    case FETCH_AND_LOAD_SUCCESS:
      return state
        .set('fetching', false)
        .set('success', true)
        .set('error', false)
        .set('data', action.data);
    case FETCH_AND_LOAD_FAIL:
      return state
        .set('fetching', false)
        .set('success', false)
        .set('error', true)
        .set('data', '');
    default:
      return state;
  }
}

export default mainPageReducer;
