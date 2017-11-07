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
// export function loadFormData(loanApplicationFormData) {
//   return {
//     type: LOAD_DATA_TO_FORM,
//     formData: loanApplicationFormData,
//   };
// }
