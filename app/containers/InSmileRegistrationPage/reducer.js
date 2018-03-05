/*
 *
 * InSmileRegistrationPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  ACCOUNT_CHECKING_SUCCESS_AND_HAVE_ACCOUNT,
  ACCOUNT_CHECKING_SUCCESS_AND_NO_ACCOUNT,
  TOGGLE_SEE_PW,
  CLOSE_SNACKBAR_PW,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE,
  CREDIT_NOT_ENOUGH,
  DUPLICATED_HKID,
  DUPLICATED_MOBILE,
  HAS_EXISTING_LOAN_IN_PROGRESS,
  SHOW_REJECTION_NOTICE,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE_SUCCESS,
} from './constants';

const initialState = fromJS({
  displayPwFields: false,
  displayPwInputInstruction: false,
  displayPwInputInstructionOnce: 1,
  displayCongrats: false,
  displayEmailHint: true,
  seePwAsPlainText: false,

  submitInProgress: false,
  submitError: false,
  submitSuccess: false,
  // submitSuccess: true,
  // toggle one of the below items to truth to see it on web page.
  showNoticeOfYouHaveLoanInProgress: false,
  showNoticeOfCreditNotEnough: false,
  showRejectionNotice: false,
  duplicatedHKID: false,
  duplicatedMobile: false,
  showNotification: false,

  ZwapCredit: 0,
  LOA: '',
});

function inSmileRegistrationPageReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_REJECTION_NOTICE:
      return state
        .set('duplicatedHKID', false)
        .set('duplicatedMobile', false)
        .set('submitInProgress', false)
        .set('submitError', false)
        .set('submitSuccess', true)
        // only one of them can be true////////////////////////////////////////////////////////////////
        // .set('showNoticeOfYouHaveLoanInProgress', false)
        // .set('showNoticeOfCreditNotEnough', false)
        .set('showRejectionNotice', true);
        // .set('autoApprovedYouCanApplyMore', false)
        // .set('duplicatedHKID', false)
        // .set('duplicatedMobile', false)
        // .set('showNotification', false);
    case DUPLICATED_MOBILE:
      return state
        .set('submitInProgress', false)
        .set('submitError', false)
        .set('submitSuccess', true)
        // only one of them can be true////////////////////////////////////////////////////////////////
        .set('duplicatedMobile', true);
    case DUPLICATED_HKID:
      return state
        .set('submitInProgress', false)
        .set('submitError', false)
        .set('submitSuccess', true)
        // only one of them can be true////////////////////////////////////////////////////////////////
        .set('duplicatedHKID', true);
    case HAS_EXISTING_LOAN_IN_PROGRESS:
      return state
        .set('submitInProgress', false)
        .set('submitError', false)
        .set('submitSuccess', true)
        // only one of them can be true////////////////////////////////////////////////////////////////
        .set('showNoticeOfYouHaveLoanInProgress', true);
    case SUBMIT_APPLICATION_FOR_AUTO_APPROVE_SUCCESS:
      return state
        .set('submitInProgress', false)
        .set('submitError', false)
        .set('submitSuccess', true)
        // only one of them can be true ////////////////////////////////////////////////////////////////
        .set('showNotification', true);
    case CREDIT_NOT_ENOUGH:
      return state
        .set('submitInProgress', false)
        .set('submitError', false)
        .set('submitSuccess', true)
        // set credit //
        .set('ZwapCredit', fromJS(action.data))
        // only one of them can be true////////////////////////////////////////////////////////////////
        .set('showNoticeOfCreditNotEnough', true);
    case DEFAULT_ACTION:
      return state;
    case ACCOUNT_CHECKING_SUCCESS_AND_HAVE_ACCOUNT:
      return state
        .set('submitInProgress', false)
        .set('displayPwFields', false)
        .set('displayPwInputInstruction', false)
        .set('displayCongrats', true)
        .set('displayEmailHint', false);
    case ACCOUNT_CHECKING_SUCCESS_AND_NO_ACCOUNT:
      return state
        .set('submitInProgress', false)
        .set('displayPwFields', true)
        .set('displayPwInputInstruction', true)
        .set('displayCongrats', false)
        .set('displayEmailHint', false);
    case TOGGLE_SEE_PW:
      return state
        .set('seePwAsPlainText', action.data);
    case CLOSE_SNACKBAR_PW:
      return state
        .set('displayPwInputInstructionOnce', 2)
        .set('displayPwInputInstruction', false);
    case SUBMIT_APPLICATION_FOR_AUTO_APPROVE:
      // console.log('xxxx---tripple');
      return state
        .set('submitInProgress', true)
        .set('submitError', false)
        .set('submitSuccess', false);
    default:
      return state;
  }
}

export default inSmileRegistrationPageReducer;
