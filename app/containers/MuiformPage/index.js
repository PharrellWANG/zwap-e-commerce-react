/* eslint-disable no-alert */
/**
 *
 * MuiformPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';
// import injectSaga from 'utils/injectSaga';
// import injectReducer from 'utils/injectReducer';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import ImmutableForm from './simpleForm';
// import makeSelectMuiformPage from './selectors';
// import reducer from './reducer';
// import { submitApplication } from './actions';
// import saga from './saga';
// import messages from './messages';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

const login = (values) => alert(`It's a map thanks to immutables with redux-form: ${values}`);

function MuiformPage() {
  return (
    <div>
      <Helmet>
        <title>MuiformPage</title>
        <meta name="description" content="Description of MuiformPage" />
      </Helmet>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={16}>
          <ImmutableForm onSubmit={login} />
        </Grid>
      </Grid>
      {/* <FormattedMessage {...messages.header} /> */}
      {/* <simpleForm signInFormLabelNames={signInFormLabelNames} onSubmit={this.props.onSubmitApplication} /> */}
    </div>
  );
}

// MuiformPage.propTypes = {
//   onSubmitApplication: PropTypes.func.isRequired,
// };

// const mapStateToProps = createStructuredSelector({
//   muiformpage: makeSelectMuiformPage(),
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     onSubmitApplication: (evt) => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(submitApplication());
//     },
//   };
// }

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'muiformpage', reducer });
// const withSaga = injectSaga({ key: 'muiformpage', saga });

// export default compose(
  // withReducer,
  // withSaga,
  // withConnect,
// )(MuiformPage);
export default withStyles(styles)(MuiformPage);
