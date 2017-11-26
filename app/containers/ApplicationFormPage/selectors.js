import { createSelector } from 'reselect';

/**
 * Direct selector to the ApplicationFormPage state domain
 */
// import { getFormInitialValues } from 'redux-form/immutable';

const selectApplicationFormPageDomain = (state) => state.get('applicationFormPage');

// const formInitialValues = (state) => state.get('form');

// const myComplexSelector = createSelector(
//   selectApplicationFormPageDomain,
//   (myState) => myState.get('data')
// );


/**
 * Other specific selectors
 */


/**
 * Default selector used by ApplicationFormPage
 *   submitInProgress: false,
 submitError: false,
 submitSuccess: false,
 */
const makeSelectSubmitting = () => createSelector(
  selectApplicationFormPageDomain,
  (subState) => subState.get('submitInProgress')
);

const makeSelectError = () => createSelector(
  selectApplicationFormPageDomain,
  (subState) => subState.get('submitError')
);

const makeSelectSuccess = () => createSelector(
  selectApplicationFormPageDomain,
  (subState) => subState.get('submitSuccess')
);

// const makeSelectOpenNotification = () => createSelector(
//   selectApplicationFormPageDomain(),
//   (subState) => subState.get('showNotification'),
// );
const makeSelectApplicationFormPageShowNotification = () => createSelector(
  selectApplicationFormPageDomain,
  (subState) => subState.get('showNotification'),
);

const makeSelectApplicationFormPageShowNoticeOfYouHaveLoanInProgress = () => createSelector(
  selectApplicationFormPageDomain,
  (subState) => subState.get('showNoticeOfYouHaveLoanInProgress'),
);

const selectDuplicatedHKID = () => createSelector(
  selectApplicationFormPageDomain,
  (subState) => subState.get('duplicatedHKID'),
);

const selectDuplicatedMobile = () => createSelector(
  selectApplicationFormPageDomain,
  (subState) => subState.get('duplicatedMobile'),
);

const selectShowRejectionNotice = () => createSelector(
  selectApplicationFormPageDomain,
  (subState) => subState.get('showRejectionNotice'),
);

const makeSelectApplicationFormPageShowNoticeOfCreditNotEnough = () => createSelector(
  selectApplicationFormPageDomain,
  (subState) => subState.get('showNoticeOfCreditNotEnough'),
);

const makeSelectApplicationFormPageZwapCredit = () => createSelector(
  selectApplicationFormPageDomain,
  (subState) => subState.get('ZwapCredit'),
);

const getSuccessNotice = () => createSelector(
  selectApplicationFormPageDomain,
  (subState) => subState.get('success'),
);

const makeSelectApplicationFormPageFormData = () => createSelector(
  selectApplicationFormPageDomain,
  (subState) => subState.get('data').toJS(),
);

export {
  selectShowRejectionNotice,
  selectDuplicatedMobile,
  selectDuplicatedHKID,
  selectApplicationFormPageDomain,
  makeSelectApplicationFormPageFormData,
  getSuccessNotice,
  makeSelectSubmitting,
  makeSelectError,
  makeSelectSuccess,
  makeSelectApplicationFormPageShowNotification,
  makeSelectApplicationFormPageShowNoticeOfYouHaveLoanInProgress,
  makeSelectApplicationFormPageShowNoticeOfCreditNotEnough,
  makeSelectApplicationFormPageZwapCredit,
};
