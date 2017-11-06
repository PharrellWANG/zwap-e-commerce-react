/*
 *
 * MuiformPage actions
 *
 */

import {
  SUBMIT_APPLICATION,
  SUBMIT_APPLICATION_SUCCESS,
  SUBMIT_APPLICATION_FAILED,
} from './constants';

export function submitApplication(values) {
  return {
    type: SUBMIT_APPLICATION,
    formData: values,
  };
}

export function submitSuccess() {
  return {
    type: SUBMIT_APPLICATION_SUCCESS,
  };
}

export function submitFail() {
  return {
    type: SUBMIT_APPLICATION_FAILED,
  };
}
