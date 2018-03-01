/* eslint-disable no-throw-literal,no-console */
import { isItNeededToDisplayPwField } from './actions';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncValidate = (values, dispatch) => {
  // this is the real part. we want to dispatch it to
  // change the state in redux store for redux form to access
  // console.log('--------');
  // console.log('yes, now async validation!');
  // console.log(values.get('email'));
  dispatch(isItNeededToDisplayPwField(values.get('email')));
  // console.log('');
  //
  // this is for return a fake promise, because this
  // is asked by redux form.
  return sleep(500).then(() => {
    // simulate server latency
  });
  // const p = Promise.resolve([1, 2, 3]);
  // return p.then((v) => console.log('Whatszzzzzup, so nice to see you here at console, my name is No.', v[0]));
};

export default asyncValidate;
