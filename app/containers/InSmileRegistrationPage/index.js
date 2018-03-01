/**
 *
 * InSmileRegistrationPage
 *
 */
/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Grid from 'material-ui/Grid';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectInSmileRegistrationPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import Notifications from '../../components/Notifications';
import ApplicationForm from './form';
import {
  letMeSubmit,
  closeSnackBarCongrats,
  closeSnackBarPw,
  togglePwAsPlainText,
} from './actions';

export class InSmileRegistrationPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>InSmileRegistrationPage</title>
          <meta name="description" content="Description of InSmileRegistrationPage" />
        </Helmet>
        {/* <FormattedMessage {...messages.header} /> */}
        <Notifications />
        <Grid item xs={12}>
          <Grid style={{ marginTop: 50, marginBottom: 66 }} container justify="center" spacing={16}>
            <ApplicationForm
              onSubmit={this.props.handleSubmit}
              closeSnackBarCongrats={this.props.closeSnackBarCongrats}
              closeSnackBarPw={this.props.closeSnackBarPw}
              togglePwAsPlainText={this.props.togglePwAsPlainText}
              realSubmitting={this.props.insmileregistrationpage.submitInProgress}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

InSmileRegistrationPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  closeSnackBarCongrats: PropTypes.func.isRequired,
  closeSnackBarPw: PropTypes.func.isRequired,
  togglePwAsPlainText: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  insmileregistrationpage: makeSelectInSmileRegistrationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (values) => {
      dispatch(letMeSubmit(values));
    },
    closeSnackBarCongrats: () => {
      dispatch(closeSnackBarCongrats());
    },
    closeSnackBarPw: () => {
      dispatch(closeSnackBarPw());
    },
    togglePwAsPlainText: (checked) => {
      dispatch(togglePwAsPlainText(checked));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'inSmileRegistrationPage', reducer });
const withSaga = injectSaga({ key: 'inSmileRegistrationPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(InSmileRegistrationPage);
