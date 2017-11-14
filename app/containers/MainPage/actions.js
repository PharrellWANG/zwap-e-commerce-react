/*
 *
 * MainPage actions
 *
 */

import {
  IS_IT_NEEDED_TO_DISPLAY_PW_FIELD,
  FETCH_AND_LOAD,
  FETCH_AND_LOAD_SUCCESS,
  FETCH_AND_LOAD_FAIL,
  DISPLAY_DIALOG,
  CLOSE_DIALOG,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE_SUCCESS,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE_FAIL,
  CLOSE_NOTIFICATION,
  // ACCOUNT_CHECKING_SUCCESS,
  ACCOUNT_CHECKING_SUCCESS_AND_HAVE_ACCOUNT,
  ACCOUNT_CHECKING_SUCCESS_AND_NO_ACCOUNT,
  ACCOUNT_CHECKING_FAIL,
  CLOSE_SNACKBAR_CONGRATS,
  CLOSE_SNACKBAR_EMAIL,
  CLOSE_SNACKBAR_PW,
} from './constants';

export function closeSnackBarEmail() {
  // console.log('fucccccccc-------');
  return {
    type: CLOSE_SNACKBAR_EMAIL,
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

export function noTokenInUrlDisplayDialog() {
  return {
    type: DISPLAY_DIALOG,
  };
}

export function closeDialog() {
  return {
    type: CLOSE_DIALOG,
  };
}

export function closeNotification() {
  return {
    type: CLOSE_NOTIFICATION,
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

export function letMeSubmitSuccess() {
  return {
    type: SUBMIT_APPLICATION_FOR_AUTO_APPROVE_SUCCESS,
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
