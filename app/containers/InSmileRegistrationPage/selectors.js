import { createSelector } from 'reselect';

/**
 * Direct selector to the inSmileRegistrationPage state domain
 */
const selectInSmileRegistrationPageDomain = (state) => state.get('inSmileRegistrationPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by InSmileRegistrationPage
 */

const makeSelectInSmileRegistrationPage = () => createSelector(
  selectInSmileRegistrationPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectInSmileRegistrationPage;
export {
  selectInSmileRegistrationPageDomain,
};
