/* eslint-disable */
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
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectInSmileRegistrationPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Notifications from '../../components/Notifications';
import ApplicationForm from './form';
import {
  letMeSubmit,
  closeSnackBarCongrats,
  closeSnackBarPw,
  togglePwAsPlainText,
} from './actions';

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
  button: {
    textAlign: 'center',
    marginTop: theme.spacing.unit,
  },
});

export class InSmileRegistrationPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>InSmileRegistrationPage</title>
          <meta name="description" content="Description of InSmileRegistrationPage" />
        </Helmet>
        {/* <FormattedMessage {...messages.header} /> */}
        <Notifications />
        {(!this.props.insmileregistrationpage.submitSuccess)
        && ((<Grid item xs={12}>
          <Grid style={{marginTop: 50, marginBottom: 66}} container justify="center" spacing={16}>
            <ApplicationForm
              onSubmit={this.props.handleSubmit}
              closeSnackBarCongrats={this.props.closeSnackBarCongrats}
              closeSnackBarPw={this.props.closeSnackBarPw}
              togglePwAsPlainText={this.props.togglePwAsPlainText}
              realSubmitting={this.props.insmileregistrationpage.submitInProgress}
            />
          </Grid>
        </Grid>))
        }
        {this.props.insmileregistrationpage.submitSuccess && this.props.insmileregistrationpage.showNoticeOfYouHaveLoanInProgress &&
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} className={classes.styledGrid}>
            <div className={classes.styledDiv}>
              <Typography variant="body2" style={{ textAlign: 'left' }} gutterBottom>
                <FormattedMessage {...messages.UnsettledNotice} />
              </Typography>
              <Button variant="raised" href="https://platform.zwap.hk/login/" className={classes.button}>
                <FormattedMessage {...messages.LoginToZwap} />
              </Button>
            </div>
          </Grid>
        </Grid>
        }
        {this.props.insmileregistrationpage.submitSuccess && this.props.insmileregistrationpage.showNoticeOfCreditNotEnough &&
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} className={classes.styledGrid}>
            <div className={classes.styledDiv}>
              <Typography variant="headline" component="h2" style={{ textAlign: 'left' }} gutterBottom>
                <FormattedMessage {...messages.CreditNotEnough} />
                {/* {' '} */}
                {/* {this.props.makeSelectApplicationFormPageZwapCredit} */}
              </Typography>
            </div>
          </Grid>
        </Grid>
        }
        {this.props.insmileregistrationpage.submitSuccess && this.props.insmileregistrationpage.showNotification &&
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} className={classes.styledGrid}>
            <div className={classes.styledDiv}>
              <Typography variant="headline" component="h2" style={{ textAlign: 'left' }} gutterBottom>
                <FormattedMessage {...messages.SuccessNotice} />
              </Typography>
              <Typography variant="body2" style={{ textAlign: 'left' }} gutterBottom>
                <FormattedMessage {...messages.FollowEmailInstruction} />
              </Typography>
            </div>
          </Grid>
        </Grid>
        }
        {this.props.insmileregistrationpage.submitSuccess && this.props.insmileregistrationpage.duplicatedHKID &&
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} className={classes.styledGrid}>
            <div className={classes.styledDiv}>
              <Typography variant="headline" component="h2" style={{ textAlign: 'left' }} gutterBottom>
                <FormattedMessage {...messages.duplicatedHKIDNotice} />
              </Typography>
              <Typography variant="body2" style={{ textAlign: 'left' }} gutterBottom>
                <FormattedMessage {...messages.duplicatedHKIDNoticeBody} />
                {' '}
                <a href="mailto:cs@zwap.hk?subject=Issue of Duplicated HKID">cs@zwap.hk</a>
              </Typography>
            </div>
          </Grid>
        </Grid>
        }
        {this.props.insmileregistrationpage.submitSuccess && this.props.insmileregistrationpage.duplicatedMobile &&
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} className={classes.styledGrid}>
            <div className={classes.styledDiv}>
              <Typography variant="headline" component="h2" style={{ textAlign: 'left' }} gutterBottom>
                <FormattedMessage {...messages.duplicatedMobileNotice} />
              </Typography>
              <Typography variant="body2" style={{ textAlign: 'left' }} gutterBottom>
                <FormattedMessage {...messages.duplicatedMobileNoticeBody} />
                {' '}
                <a href="mailto:cs@zwap.hk?subject=Issue of Duplicated Mobile">cs@zwap.hk</a>
              </Typography>
            </div>
          </Grid>
        </Grid>
        }
        {this.props.insmileregistrationpage.submitSuccess && this.props.insmileregistrationpage.showRejectionNotice &&
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} className={classes.styledGrid}>
            <div className={classes.styledDiv}>
              <Typography variant="headline" component="h2" style={{ textAlign: 'left' }} gutterBottom>
                <FormattedMessage {...messages.rejectionNotice} />
              </Typography>
            </div>
          </Grid>
        </Grid>
        }
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
      // console.log('aha, in handleSubmit');
      dispatch(letMeSubmit(values));
    },
    closeSnackBarCongrats: () => {
      dispatch(closeSnackBarCongrats());
    },
    closeSnackBarPw: () => {
      dispatch(closeSnackBarPw());
    },
    togglePwAsPlainText: (checked) => {
      // console.log('-----in dispatch function:');
      // console.log(checked);
      dispatch(togglePwAsPlainText(checked));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'inSmileRegistrationPage', reducer });
const withSaga = injectSaga({ key: 'inSmileRegistrationPage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(InSmileRegistrationPage);
