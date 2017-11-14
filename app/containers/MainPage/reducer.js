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
  DISPLAY_NOTIFICATION,
  CLOSE_NOTIFICATION,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE_SUCCESS,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE_FAIL,
  ACCOUNT_CHECKING_SUCCESS_AND_HAVE_ACCOUNT,
  ACCOUNT_CHECKING_SUCCESS_AND_NO_ACCOUNT,
  CLOSE_SNACKBAR_CONGRATS, CLOSE_SNACKBAR_EMAIL,
  CLOSE_SNACKBAR_PW,
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
  showNotification: false,
  submitInProgress: false,
  submitError: false,
  submitSuccess: false,
  displayPwFields: false,
  displayCongrats: false,
  displayEmailHint: true,
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
    case DISPLAY_NOTIFICATION:
      return state
      .set('showNotification', true);
    case CLOSE_NOTIFICATION:
      return state
      .set('showNotification', false);
    case SUBMIT_APPLICATION_FOR_AUTO_APPROVE:
      return state
      .set('submitInProgress', true)
      .set('submitError', false)
      .set('submitSuccess', false);
    case SUBMIT_APPLICATION_FOR_AUTO_APPROVE_SUCCESS:
      return state
      .set('submitInProgress', false)
      .set('submitError', false)
      .set('submitSuccess', true)
      .set('showNotification', true);
    case SUBMIT_APPLICATION_FOR_AUTO_APPROVE_FAIL:
      return state
      .set('submitInProgress', false)
      .set('submitError', true)
      .set('submitSuccess', false);
    case ACCOUNT_CHECKING_SUCCESS_AND_HAVE_ACCOUNT:
      return state
      .set('displayPwFields', false)
      .set('displayCongrats', true)
      .set('displayEmailHint', false);
    case ACCOUNT_CHECKING_SUCCESS_AND_NO_ACCOUNT:
      return state
      .set('displayPwFields', true)
      .set('displayCongrats', false)
      .set('displayEmailHint', false);
    case CLOSE_SNACKBAR_CONGRATS:
      return state
      .set('displayCongrats', false);
    case CLOSE_SNACKBAR_EMAIL:
      return state
      .set('displayEmailHint', false);
    case CLOSE_SNACKBAR_PW:
      return state
      .set('displayPwFields', false);
    default:
      return state;
  }
}

export default mainPageReducer;
