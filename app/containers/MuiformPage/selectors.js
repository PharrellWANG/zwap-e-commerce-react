import { createSelector } from 'reselect';

/**
 * Direct selector to the muiformPage state domain
 */
const selectMuiformPageDomain = (state) => state.get('muiformpage');
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
  (substate) => substate.get('submitting')
);

const makeSelectError = () => createSelector(
  selectMuiformPageDomain,
  (substate) => substate.get('error')
);

const makeSelectSuccess = () => createSelector(
  selectMuiformPageDomain,
  (substate) => substate.get('success')
);

const makeSelectReduxFormState = () => createSelector(
  selectReduxFormState,
  (substate) => substate.get('immutableExample')
);

// const makeSelectMuiformPage = () => createSelector(
//   selectMuiformPageDomain,
//   (substate) => substate.toJS()
// );

export default makeSelectReduxFormState;
export {
  selectReduxFormState,
  makeSelectError,
  makeSelectSubmitting,
  makeSelectSuccess,
};
