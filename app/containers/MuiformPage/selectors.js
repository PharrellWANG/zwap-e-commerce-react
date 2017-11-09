import { createSelector } from 'reselect';

/**
 * Direct selector to the muiformPage state domain
 */
const selectMuiformPageDomain = (state) => state.get('muiformpage');
const selectRes = (state) => state.get('muiformpage').get('res');
const selectReduxFormState = (state) => state.get('form');

// const selectReduxFormSimpleFormState = createSelector(
//   selectReduxFormState,
//   (myState) => myState.get('simpleForm')
// );

/**
 * Other specific selectors
 */


/**
 * Default selector used by MuiformPage
 */
const makeSelectSubmitting = () => createSelector(
  selectMuiformPageDomain,
  (subState) => subState.get('submitting')
);

const makeSelectError = () => createSelector(
  selectMuiformPageDomain,
  (subState) => subState.get('error')
);

const makeSelectDialogBoxStatus = () => createSelector(
  selectMuiformPageDomain,
  (subState) => subState.get('openDialog')
);


const makeSelectSuccess = () => createSelector(
  selectMuiformPageDomain,
  (subState) => subState.get('success')
);

const makeSelectReduxFormState = () => createSelector(
  selectReduxFormState,
  (subState) => subState.get('immutableExample')
);

const makeSelectJsonRes = () => createSelector(
  selectRes,
  (subState) => subState.get('location')
);

// const makeSelectJsonRes = () => createSelector(
//   makeSelectJsonResAll,
//   (subState) => subState.get('location')
// );

// const makeSelectMuiformPage = () => createSelector(
//   selectMuiformPageDomain,
//   (subState) => subState.toJS()
// );

export default makeSelectReduxFormState;
export {
  makeSelectJsonRes,
  selectReduxFormState,
  makeSelectDialogBoxStatus,
  makeSelectError,
  makeSelectSubmitting,
  makeSelectSuccess,
};
