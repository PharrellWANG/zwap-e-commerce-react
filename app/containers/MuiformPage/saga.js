import request from 'utils/request';
// import { delay } from 'redux-saga';
// import { formValueSelector } from 'redux-form';
import { call, put, takeLatest } from 'redux-saga/effects';
import { SUBMIT_APPLICATION } from './constants';
import { submitSuccess, submitFail } from './actions';
// import makeSelectReduxFormState from './selectors';

// Individual exports for testing
// pha.zx //
// pay attention here we can pass action for watcher!
export function* submitApp(action) {
  // See example in containers/HomePage/saga.js
  // const simpleFormData = yield select(makeSelectReduxFormState());
  const requestURL = 'http://218.255.104.158:6789/zwap-pay/init/';
  // if you want to use nginx, then use the below code instead
  // const requestURL = '/zwap-pay/init/';
  const options = {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // mode: 'no-cors',
    // redirect: 'follow',
    body: JSON.stringify(action.formData),
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
    //   // 'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    //   // 'Access-Control-Allow-Methods': '*',
    //   // 'Access-Control-Allow-Credentials': 'true',
    //   // 'Access-Control-Allow-Credentials': '*',
    //   // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    //   // 'Access-Control-Allow-Headers': '*',
    //   // 'Access-Control-Request-Headers': 'x-requested-with, content-type, accept, origin, authorization, x-csrftoken, user-agent, accept-encoding',
    },
  };
  try {
    // yield call(delay, 1000);
    yield call(request, requestURL, options);
    yield put(submitSuccess());
  } catch (err) {
    yield put(submitFail());
  }
}

export default function* initPostFromThirdParty() {
  yield takeLatest(SUBMIT_APPLICATION, submitApp);
}
