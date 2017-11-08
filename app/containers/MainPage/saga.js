import request from 'utils/request';
// import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  dataLoadSuccess,
  dataLoadFail,
  letMeSubmitSuccess,
  letMeSubmitFail,
} from './actions';
// Individual exports for testing
import {
  FETCH_AND_LOAD,
  SUBMIT_APPLICATION_FOR_AUTO_APPROVE,
} from './constants';

export function* fetchData(action) {
  const tokenInUrl = action.token;
  // console.log(tokenInUrl);
  const requestURL = 'http://218.255.104.158:6789/zwap-pay/token-query/';
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
  const requestURL = 'http://192.168.0.167:6789/zwap-pay/receive-initial-application/';
  // console.log(JSON.stringify(action.formData));
  const options = {
    method: 'POST',
    body: JSON.stringify(action.formData),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    // yield call(delay, 1000);
    yield call(request, requestURL, options);
    yield put(letMeSubmitSuccess());
  } catch (err) {
    yield put(letMeSubmitFail());
  }
}

export default function* fetchAndLoadData() {
  yield [
    takeLatest(FETCH_AND_LOAD, fetchData),
    takeLatest(SUBMIT_APPLICATION_FOR_AUTO_APPROVE, submitInfo),
  ];
}
