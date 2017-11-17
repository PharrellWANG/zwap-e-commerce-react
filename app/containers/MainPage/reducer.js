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
  CLOSE_NOTICE_OF_YOU_HAVE_LOAN_IN_PROGRESS,
  CLOSE_SNACKBAR_PW,
  TOGGLE_SEE_PW, HAS_EXISTING_LOAN_IN_PROGRESS,
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
  displayPwInputInstruction: false,
  displayCongrats: false,
  displayEmailHint: true,
  seePwAsPlainText: false,
  displayCongratsOnce: 1,
  displayEmailHintOnce: 1,
  displayPwInputInstructionOnce: 1,
  showNoticeOfYouHaveLoanInProgress: false,
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
      // console.log('xxxx---tripple');
      return state
      .set('submitInProgress', true)
      .set('submitError', false)
      .set('submitSuccess', false);
    // case SUBMIT_APPLICATION_FOR_AUTO_APPROVE_STATUS:
    //   console.log('xxxx---tripple x, or no, four');
    //   return state
    //   .set('submitInProgress', true)
    //   .set('submitError', false)
    //   .set('submitSuccess', false);
    case SUBMIT_APPLICATION_FOR_AUTO_APPROVE_SUCCESS:
      return state
      .set('submitInProgress', false)
      .set('submitError', false)
      .set('submitSuccess', true)
      // only one of them can be true
      .set('showNotification', true)
      .set('showNoticeOfYouHaveLoanInProgress', false)
      .set('openDialog', false);
    case HAS_EXISTING_LOAN_IN_PROGRESS:
      return state
      .set('submitInProgress', false)
      .set('submitError', false)
      .set('submitSuccess', true)
      // only one of them can be true
      .set('showNoticeOfYouHaveLoanInProgress', true)
      .set('showNotification', false)
      .set('openDialog', false);
    case CLOSE_NOTICE_OF_YOU_HAVE_LOAN_IN_PROGRESS:
      return state
      // only one of them can be true
      .set('showNoticeOfYouHaveLoanInProgress', false);
    case SUBMIT_APPLICATION_FOR_AUTO_APPROVE_FAIL:
      return state
      .set('submitInProgress', false)
      .set('submitError', true)
      .set('submitSuccess', false);
    case ACCOUNT_CHECKING_SUCCESS_AND_HAVE_ACCOUNT:
      return state
      .set('displayPwInputInstruction', false)
      .set('displayCongrats', true)
      .set('displayPwFields', false)
      .set('displayEmailHint', false);
    case ACCOUNT_CHECKING_SUCCESS_AND_NO_ACCOUNT:
      return state
      .set('displayPwFields', true)
      .set('displayPwInputInstruction', true)
      .set('displayCongrats', false)
      .set('displayEmailHint', false);
    case CLOSE_SNACKBAR_CONGRATS:
      return state
      .set('displayCongratsOnce', 2)
      .set('displayCongrats', false);
    case CLOSE_SNACKBAR_EMAIL:
      return state
      .set('displayEmailHintOnce', 2)
      .set('displayEmailHint', false);
    case CLOSE_SNACKBAR_PW:
      return state
      .set('displayPwInputInstructionOnce', 2)
      .set('displayPwInputInstruction', false);
    case TOGGLE_SEE_PW:
      return state
      .set('seePwAsPlainText', action.data);
    default:
      return state;
  }
}

export default mainPageReducer;
