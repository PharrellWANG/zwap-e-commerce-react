import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  dataLoadSuccess,
  dataLoadFail,
} from './actions';
// Individual exports for testing
import { FETCH_AND_LOAD } from './constants';

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
    // yield call(delay, 1000);
    const data = yield call(request, requestURL, options);
    yield put(dataLoadSuccess(data));
  } catch (err) {
    yield put(dataLoadFail());
  }
}

export default function* fetchAndLoadData() {
  yield takeLatest(FETCH_AND_LOAD, fetchData);
}
