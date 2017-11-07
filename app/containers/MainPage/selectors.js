import { createSelector } from 'reselect';

/**
 * Direct selector to the mainPage state domain
 */
const selectMainPageDomain = (state) => state.get('mainPage');

// const myComplexSelector = createSelector(
//   selectMainPageDomain,
//   (myState) => myState.get('data')
// );


/**
 * Other specific selectors
 */


/**
 * Default selector used by MainPage
 */

const makeSelectMainPageOpenDialog = () => createSelector(
  selectMainPageDomain,
  (subState) => subState.get('openDialog'),
);

const makeSelectMainPageFormData = () => createSelector(
  selectMainPageDomain,
  (subState) => subState.get('data').toJS(),
);

export default makeSelectMainPageOpenDialog;

export {
  selectMainPageDomain,
  makeSelectMainPageFormData,
  // myComplexSelector,
};
