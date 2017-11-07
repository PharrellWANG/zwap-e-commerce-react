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
  DISPLAY_DIALOG,
  CLOSE_DIALOG,
} from './constants';

const initialState = fromJS({
  fetching: false,
  success: false,
  error: false,
  data: {
    orderReferenceNo: '',
    email: '',
    mobile: '',
  },
  openDialog: false,
});

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_AND_LOAD:
      return state
        .set('fetching', true)
        .set('success', false)
        .set('error', false);
    case FETCH_AND_LOAD_SUCCESS:
      // console.log(3);
      return state
        .set('fetching', false)
        .set('success', true)
        .set('error', false)
        .set('data', fromJS(action.data));
    case FETCH_AND_LOAD_FAIL:
      return state
        .set('fetching', false)
        .set('success', false)
        .set('error', true);
    case DISPLAY_DIALOG:
      return state
      .set('openDialog', true);
    case CLOSE_DIALOG:
      return state
      .set('openDialog', false);
    default:
      return state;
  }
}

export default mainPageReducer;
