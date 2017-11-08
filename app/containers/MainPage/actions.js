/*
 *
 * MainPage actions
 *
 */

import {
  FETCH_AND_LOAD,
  FETCH_AND_LOAD_SUCCESS,
  FETCH_AND_LOAD_FAIL,
  DISPLAY_DIALOG,
  CLOSE_DIALOG,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE_SUCCESS,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE_FAIL,
  CLOSE_NOTIFICATION,
} from './constants';

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
