/**
 *
 * ApplicationFormPage
 *
 */
/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Grid from 'material-ui/Grid';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  fetchAndLoad,
  closeSnackBarCongrats,
  letMeSubmit,
  closeSnackBarPw,
  closeSnackBarEmail,
  togglePwAsPlainText,
} from './actions';
import {
  makeSelectApplicationFormPageFormData,
  makeSelectApplicationFormPageShowNotification,
  makeSelectApplicationFormPageShowNoticeOfYouHaveLoanInProgress,
  makeSelectApplicationFormPageZwapCredit,
  makeSelectApplicationFormPageShowNoticeOfCreditNotEnough,
  getSuccessNotice,
  makeSelectError,
  makeSelectSuccess,
  makeSelectSubmitting,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import ApplicationForm from './form';

const styles = (theme) => ({
  progressStyle: {
    width: '100%',
    marginTop: 0,
  },
  gridStyle: {
    marginTop: 50,
    marginBottom: 66,
  },
  root: {
    flexGrow: 1,
    marginTop: 30,
    paddingLeft: 0,
    paddingRight: 0,
  },
  rootGridList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  paperTwo: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'left',
    height: 'auto',
    padding: 50,
    paddingBottom: 50,
    color: theme.palette.text.secondary,
  },
  paper: {
    marginTop: 10,
    padding: 30,
    // textAlign: 'center',
    marginBottom: 10,
    height: 'auto',
    color: theme.palette.text.secondary,
  },
  NarrowPaper: {
    // maxWidth: 800,
    // minWidth: 400,
    // display: 'inline-block',
    marginTop: 10,
    padding: 30,
    // textAlign: 'center',
    marginBottom: 10,
    // marginLeft: 100,
    // marginRight: 100,
    height: 'auto',
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: 5,
  },
  bigAvatar: {
    width: 30,
    height: 30,
  },
  avatarRow: {
    display: 'flex',
    // margin: 4,
    justifyContent: 'left',
    verticalAlign: 'center',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary[200],
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  card: {
    maxWidth: 666,
    paddingBottom: 200,
    paddingTop: 200,
    alignItems: 'center',
    display: 'inline-block',
  },
  media: {
    height: 200,
  },
  styledGrid: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'left',
    display: 'block',
  },
  styledDiv: {
    paddingTop: 118,
    paddingBottom: 118,
    width: '90%',
    margin: '0 auto',
    maxWidth: 500,
  },
});

export class ApplicationFormPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes, selectSubmitting } = this.props;
    return (
      <div>
        <Helmet>
          <title>ApplicationFormPage</title>
          <meta name="description" content="Description of ApplicationFormPage" />
        </Helmet>
        <Grid className={classes.gridStyle} container justify="center" spacing={16}>
          <ApplicationForm
            onSubmit={this.props.handleSubmit}
            closeSnackBarCongrats={this.props.closeSnackBarCongrats}
            closeSnackBarPw={this.props.closeSnackBarPw}
            closeSnackBarEmail={this.props.closeSnackBarEmail}
            togglePwAsPlainText={this.props.togglePwAsPlainText}
            realSubmitting={selectSubmitting}
          />
        </Grid>
      </div>
    );
  }
}

ApplicationFormPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  togglePwAsPlainText: PropTypes.func.isRequired,
  closeSnackBarCongrats: PropTypes.func.isRequired,
  closeSnackBarEmail: PropTypes.func.isRequired,
  closeSnackBarPw: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  makeSelectApplicationFormPageFormData: makeSelectApplicationFormPageFormData(),
  makeSelectApplicationFormPageShowNotification: makeSelectApplicationFormPageShowNotification(),
  makeSelectApplicationFormPageShowNoticeOfYouHaveLoanInProgress: makeSelectApplicationFormPageShowNoticeOfYouHaveLoanInProgress(),
  makeSelectApplicationFormPageZwapCredit: makeSelectApplicationFormPageZwapCredit(),
  makeSelectApplicationFormPageShowNoticeOfCreditNotEnough: makeSelectApplicationFormPageShowNoticeOfCreditNotEnough(),
  getSuccessNotice: getSuccessNotice(),
  selectSubmitting: makeSelectSubmitting(),
  submitSuccess: makeSelectSuccess(),
  submitError: makeSelectError(),
  // getFormInitialValues: formInitialValues(),
});
function mapDispatchToProps(dispatch) {
  return {
    togglePwAsPlainText: (checked) => {
      dispatch(togglePwAsPlainText(checked));
    },
    closeSnackBarCongrats: () => {
      dispatch(closeSnackBarCongrats());
    },
    closeSnackBarEmail: () => {
      dispatch(closeSnackBarEmail());
    },
    closeSnackBarPw: () => {
      dispatch(closeSnackBarPw());
    },
    onFetchAndLoad: (token) => {
      dispatch(fetchAndLoad(token));
    },
    handleSubmit: (values) => {
      // console.log('1');
      // console.log(values);
      // console.log('2');
      // console.log(values.toJS());
      // let combinedValues = values.toJS();
      // console.log('3');
      // console.log(combinedValues);
      // combinedValues.prefilled = props.makeSelectMainPageFormData;
      // console.log('4');
      // console.log(combinedValues);
      // values.set('prefilled') = makeSelectMainPageFormData;
      dispatch(letMeSubmit(values));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'applicationFormPage', reducer });
const withSaga = injectSaga({ key: 'applicationFormPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(ApplicationFormPage);
