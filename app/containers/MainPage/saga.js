import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  dataLoadSuccess,
  dataLoadFail,
} from './actions';
// Individual exports for testing
import { FETCH_AND_LOAD } from './constants';

export function* fetchData(action) {
  // const username = yield select(makeSelectUsername());
  const token = action.token;
  const requestURL = 'http://218.255.104.158:6789/zwap-pay/token-query/';
  const options = {
    method: 'POST',
    body: JSON.stringify({ tokenQuery: token }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
  };
  try {
    // yield call(delay, 1000);
    const data = yield call(request, requestURL, options);
    yield put(dataLoadSuccess(data));
  } catch (err) {
    yield put(dataLoadFail());
  }
}

export default function* fetchAndLoadData() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FETCH_AND_LOAD, fetchData);
}
