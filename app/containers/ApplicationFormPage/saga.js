/* eslint-disable no-console */
import request from 'utils/request';
// import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  dataLoadSuccess,
  dataLoadFail,
  letMeSubmitSuccess,
  letMeSubmitFail,
  hasExistingLoanInProgress,
  creditNotEnoughSorry,
  accountChecking,
  accountCheckingFail,
  duplicatedMobile,
  duplicatedHKID,
  // SubmitStatus,
} from './actions';
// Individual exports for testing
import {
  FETCH_AND_LOAD,
  IS_IT_NEEDED_TO_DISPLAY_PW_FIELD,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE,
} from './constants';

export function* fetchData(action) {
  const tokenInUrl = action.token;
  // console.log(tokenInUrl);
  const requestURL = 'http://218.255.104.158:6789/zwap-pay/token-query/';
  // const requestURL = 'https://platform.zwap.hk/zwap-pay/token-query/';
  const options = {
    method: 'POST',
    body: JSON.stringify({ token: tokenInUrl }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    // yield call(delay, 3000);
    const data = yield call(request, requestURL, options);
    yield put(dataLoadSuccess(data));
  } catch (err) {
    yield put(dataLoadFail());
  }
}

// const prefilled = makeSelectMainPageFormData();

export function* submitInfo(action) {
  // trigger the button loading status
  // console.log('-----------------pharrell');
  // yield put(SubmitStatus());
  // console.log('-----------------pharrell----end');
  // console.log('================ here is the submitted data ===============');
  // console.log(JSON.stringify(action.formData));
  // yield call(delay, 3000);
  const requestURL = 'http://218.255.104.158:6789/zwap-pay/receive-application/';
  // const requestURL = 'https://platform.zwap.hk/zwap-pay/receive-application/';
  const options = {
    method: 'POST',
    body: JSON.stringify(action.formData),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    // yield call(delay, 1000);
    const data = yield call(request, requestURL, options);
    // console.log('---------------------~~~~~~~~~~~~~~~~~~~~~~~~~');
    // console.log('<------ the response from server is: --->');
    // console.log(data);
    // console.log(data.hasExistingLoanUnsettled === true);
    // console.log(data.creditNotEnough);
    if (data.hasExistingLoanUnsettled === true) {
      yield put(hasExistingLoanInProgress());
    } else if (data.creditNotEnough === true) {
      yield put(creditNotEnoughSorry(data.credit.amount));
    } else if (data.duplicatedMobile === true) {
      yield put(duplicatedMobile());
    } else if (data.duplicatedHKID === true) {
      yield put(duplicatedHKID());
    } else {
      yield put(letMeSubmitSuccess());
    }
  } catch (err) {
    yield put(letMeSubmitFail());
  }
}

export function* checkIfAccountExistsOrNot(action) {
  // console.log('===============saga==========, action data');
  // console.log(action.email);
  // console.log(typeof (action.email)); // type: string
  // console.log(JSON.stringify(action.email));
  const requestURL = 'http://218.255.104.158:6789/zwap-pay/check-if-account-exist/';
  // const requestURL = 'https://platform.zwap.hk/zwap-pay/check-if-account-exist/';
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
    // console.log('---------');
    // console.log('is account exist', data.isAccountExist);
    yield put(accountChecking(data.isAccountExist));
  } catch (err) {
    yield put(accountCheckingFail());
  }
}

export default function* fetchAndLoadData() {
  yield [
    takeLatest(FETCH_AND_LOAD, fetchData),
    takeLatest(SUBMIT_APPLICATION_FOR_AUTO_APPROVE, submitInfo),
    takeLatest(IS_IT_NEEDED_TO_DISPLAY_PW_FIELD, checkIfAccountExistsOrNot),
  ];
}

