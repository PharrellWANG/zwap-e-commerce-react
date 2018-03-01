/* eslint-disable no-console */
/*
 *
 * InSmileRegistrationPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE,
  CLOSE_SNACKBAR_CONGRATS,
  CLOSE_SNACKBAR_PW,
  TOGGLE_SEE_PW,
  IS_IT_NEEDED_TO_DISPLAY_PW_FIELD,
  ACCOUNT_CHECKING_SUCCESS_AND_HAVE_ACCOUNT,
  ACCOUNT_CHECKING_SUCCESS_AND_NO_ACCOUNT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function letMeSubmit(values) {
  console.log('yea, this is in action.js! excited! ---> ');
  console.log('formValues: ', values.toJS());
  return {
    type: SUBMIT_APPLICATION_FOR_AUTO_APPROVE,
    formData: values,
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

export function togglePwAsPlainText(checked) {
  return {
    type: TOGGLE_SEE_PW,
    data: checked,
  };
}

export function isItNeededToDisplayPwField(email) {
  return {
    type: IS_IT_NEEDED_TO_DISPLAY_PW_FIELD,
    email,
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
