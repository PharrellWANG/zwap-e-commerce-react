/* eslint-disable no-console */
import request from 'utils/request';
// import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  accountChecking,
  accountCheckingFail,
} from './actions';
// Individual exports for testing
import {
  IS_IT_NEEDED_TO_DISPLAY_PW_FIELD,
} from './constants';

// const prefilled = makeSelectMainPageFormData();

export function* checkIfAccountExistsOrNot(action) {
  // console.log('===============saga==========, action data');
  // console.log(action.email);
  // console.log(typeof (action.email)); // type: string
  // console.log(JSON.stringify(action.email));
  // const requestURL = 'http://218.255.104.158:6789/zwap-pay/check-if-account-exist/';
  const requestURL = 'https://platform.zwap.hk/zwap-pay/check-if-account-exist/';
  const options = {
    method: 'POST',
    body: JSON.stringify({ email: action.email }),
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    // yield call(delay, 1000);
    const data = yield call(request, requestURL, options);
    console.log('---------');
    console.log('is account exist', data.isAccountExist);
    yield put(accountChecking(data.isAccountExist));
  } catch (err) {
    yield put(accountCheckingFail());
  }
}


export default function* fetchAndLoadData() {
  yield [
    takeLatest(IS_IT_NEEDED_TO_DISPLAY_PW_FIELD, checkIfAccountExistsOrNot),
  ];
}

