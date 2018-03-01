/**
 *
 * InSmileRegistrationPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectInSmileRegistrationPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class InSmileRegistrationPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>InSmileRegistrationPage</title>
          <meta name="description" content="Description of InSmileRegistrationPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

InSmileRegistrationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  insmileregistrationpage: makeSelectInSmileRegistrationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
