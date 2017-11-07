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
// import { initialize } from 'redux-form/immutable';
// import { fromJS } from 'immutable';
// import { FormattedMessage } from 'react-intl';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  fetchAndLoad,
  noTokenInUrlDisplayDialog,
  closeDialog,
} from './actions';
import makeSelectMainPageOpenDialog, { makeSelectMainPageFormData } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import ImmutableForm from './form';
// import messages from './messages';


// const login = (values) => alert(`It's a map thanks to immutables with redux-form: ${values}`);
export class MainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    // console.log(this.props.match);
    if (this.props.match.params.token) {
      // console.log(this.props.match.params.token);
      this.props.onFetchAndLoad(this.props.match.params.token);
    } else {
      this.props.openDialog();
      console.log(this.props.makeSelectMainPageFormData);
    }
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Pay by Zwap</title>
          <meta name="description" content="Zwap Pay" />
        </Helmet>
        {/* <FormattedMessage {...messages.header} /> */}
        <div>
          <Dialog open={this.props.makeSelectMainPageOpenDialog} onRequestClose={this.props.closeDialog}>
            <DialogTitle>Hey there! Nice to meet you!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                We have noticed that you are visiting us directly instead of coming from MTGamer e-commerce
                website. To use our Zwap Pay service, you need to input your MTGamer order reference number manually
                if you wish to use our service. Thank you for visiting us!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.closeDialog} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        {/* <ImmutableForm onSubmit={login} /> */}
        {/* loanApplicationForm onSubmit={login} /> */}
      </div>
    );
  }
}

MainPage.propTypes = {
  onFetchAndLoad: PropTypes.func.isRequired,
  openDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  makeSelectMainPageOpenDialog: PropTypes.bool.isRequired,
  makeSelectMainPageFormData: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  makeSelectMainPageOpenDialog: makeSelectMainPageOpenDialog(),
  makeSelectMainPageFormData: makeSelectMainPageFormData(),
});

function mapDispatchToProps(dispatch) {
  return {
    openDialog: () => {
      dispatch(noTokenInUrlDisplayDialog());
    },
    closeDialog: () => {
      dispatch(closeDialog());
    },
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
