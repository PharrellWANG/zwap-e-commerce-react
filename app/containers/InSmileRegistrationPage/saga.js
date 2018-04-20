/* eslint-disable no-console */
import request from 'utils/request';
// import { delay } from 'redux-saga';
import serialize from 'serialize-javascript';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  accountChecking,
  hasExistingLoanInProgress,
  creditNotEnoughSorry,
  duplicatedHKID,
  duplicatedMobile,
  showRejectionNotice,
  letMeSubmitSuccess,
  // accountCheckingFail,
} from './actions';
// Individual exports for testing
import {
  IS_IT_NEEDED_TO_DISPLAY_PW_FIELD, SUBMIT_APPLICATION_FOR_AUTO_APPROVE,
} from './constants';

// const prefilled = makeSelectMainPageFormData();
export function* submitInSmileApplication(action) {
  const requestURL = 'http://218.255.104.158:6789/zwap-pay/insmile/receive-application/';
  // const requestURL = 'https://platform.zwap.hk/zwap-pay/insmile/receive-application/';

  const strData = serialize({
    // formData: action.formData,
    formData: JSON.stringify(action.formData),
    whichParty: 'InSmile',
  });
  // console.log(strData);
  const options = {
    method: 'POST',
    body: strData,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // const options = {
  //   method: 'POST',
  //   body: JSON.stringify({ formData: action.formData, whichParty: 'InSmile' }),
    // body: JSON.stringify(action.formData),
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  // };
  try {
    // yield call(delay, 1000);
    const data = yield call(request, requestURL, options);
    console.log('<------ the response from server is: --->');
    console.log(data.hasExistingLoanUnsettled);
    // console.log(data.creditNotEnough);
    // console.log(data.duplicatedMobile);
    // console.log(data.duplicatedHKID);
    // console.log(data.rejectedByCreditEvaluationSystem);
    if (data.hasExistingLoanUnsettled === true) {
      yield put(hasExistingLoanInProgress());
    } else if (data.creditNotEnough === true) {
      yield put(creditNotEnoughSorry(data.credit.amount));
    } else if (data.duplicatedMobile === true) {
      yield put(duplicatedMobile());
    } else if (data.duplicatedHKID === true) {
      yield put(duplicatedHKID());
    } else if (data.rejectedByCreditEvaluationSystem === true) {
      yield put(showRejectionNotice());
    } else {
      yield put(letMeSubmitSuccess());
    }
  } catch (err) {
    console.log('something wrong in insmile submitinfo saga');
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
    // yield put(accountCheckingFail());
    console.log('this should not happen..');
  }
}


export default function* fetchAndLoadData() {
  yield [
    takeLatest(IS_IT_NEEDED_TO_DISPLAY_PW_FIELD, checkIfAccountExistsOrNot),
    takeLatest(SUBMIT_APPLICATION_FOR_AUTO_APPROVE, submitInSmileApplication),
  ];
}

