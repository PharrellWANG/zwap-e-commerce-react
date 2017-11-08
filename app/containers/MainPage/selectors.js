import { createSelector } from 'reselect';

/**
 * Direct selector to the mainPage state domain
 */
// import { getFormInitialValues } from 'redux-form/immutable';

const selectMainPageDomain = (state) => state.get('mainPage');

// const formInitialValues = (state) => state.get('form');

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

const getSuccessNotice = () => createSelector(
  selectMainPageDomain,
  (subState) => subState.get('success'),
);

const makeSelectMainPageFormData = () => createSelector(
  selectMainPageDomain,
  (subState) => subState.get('data').toJS(),
);

export default makeSelectMainPageOpenDialog;

export {
  selectMainPageDomain,
  makeSelectMainPageFormData,
  getSuccessNotice,
  // formInitialValues,
  // myComplexSelector,
};
