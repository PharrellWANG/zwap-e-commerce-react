/*
 *
 * ApplicationFormPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_AND_LOAD,
  FETCH_AND_LOAD_SUCCESS,
  FETCH_AND_LOAD_FAIL,
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
  TOGGLE_SEE_PW,
  HAS_EXISTING_LOAN_IN_PROGRESS,
  CREDIT_NOT_ENOUGH,
  DUPLICATED_HKID,
  DUPLICATED_MOBILE,
  SHOW_REJECTION_NOTICE,
  AUTO_APPROVED_AND_YOU_CAN_APPLY_MORE,
  CANCEL_APPLICATION_SUCCEEDED,
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
  displayPwInputInstructionOnce: 1,
  displayCongrats: false,
  displayEmailHint: true,
  seePwAsPlainText: false,
  displayCongratsOnce: 1,
  displayEmailHintOnce: 1,
  showNoticeOfYouHaveLoanInProgress: false,
  showNoticeOfCreditNotEnough: false,
  showRejectionNotice: false,
  autoApprovedYouCanApplyMore: false,
  duplicatedHKID: false,
  duplicatedMobile: false,
  ZwapCredit: 0,
  LOA: '',
  showDialogOfCancelApplicationSucceeded: false,
});

function applicationFormPageReducer(state = initialState, action) {
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
        // only one of them can be true ////////////////////////////////////////////////////////////////
        .set('duplicatedMobile', false)
        .set('autoApprovedYouCanApplyMore', false)
        .set('duplicatedHKID', false)
        .set('showNotification', true)
        .set('showNoticeOfYouHaveLoanInProgress', false)
        .set('showNoticeOfCreditNotEnough', false)
        .set('showRejectionNotice', false)
        .set('openDialog', false);
    case HAS_EXISTING_LOAN_IN_PROGRESS:
      return state
        .set('submitInProgress', false)
        .set('submitError', false)
        .set('submitSuccess', true)
        // only one of them can be true////////////////////////////////////////////////////////////////
        .set('autoApprovedYouCanApplyMore', false)
        .set('duplicatedMobile', false)
        .set('duplicatedHKID', false)
        .set('showNoticeOfYouHaveLoanInProgress', true)
        .set('showRejectionNotice', false)
        .set('showNoticeOfCreditNotEnough', false)
        .set('showNotification', false)
        .set('openDialog', false);
    case DUPLICATED_HKID:
      return state
        .set('submitInProgress', false)
        .set('submitError', false)
        .set('submitSuccess', true)
        // only one of them can be true////////////////////////////////////////////////////////////////
        .set('duplicatedMobile', false)
        .set('duplicatedHKID', true)
        .set('showNoticeOfYouHaveLoanInProgress', false)
        .set('showNoticeOfCreditNotEnough', false)
        .set('showRejectionNotice', false)
        .set('showNotification', false)
        .set('openDialog', false);
    case DUPLICATED_MOBILE:
      return state
        .set('submitInProgress', false)
        .set('submitError', false)
        .set('submitSuccess', true)
        // only one of them can be true////////////////////////////////////////////////////////////////
        .set('autoApprovedYouCanApplyMore', false)
        .set('duplicatedMobile', true)
        .set('duplicatedHKID', false)
        .set('showNoticeOfYouHaveLoanInProgress', false)
        .set('showNoticeOfCreditNotEnough', false)
        .set('showNotification', false)
        .set('showRejectionNotice', false)
        .set('openDialog', false);
    case SHOW_REJECTION_NOTICE:
      return state
        .set('duplicatedHKID', false)
        .set('duplicatedMobile', false)
        .set('submitInProgress', false)
        .set('submitError', false)
        .set('submitSuccess', true)
        // only one of them can be true////////////////////////////////////////////////////////////////
        .set('autoApprovedYouCanApplyMore', false)
        .set('duplicatedMobile', false)
        .set('duplicatedHKID', false)
        .set('showNoticeOfYouHaveLoanInProgress', false)
        .set('showNoticeOfCreditNotEnough', false)
        .set('showRejectionNotice', true)
        .set('showNotification', false)
        .set('openDialog', false);
    case CREDIT_NOT_ENOUGH:
      return state
        .set('submitInProgress', false)
        .set('submitError', false)
        .set('submitSuccess', true)
        // set credit //
        .set('ZwapCredit', fromJS(action.data))
        // only one of them can be true////////////////////////////////////////////////////////////////
        .set('autoApprovedYouCanApplyMore', false)
        .set('duplicatedMobile', false)
        .set('duplicatedHKID', false)
        .set('showNoticeOfYouHaveLoanInProgress', false)
        .set('showNoticeOfCreditNotEnough', true)
        .set('showNotification', false)
        .set('showRejectionNotice', false)
        .set('openDialog', false);
    case AUTO_APPROVED_AND_YOU_CAN_APPLY_MORE:
      return state
        .set('submitInProgress', false)
        .set('submitError', false)
        .set('submitSuccess', true)
        // set credit //
        .set('ZwapCredit', fromJS(action.data.credit.amount)) // data.LOA; data.credit.amount
        .set('LOA', fromJS(action.data.LOA)) // data.LOA; data.credit.amount
        // only one of them can be true////////////////////////////////////////////////////////////////
        .set('autoApprovedYouCanApplyMore', true)
        .set('duplicatedMobile', false)
        .set('duplicatedHKID', false)
        .set('showNoticeOfYouHaveLoanInProgress', false)
        .set('showNoticeOfCreditNotEnough', false)
        .set('showNotification', false)
        .set('showRejectionNotice', false)
        .set('openDialog', false);
    //
    case CANCEL_APPLICATION_SUCCEEDED:
      return state
      // only one of them can be true
        .set('showDialogOfCancelApplicationSucceeded', true);
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

export default applicationFormPageReducer;
