/**
 *
 * MainPage
 *
 */
/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { fetchAndLoad } from './actions';
import makeSelectMainPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class MainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    // console.log(this.props.match);
    if (this.props.match.params.token) {
      // console.log(this.props.match.params.token);
      this.props.onFetchAndLoad(this.props.match.params.token);
    }
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Pay by Zwap</title>
          <meta name="description" content="Zwap Pay" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

MainPage.propTypes = {
  onFetchAndLoad: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainpage: makeSelectMainPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFetchAndLoad: (token) => {
      dispatch(fetchAndLoad(token));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'mainPage', reducer });
const withSaga = injectSaga({ key: 'mainPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainPage);
