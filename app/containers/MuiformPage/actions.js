/*
 *
 * MuiformPage actions
 *
 */

import {
  SUBMIT_APPLICATION,
} from './constants';

export function submitApplication() {
  return {
    type: SUBMIT_APPLICATION,
  };
}
