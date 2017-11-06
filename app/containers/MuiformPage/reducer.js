/*
 *
 * MuiformPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SUBMIT_APPLICATION,
  SUBMIT_APPLICATION_SUCCESS,
  SUBMIT_APPLICATION_FAILED,
} from './constants';

const initialState = fromJS({
  submitting: false,
  error: false,
  success: false,
  // currentUser: false,
  // userData: {
  //   repositories: false,
  // },
});

function muiformPageReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_APPLICATION:
      return state
      .set('submitting', true)
      .set('error', false)
      .set('success', false);
    case SUBMIT_APPLICATION_SUCCESS:
      return state
      .set('submitting', false)
      .set('error', false)
      .set('success', true);
    case SUBMIT_APPLICATION_FAILED:
      return state
      .set('submitting', false)
      .set('error', true)
      .set('success', false);
    default:
      return state;
  }
}

export default muiformPageReducer;
