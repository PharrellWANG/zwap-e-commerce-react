/*
 *
 * MuiformPage actions
 *
 */

import {
  SUBMIT_APPLICATION,
  SUBMIT_APPLICATION_SUCCESS,
  SUBMIT_APPLICATION_FAILED,
  CLOSE_DIALOG,
} from './constants';

export function submitApplication(values) {
  return {
    type: SUBMIT_APPLICATION,
    formData: values,
  };
}

export function submitSuccess(data) {
  return {
    type: SUBMIT_APPLICATION_SUCCESS,
    data,
  };
}

export function submitFail() {
  return {
    type: SUBMIT_APPLICATION_FAILED,
  };
}

export function closeDialogBox() {
  return {
    type: CLOSE_DIALOG,
  };
}
