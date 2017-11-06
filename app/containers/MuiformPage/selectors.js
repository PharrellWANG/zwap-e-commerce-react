import { createSelector } from 'reselect';

/**
 * Direct selector to the muiformPage state domain
 */
const selectMuiformPageDomain = (state) => state.get('muiformPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MuiformPage
 */

const makeSelectMuiformPage = () => createSelector(
  selectMuiformPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectMuiformPage;
export {
  selectMuiformPageDomain,
};
