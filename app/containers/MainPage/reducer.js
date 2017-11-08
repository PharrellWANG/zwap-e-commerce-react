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
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE_SUCCESS,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE_FAIL,
} from './constants';

const initialState = fromJS({
  fetching: false,
  success: false,
  error: false,
  data: {
    orderReferenceNo: '',
    amountToPay: '',
    productName: '',
    email: '',
    mobile: '',
  },
  openDialog: false,
  submitInProgress: false,
  submitError: false,
  submitSuccess: false,
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
    case SUBMIT_APPLICATION_FOR_AUTO_APPROVE:
      return state
      .set('submitInProgress', true)
      .set('submitError', false)
      .set('submitSuccess', false);
    case SUBMIT_APPLICATION_FOR_AUTO_APPROVE_SUCCESS:
      return state
      .set('submitInProgress', false)
      .set('submitError', false)
      .set('submitSuccess', true);
    case SUBMIT_APPLICATION_FOR_AUTO_APPROVE_FAIL:
      return state
      .set('submitInProgress', false)
      .set('submitError', true)
      .set('submitSuccess', false);
    default:
      return state;
  }
}

export default mainPageReducer;
