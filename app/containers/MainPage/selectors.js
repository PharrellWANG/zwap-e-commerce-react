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
 *   submitInProgress: false,
  submitError: false,
  submitSuccess: false,
 */
const makeSelectSubmitting = () => createSelector(
  selectMainPageDomain,
  (subState) => subState.get('submitInProgress')
);

const makeSelectError = () => createSelector(
  selectMainPageDomain,
  (subState) => subState.get('submitError')
);

const makeSelectSuccess = () => createSelector(
  selectMainPageDomain,
  (subState) => subState.get('submitSuccess')
);

// const makeSelectOpenNotification = () => createSelector(
//   selectMainPageDomain(),
//   (subState) => subState.get('showNotification'),
// );
const makeSelectMainPageShowNotification = () => createSelector(
  selectMainPageDomain,
  (subState) => subState.get('showNotification'),
);

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

// const makeSelectMainPageFormDataOrderRef = () => createSelector(
//   makeSelectMainPageFormData,
//   (subState) => subState.get('OrderReferenceNo'),
// );

export default makeSelectMainPageOpenDialog;

export {
  selectMainPageDomain,
  makeSelectMainPageFormData,
  getSuccessNotice,
  makeSelectSubmitting,
  makeSelectError,
  makeSelectSuccess,
  makeSelectMainPageShowNotification,
  // makeSelectMainPageFormDataOrderRef,
  // makeSelectOpenNotification,
  // formInitialValues,
  // myComplexSelector,
};
