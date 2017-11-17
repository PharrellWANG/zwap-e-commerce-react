/* eslint-disable no-param-reassign */
/**
 *
 * MainPage
 *
 */
/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from 'material-ui/Avatar';
import Tabs, { Tab } from 'material-ui/Tabs';
// import PhoneIcon from 'material-ui-icons/Phone';
// import FavoriteIcon from 'material-ui-icons/Favorite';
import FlightLand from 'material-ui-icons/FlightLand';
import FlightTakeoff from 'material-ui-icons/FlightTakeoff';
// import Card, { CardContent } from 'material-ui/Card';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Typography from 'material-ui/Typography';
// import { initialize } from 'redux-form/immutable';
// import { fromJS } from 'immutable';
import { FormattedMessage } from 'react-intl';
import { withStyles } from 'material-ui/styles';
// import Snackbar from 'material-ui/Snackbar';
// import Fade from 'material-ui/transitions/Fade';
// import CloseIcon from 'material-ui-icons/Close';
import { LinearProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
// import Button from 'material-ui/Button';
// import Dialog, {
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
// } from 'material-ui/Dialog';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  fetchAndLoad,
  noTokenInUrlDisplayDialog,
  closeNotification,
  // closeNoticeOfYouHaveLoanInProgress,
  closeSnackBarCongrats,
  letMeSubmit,
  closeSnackBarPw,
  closeSnackBarEmail,
  togglePwAsPlainText,
} from './actions';
import makeSelectMainPageOpenDialog, {
  makeSelectMainPageFormData,
  makeSelectMainPageShowNotification,
  makeSelectMainPageShowNoticeOfYouHaveLoanInProgress,
  makeSelectMainPageZwapCredit,
  makeSelectMainPageShowNoticeOfCreditNotEnough,
  getSuccessNotice,
  makeSelectError,
  makeSelectSuccess,
  makeSelectSubmitting,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import ImmutableForm from './form';
// import KnowYourCreditForm from './knowYourCreditForm';
import messages from './messages';
import pharrellAva from './avatars/pharrell.png';
import eveAva from './avatars/eve.png';
import { ColorAWithUnderline } from '../../components/A';


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

function TabContainer(props) {
  return (
    <div
      style={{
        paddingTop: 8 * 2,
        paddingLeft: 8 * 2,
        marginLeft: 8 * 2,
        marginRight: 8 * 2,
      }}
    >
      {props.children}
    </div>);
}

// const login = (values) => alert(`It's a map thanks to immutables with redux-form: ${values}`);
export class MainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    value: 1,
    open: true,
  };

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

  handleChange = (event, value) => {
    this.setState({ value });
  }

  // handleEmailHintClose = () => {
  //   this.setState({ open: false });
  // };

  handleEmailHintClose = () => {
    // e.preventDefault();
    // console.log('The link was clicked.');
    this.setState({ open: false });
  };


  // const initialValus = this.props.makeSelectMainPageFormData;
  // prehandleSubmit = (values) => {
  // console.log(this.props.getFormInitialValues);
  // console.log(values);
  // const updatedValues = values.set('initialValues', this.props.getFormInitialValues);
  // console.log(updatedValues.toJS());
  // };

  render() {
    // console.log(this.props.makeSelectMainPageFormData);
    const { classes, selectSubmitting } = this.props;
    const reduxFormInitialValues = this.props.makeSelectMainPageFormData;
    // console.log(reduxFormInitialValues);
    // console.log(reduxFormInitialValues.orderReferenceNo === '');
    const { value } = this.state;
    // console.log(initvals);
    // console.log('2');
    return (
      <div>
        <Helmet>
          <title>Pay by Zwap</title>
          <meta name="description" content="Zwap Pay" />
        </Helmet>
        {/* <FormattedMessage {...messages.header} /> */}
        {/* <div> */}
        {/* <Dialog open={this.props.makeSelectMainPageShowNotification} onRequestClose={this.props.closeNotification}> */}
        {/* <DialogTitle> */}
        {/* <FormattedMessage {...messages.notificationHeader} /> */}
        {/* </DialogTitle> */}
        {/* <DialogContent> */}
        {/* <DialogContentText> */}
        {/* <FormattedMessage {...messages.notificationContents} /> */}
        {/* </DialogContentText> */}
        {/* </DialogContent> */}
        {/* <DialogActions> */}
        {/* <Button onClick={this.props.closeNotification} color="primary" autoFocus> */}
        {/* <FormattedMessage {...messages.okmessage} /> */}
        {/* </Button> */}
        {/* </DialogActions> */}
        {/* </Dialog> */}
        {/* </div> */}
        {/* <div> */}
        {/* <Dialog open={this.props.makeSelectMainPageShowNoticeOfYouHaveLoanInProgress} onRequestClose={this.props.closeNoticeOfYouHaveLoanInProgress}> */}
        {/* <DialogTitle> */}
        {/* <FormattedMessage {...messages.notificationHeader} /> */}
        {/* </DialogTitle> */}
        {/* <DialogContent> */}
        {/* <DialogContentText> */}
        {/* <FormattedMessage {...messages.notificationContents} /> */}
        {/* </DialogContentText> */}
        {/* </DialogContent> */}
        {/* <DialogActions> */}
        {/* <Button onClick={this.props.closeNoticeOfYouHaveLoanInProgress} color="primary" autoFocus> */}
        {/* <FormattedMessage {...messages.okmessage} /> */}
        {/* </Button> */}
        {/* </DialogActions> */}
        {/* </Dialog> */}
        {/* </div> */}
        {/* if no token in url, present the homepage */}
        {((!this.props.match.params.token) || (this.props.getSuccessNotice && reduxFormInitialValues.orderReferenceNo === '')) &&
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Tabs
                  value={value}
                  onChange={this.handleChange}
                  // fullWidth
                  centered
                  // scrollable
                  scrollButtons="on"
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label="What is Zwap Pay" icon={<FlightLand />} />
                  <Tab label="How does it work" icon={<FlightTakeoff />} />
                </Tabs>
                {value === 0 && <TabContainer>
                  <Typography type="headline" component="h3" gutterBottom>
                    What is Zwap Pay?
                  </Typography>
                  {/* start single conversation block */}
                  <div className={classes.avatarRow}>
                    <Avatar
                      alt="Adelle Charles"
                      src={pharrellAva}
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                    <Typography type="body2" style={{ marginTop: 8, marginLeft: 2, marginRight: 2 }}>
                      Adam:
                    </Typography>
                    <Typography type="body1" component="p" style={{ marginTop: 10, marginLeft: 2 }}>
                      Eve, my dear, what is the Zwap Pay?
                    </Typography>
                  </div>
                  {/* end single conversation block */}
                  <div className={classes.avatarRow}>
                    <Avatar
                      alt="Adelle Charles"
                      src={eveAva}
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                    <Typography type="body2" style={{ marginTop: 8, marginLeft: 16, marginRight: 2 }}>
                      Eve:
                    </Typography>
                    <Typography type="body1" component="p" style={{ marginTop: 10, marginLeft: 2 }}>
                      {/* Oh, dear, you should have heard of it. Don&#39;t you remember our last trip to Hong Kong? */}
                      Oh, dear. After I tell you the answer, shall we eat the apple?
                    </Typography>
                  </div>
                  {/* start single conversation block */}
                  <div className={classes.avatarRow}>
                    <Avatar
                      alt="Adelle Charles"
                      src={pharrellAva}
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                    <Typography type="body2" style={{ marginTop: 8, marginLeft: 2, marginRight: 2 }}>
                      Adam:
                    </Typography>
                    <Typography type="body1" component="p" style={{ marginTop: 10, marginLeft: 2 }}>
                      Sure Eve. Tell me what is Zwap Pay. I can&#39;t wait!
                    </Typography>
                  </div>
                  {/* end single conversation block */}
                  <div className={classes.avatarRow}>
                    <Avatar
                      alt="Adelle Charles"
                      src={eveAva}
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                    <Typography type="body2" style={{ marginTop: 8, marginLeft: 16, marginRight: 2 }}>
                      Eve:
                    </Typography>
                    <Typography type="body1" component="p" style={{ marginTop: 10, marginLeft: 2 }}>
                      Well, Zwap Pay is a payment method, just like pay by credit card. The difference is, you
                      don&#39;t need a plastic card with a chip inside! You just submit your application to
                      Zwap, and they will pay for the goods that you wanna buy. All you need to do is repay them
                      in the following 12 months, no extra interest, no extra handling fee. It&#39;s all free!
                    </Typography>
                  </div>
                  {/* start single conversation block */}
                  <div className={classes.avatarRow}>
                    <Avatar
                      alt="Adelle Charles"
                      src={pharrellAva}
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                    <Typography type="body2" style={{ marginTop: 8, marginLeft: 2, marginRight: 2 }}>
                      Adam:
                    </Typography>
                    <Typography type="body1" component="p" style={{ marginTop: 10, marginLeft: 2 }}>
                      Oh Jesus! Is it for real! I am desperately want to try it! I just want to buy iPhone X but I
                      don&#39;t have enough money!
                    </Typography>
                  </div>
                  {/* end single conversation block */}
                  <div className={classes.avatarRow}>
                    <Avatar
                      alt="Adelle Charles"
                      src={eveAva}
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                    <Typography type="body2" style={{ marginTop: 8, marginLeft: 16, marginRight: 2 }}>
                      Eve:
                    </Typography>
                    <Typography type="body1" component="p" style={{ marginTop: 10, marginLeft: 2 }}>
                      Hold on, my dear! Currently they only collaborate with MTGamer e-commerce website. So their
                      Zwap Pay service is only applicable when you want to buy things from MTGamer. And you need
                      to be an undergraduate student in the university.
                    </Typography>
                  </div>
                  {/* start single conversation block */}
                  <div className={classes.avatarRow}>
                    <Avatar
                      alt="Adelle Charles"
                      src={pharrellAva}
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                    <Typography type="body2" style={{ marginTop: 8, marginLeft: 2, marginRight: 2 }}>
                      Adam:
                    </Typography>
                    <Typography type="body1" component="p" style={{ marginTop: 10, marginLeft: 2 }}>
                      Okay. I see, let&#39;s go to MTGamer e-commerce website! Shopping time!
                    </Typography>
                  </div>
                  {/* end single conversation block */}
                  <div className={classes.avatarRow}>
                    <Avatar
                      alt="Adelle Charles"
                      src={eveAva}
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                    <Typography type="body2" style={{ marginTop: 8, marginLeft: 16, marginRight: 2 }}>
                      Eve:
                    </Typography>
                    <Typography type="body1" component="p" style={{ marginTop: 10, marginLeft: 2 }}>
                      How about enjoy the apple first?
                    </Typography>
                  </div>
                  {/* start single conversation block */}
                  <div className={classes.avatarRow}>
                    <Avatar
                      alt="Adelle Charles"
                      src={pharrellAva}
                      className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                    <Typography type="body2" style={{ marginTop: 8, marginLeft: 2, marginRight: 2 }}>
                      Adam:
                    </Typography>
                    <Typography type="body1" component="p" style={{ marginTop: 10, marginLeft: 2 }}>
                      No! Enjoy Zwap Pay first!
                    </Typography>
                  </div>
                  {/* end single conversation block */}
                </TabContainer>}
                {value === 1 && <TabContainer>
                  <Typography type="headline" component="h3" gutterBottom>
                    How does Zwap Pay work?
                  </Typography>
                  <Typography type="body2" component="p">
                    We collaborate with e-commerce websites to provide interest-free payments for you.
                  </Typography>
                  <Typography type="body1" component="p" gutterBottom>
                    {''}
                  </Typography>
                  <Typography type="body2" component="p">
                    {''}
                  </Typography>
                  <Typography type="body1" component="p" gutterBottom>
                    Go to our collaborator&#39;s website, and add something into cart for yourself, choose Zwap Pay to checkout.
                  </Typography>
                  <Typography type="body2" component="p">
                    {''}
                  </Typography>
                  <Typography type="body1" component="p" gutterBottom>
                    Submit application to Zwap. Wait for the application to be approved.
                  </Typography>
                  <Typography type="body2" component="p">
                    {''}
                  </Typography>
                  <Typography type="body1" component="p" gutterBottom>
                    You application is approved. Your items bought are on the way to your hands.
                  </Typography>
                </TabContainer>}
              </Paper>
            </Grid>
          </Grid>
        </div>
        }
        {/* if token in url, check the loading status, if not, display progress bar,
             if loaded, display form
        */}
        {(this.props.match.params.token) && (!this.props.submitSuccess) &&
        ((this.props.getSuccessNotice)
          // if we have token appended in the path,
          // we will load the form only when the data has been successfully loaded via calling api.
          // else if we don't have the token in path,
          // we directly load the form without presenting the progress bar.
          ? ((reduxFormInitialValues.orderReferenceNo !== '') && (<Grid item xs={12}>
            <Grid className={classes.gridStyle} container justify="center" spacing={16}>
              <ImmutableForm
                onSubmit={this.props.handleSubmit}
                initialValues={reduxFormInitialValues}
                closeSnackBarCongrats={this.props.closeSnackBarCongrats}
                closeSnackBarPw={this.props.closeSnackBarPw}
                openEmailHint={this.state.open}
                closeSnackBarEmail={this.props.closeSnackBarEmail}
                togglePwAsPlainText={this.props.togglePwAsPlainText}
                realSubmitting={selectSubmitting}
              />
            </Grid>
          </Grid>))
          : <div className={classes.progressStyle}>
            <LinearProgress />
          </div>
        )
        }
        {this.props.submitSuccess && this.props.makeSelectMainPageShowNoticeOfYouHaveLoanInProgress &&
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} className={classes.styledGrid}>
            <div className={classes.styledDiv}>
              {/* <Typography type="headline" component="h2" style={{ textAlign: 'left' }} gutterBottom> */}
              {/* <FormattedMessage {...messages.SuccessNotice} /> */}
              {/* </Typography> */}
              <Typography type="body2" style={{ textAlign: 'left' }} gutterBottom>
                <FormattedMessage {...messages.UnsettledNotice} />
              </Typography>
              <ColorAWithUnderline href="https://platform.zwap.hk/login/" target="_blank">Login to Zwap</ColorAWithUnderline>
            </div>
          </Grid>
        </Grid>
        }
        {this.props.submitSuccess && this.props.makeSelectMainPageShowNoticeOfCreditNotEnough &&
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} className={classes.styledGrid}>
            <div className={classes.styledDiv}>
              {/* <Typography type="headline" component="h2" style={{ textAlign: 'left' }} gutterBottom> */}
              {/* <FormattedMessage {...messages.SuccessNotice} /> */}
              {/* </Typography> */}
              <Typography type="body2" style={{ textAlign: 'left' }} gutterBottom>
                <FormattedMessage {...messages.CreditNotEnough} />{' '}
                {this.props.makeSelectMainPageZwapCredit}
              </Typography>
              <ColorAWithUnderline href="https://platform.zwap.hk/login/" target="_blank"><FormattedMessage {...messages.LoginToZwap} /></ColorAWithUnderline>
            </div>
          </Grid>
        </Grid>
        }
        {this.props.submitSuccess && this.props.makeSelectMainPageShowNotification &&
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} className={classes.styledGrid}>
            <div className={classes.styledDiv}>
              <Typography type="headline" component="h2" style={{ textAlign: 'left' }} gutterBottom>
                <FormattedMessage {...messages.SuccessNotice} />
              </Typography>
              <Typography type="body2" style={{ textAlign: 'left' }} gutterBottom>
                <FormattedMessage {...messages.FollowEmailInstruction} />
              </Typography>
            </div>
          </Grid>
        </Grid>
        }
        {(this.props.getSuccessNotice && reduxFormInitialValues.orderReferenceNo === '') &&
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} className={classes.styledGrid}>
            <div className={classes.styledDiv}>
              <Typography type="headline" component="h2" gutterBottom>
                Invalid Token
                <FormattedMessage {...messages.InvalidToken} />
              </Typography>
              <Typography type="body1" component="p" gutterBottom>
                Looks like your token has expired or never existed.
                <FormattedMessage {...messages.ExpiredTokenNeverExisted} />
              </Typography>
            </div>
          </Grid>
        </Grid>
        }
      </div>
    );
  }
}
        // {/*<Grid container spacing={24}>*/}
        // {/*<Grid item xs={12} sm={12} className={classes.styledGrid}>*/}
        // {/*<Card className={classes.card}>*/}
        // {/*<CardContent>*/}
        // {/*<Typography type="headline" component="h2" style={{ textAlign: 'left' }} gutterBottom>*/}
        // {/*Congratulations! You have successfully submitted your application*/}
        // {/*</Typography>*/}
        // {/*<Typography type="body2" style={{ textAlign: 'left' }} gutterBottom>*/}
        // {/*An email has been sent to your inbox. Please follow the instructions*/}
        // {/*in the email to activate your account.*/}
        // {/*</Typography>*/}
        // {/*</CardContent>*/}
        // {/*</Card>*/}
        // {/*</Grid>*/}
        // {/*</Grid>*/}

MainPage.propTypes = {
  onFetchAndLoad: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  openDialog: PropTypes.func.isRequired,
  // closeDialog: PropTypes.func.isRequired,
  // closeNotification: PropTypes.func.isRequired,
  togglePwAsPlainText: PropTypes.func.isRequired,
  closeSnackBarCongrats: PropTypes.func.isRequired,
  closeSnackBarEmail: PropTypes.func.isRequired,
  closeSnackBarPw: PropTypes.func.isRequired,
  // onCloseSnackbarEmail: PropTypes.func.isRequired,
  // makeSelectMainPageOpenDialog: PropTypes.bool.isRequired,
  makeSelectMainPageShowNotification: PropTypes.bool.isRequired,
  getSuccessNotice: PropTypes.bool.isRequired,
  submitSuccess: PropTypes.bool.isRequired,
  makeSelectMainPageFormData: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  makeSelectMainPageOpenDialog: makeSelectMainPageOpenDialog(),
  makeSelectMainPageFormData: makeSelectMainPageFormData(),
  makeSelectMainPageShowNotification: makeSelectMainPageShowNotification(),
  makeSelectMainPageShowNoticeOfYouHaveLoanInProgress: makeSelectMainPageShowNoticeOfYouHaveLoanInProgress(),
  makeSelectMainPageZwapCredit: makeSelectMainPageZwapCredit(),
  makeSelectMainPageShowNoticeOfCreditNotEnough: makeSelectMainPageShowNoticeOfCreditNotEnough(),
  getSuccessNotice: getSuccessNotice(),
  selectSubmitting: makeSelectSubmitting(),
  submitSuccess: makeSelectSuccess(),
  submitError: makeSelectError(),
  // getFormInitialValues: formInitialValues(),
});

function mapDispatchToProps(dispatch) {
  // console.log(formInitialValues);
  return {
    openDialog: () => { dispatch(noTokenInUrlDisplayDialog()); },
    // onCloseSnackbarEmail: () => {
    //   console.log('wtf..........');
    //   dispatch(closeSnackbarEmail());
    // },
    // closeDialog: () => {
    //   dispatch(closeDialog());
    // },
    closeNotification: () => {
      dispatch(closeNotification());
    },
    // closeNoticeOfYouHaveLoanInProgress: () => {
    //   dispatch(closeNoticeOfYouHaveLoanInProgress());
    // },
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

const withReducer = injectReducer({ key: 'mainPage', reducer });
const withSaga = injectSaga({ key: 'mainPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(MainPage);
