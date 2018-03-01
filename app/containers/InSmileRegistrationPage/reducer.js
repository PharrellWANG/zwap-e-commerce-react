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
} from './constants';

const initialState = fromJS({
  displayPwFields: false,
  displayPwInputInstruction: false,
  displayPwInputInstructionOnce: 1,
  displayCongrats: false,
  displayEmailHint: true,
  seePwAsPlainText: false,
});

function inSmileRegistrationPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case ACCOUNT_CHECKING_SUCCESS_AND_HAVE_ACCOUNT:
      return state
        .set('displayPwFields', false)
        .set('displayPwInputInstruction', false)
        .set('displayCongrats', true)
        .set('displayEmailHint', false);
    case ACCOUNT_CHECKING_SUCCESS_AND_NO_ACCOUNT:
      return state
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
    default:
      return state;
  }
}

export default inSmileRegistrationPageReducer;
