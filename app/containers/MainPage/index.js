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
import { FormattedMessage } from 'react-intl';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
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
import makeSelectMainPageOpenDialog, { makeSelectMainPageFormData, getSuccessNotice } from './selectors';
import reducer from './reducer';
import saga from './saga';
import ImmutableForm from './form';
import messages from './messages';

const styles = {
  progressStyle: {
    width: '100%',
    marginTop: 0,
  },
  gridStyle: {
    marginTop: 50,
    marginBottom: 66,
  },
};

const login = (values) => alert(`It's a map thanks to immutables with redux-form: ${values}`);
export class MainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    // console.log(this.props.match);
    if (this.props.match.params.token) {
      // console.log('1');
      // console.log(this.props.match.params.token);
      // console.log(this.props.makeSelectMainPageFormData);
      // console.log(typeof (this.props.makeSelectMainPageFormData));
      this.props.onFetchAndLoad(this.props.match.params.token);
      // console.log(this.props.makeSelectMainPageFormData);
    } else {
      this.props.openDialog();
      // console.log(this.props.makeSelectMainPageFormData);
      // console.log(typeof (this.props.makeSelectMainPageFormData));
    }
  }

  // const initialValus = this.props.makeSelectMainPageFormData;

  render() {
    // console.log(this.props.makeSelectMainPageFormData);
    const { classes } = this.props;
    const reduxFormInitialValues = this.props.makeSelectMainPageFormData;
    // console.log(initvals);
    // console.log('2');
    return (
      <div>
        <Helmet>
          <title>Pay by Zwap</title>
          <meta name="description" content="Zwap Pay" />
        </Helmet>
        {/* <FormattedMessage {...messages.header} /> */}
        <div>
          <Dialog open={this.props.makeSelectMainPageOpenDialog} onRequestClose={this.props.closeDialog}>
            <DialogTitle>
              <FormattedMessage {...messages.dialogHeader} />
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <FormattedMessage {...messages.dialogContents} />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.closeDialog} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        {(this.props.getSuccessNotice || !this.props.match.params.token)
          ? (<Grid item xs={12}>
            <Grid className={classes.gridStyle} container justify="center" spacing={16}>
              <ImmutableForm onSubmit={login} initialValues={reduxFormInitialValues} />
            </Grid>
          </Grid>)
          : <div className={classes.progressStyle}>
            <LinearProgress />
          </div>
        }
      </div>
    );
  }
}

MainPage.propTypes = {
  onFetchAndLoad: PropTypes.func.isRequired,
  openDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  makeSelectMainPageOpenDialog: PropTypes.bool.isRequired,
  getSuccessNotice: PropTypes.bool.isRequired,
  makeSelectMainPageFormData: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  makeSelectMainPageOpenDialog: makeSelectMainPageOpenDialog(),
  makeSelectMainPageFormData: makeSelectMainPageFormData(),
  getSuccessNotice: getSuccessNotice(),
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
  withStyles(styles),
)(MainPage);
