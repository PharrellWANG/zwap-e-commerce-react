/*
 *
 * ApplicationFormPage actions
 *
 */

import {
  IS_IT_NEEDED_TO_DISPLAY_PW_FIELD,
  FETCH_AND_LOAD,
  FETCH_AND_LOAD_SUCCESS,
  FETCH_AND_LOAD_FAIL,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE_SUCCESS,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE_FAIL,
  CLOSE_NOTIFICATION,
  CLOSE_NOTICE_OF_YOU_HAVE_LOAN_IN_PROGRESS,
  ACCOUNT_CHECKING_SUCCESS_AND_HAVE_ACCOUNT,
  ACCOUNT_CHECKING_SUCCESS_AND_NO_ACCOUNT,
  ACCOUNT_CHECKING_FAIL,
  HAS_EXISTING_LOAN_IN_PROGRESS,
  CLOSE_SNACKBAR_CONGRATS,
  CLOSE_SNACKBAR_EMAIL,
  CLOSE_SNACKBAR_PW,
  TOGGLE_SEE_PW,
  CREDIT_NOT_ENOUGH,
  DUPLICATED_MOBILE,
  DUPLICATED_HKID,
  SHOW_REJECTION_NOTICE,
} from './constants';

export function closeSnackBarEmail() {
  return {
    type: CLOSE_SNACKBAR_EMAIL,
  };
}

export function togglePwAsPlainText(checked) {
  return {
    type: TOGGLE_SEE_PW,
    data: checked,
  };
}

// export const closeSnackbarEmail = () => ({ type: CLOSE_SNACKBAR_EMAIL });

export function fetchAndLoad(token) {
  return {
    type: FETCH_AND_LOAD,
    token,
  };
}

export function dataLoadSuccess(data) {
  // console.log(data);
  return {
    type: FETCH_AND_LOAD_SUCCESS,
    data,
  };
}

export function dataLoadFail() {
  return {
    type: FETCH_AND_LOAD_FAIL,
  };
}

export function closeNotification() {
  return {
    type: CLOSE_NOTIFICATION,
  };
}

export function closeNoticeOfYouHaveLoanInProgress() {
  return {
    type: CLOSE_NOTICE_OF_YOU_HAVE_LOAN_IN_PROGRESS,
  };
}

export function closeSnackBarCongrats() {
  return {
    type: CLOSE_SNACKBAR_CONGRATS,
  };
}

export function closeSnackBarPw() {
  return {
    type: CLOSE_SNACKBAR_PW,
  };
}

export function letMeSubmit(values) {
  return {
    type: SUBMIT_APPLICATION_FOR_AUTO_APPROVE,
    formData: values,
  };
}

// export function SubmitStatus() {
//   return {
//     type: SUBMIT_APPLICATION_FOR_AUTO_APPROVE_STATUS,
//   };
// }

export function letMeSubmitSuccess() {
  return {
    type: SUBMIT_APPLICATION_FOR_AUTO_APPROVE_SUCCESS,
  };
}

export function hasExistingLoanInProgress() {
  return {
    type: HAS_EXISTING_LOAN_IN_PROGRESS,
  };
}

export function duplicatedHKID() {
  return {
    type: DUPLICATED_HKID,
  };
}

export function showRejectionNotice() {
  return {
    type: SHOW_REJECTION_NOTICE,
  };
}

export function duplicatedMobile() {
  return {
    type: DUPLICATED_MOBILE,
  };
}

export function creditNotEnoughSorry(data) {
  return {
    type: CREDIT_NOT_ENOUGH,
    data,
  };
}

export function accountChecking(data) {
  if (data) {
    return {
      type: ACCOUNT_CHECKING_SUCCESS_AND_HAVE_ACCOUNT,
    };
  }
  return {
    type: ACCOUNT_CHECKING_SUCCESS_AND_NO_ACCOUNT,
  };
}

export function accountCheckingFail() {
  return {
    type: ACCOUNT_CHECKING_FAIL,
  };
}

export function isItNeededToDisplayPwField(email) {
  return {
    type: IS_IT_NEEDED_TO_DISPLAY_PW_FIELD,
    email,
  };
}

export function letMeSubmitFail() {
  return {
    type: SUBMIT_APPLICATION_FOR_AUTO_APPROVE_FAIL,
  };
}
// export function loadFormData(loanApplicationFormData) {
//   return {
//     type: LOAD_DATA_TO_FORM,
//     formData: loanApplicationFormData,
//   };
// }

