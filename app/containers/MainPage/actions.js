/*
 *
 * MainPage actions
 *
 */

import {
  FETCH_AND_LOAD,
  FETCH_AND_LOAD_SUCCESS,
  FETCH_AND_LOAD_FAIL,
} from './constants';

export function fetchAndLoad(token) {
  return {
    type: FETCH_AND_LOAD,
    token,
  };
}

export function dataLoadSuccess(data) {
  return {
    type: FETCH_AND_LOAD_SUCCESS,
    data,
  };
}

export function dataLoadFail() {
  return {
    type: FETCH_AND_LOAD_FAIL,
  };
}
