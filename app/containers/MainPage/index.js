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
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Typography from 'material-ui/Typography';
// import { initialize } from 'redux-form/immutable';
// import { fromJS } from 'immutable';
import { FormattedMessage } from 'react-intl';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';
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
  // closeDialog,
  closeNotification,
  letMeSubmit,
} from './actions';
import makeSelectMainPageOpenDialog, {
  makeSelectMainPageFormData,
  makeSelectMainPageShowNotification,
  getSuccessNotice,
  makeSelectError,
  makeSelectSuccess,
  makeSelectSubmitting,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import ImmutableForm from './form';
import messages from './messages';
import pharrellAva from './avatars/pharrell.png';
import eveAva from './avatars/eve.png';

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
    marginTop: 15,
    paddingLeft: 0,
    paddingRight: 0,
  },
  paperLeftAligned: {
    marginTop: 25,
    textAlign: 'left',
    height: 'auto',
    paddingBottom: 50,
    color: theme.palette.text.secondary,
  },
  paper: {
    marginTop: 10,
    padding: 30,
    // textAlign: 'center',
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
    value: 0,
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

  // const initialValus = this.props.makeSelectMainPageFormData;
  // prehandleSubmit = (values) => {
  // console.log(this.props.getFormInitialValues);
  // console.log(values);
  // const updatedValues = values.set('initialValues', this.props.getFormInitialValues);
  // console.log(updatedValues.toJS());
  // };

  render() {
    // console.log(this.props.makeSelectMainPageFormData);
    const { classes, submitting } = this.props;
    const reduxFormInitialValues = this.props.makeSelectMainPageFormData;
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
        <div>
          <Dialog open={this.props.makeSelectMainPageShowNotification && !this.props.makeSelectMainPageOpenDialog} onRequestClose={this.props.closeNotification}>
            <DialogTitle>
              <FormattedMessage {...messages.notificationHeader} />
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <FormattedMessage {...messages.notificationContents} />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.closeNotification} color="primary" autoFocus>
                <FormattedMessage {...messages.okmessage} />
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        {(!this.props.match.params.token) &&
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paperLeftAligned}>
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
                      Eve, my dear, what is the god damn Zwap Pay?
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
                    Step 1
                  </Typography>
                  <Typography type="body1" component="p" gutterBottom>
                    Check your Zwap Credit in this page.
                  </Typography>
                  <Typography type="body2" component="p">
                    Step 2
                  </Typography>
                  <Typography type="body1" component="p" gutterBottom>
                    Go to MTGamer e-commerce website, and add something into cart for yourself, total price should be lower than your Zwap Credit. Choose Zwap Pay for checkout.
                  </Typography>
                  <Typography type="body2" component="p">
                    Step 3
                  </Typography>
                  <Typography type="body1" component="p" gutterBottom>
                    Submit application for your MTGamer order. Wait for the application to be approved.
                  </Typography>
                  <Typography type="body2" component="p">
                    Step 4
                  </Typography>
                  <Typography type="body1" component="p" gutterBottom>
                    You application will have been approved. And MTGamer starts to deliver your goods.
                  </Typography>
                </TabContainer>}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography type="headline" component="h3" gutterBottom>
                  check your Zwap Credit
                </Typography>
                <Typography type="body2" component="p">
                  After submitting the form below, your Zwap Credit would be displayed.
                </Typography>
                <Typography type="body1" component="p">
                  (Your data will NOT be saved here)
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
        }
        {(this.props.getSuccessNotice || !this.props.match.params.token)
          // if we have token appended in the path,
          // we will load the form only when the data has been successfully loaded via calling api.
          // else if we don't have the token in path,
          // we directly load the form without presenting the progress bar.
          ? (<Grid item xs={12}>
            <Grid className={classes.gridStyle} container justify="center" spacing={16}>
              <ImmutableForm onSubmit={this.props.handleSubmit} initialValues={reduxFormInitialValues} realSubmitting={submitting} />
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
  // closeDialog: PropTypes.func.isRequired,
  closeNotification: PropTypes.func.isRequired,
  makeSelectMainPageOpenDialog: PropTypes.bool.isRequired,
  makeSelectMainPageShowNotification: PropTypes.bool.isRequired,
  getSuccessNotice: PropTypes.bool.isRequired,
  makeSelectMainPageFormData: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  makeSelectMainPageOpenDialog: makeSelectMainPageOpenDialog(),
  makeSelectMainPageFormData: makeSelectMainPageFormData(),
  makeSelectMainPageShowNotification: makeSelectMainPageShowNotification(),
  getSuccessNotice: getSuccessNotice(),
  submitting: makeSelectSubmitting(),
  submitSuccess: makeSelectSuccess(),
  submitError: makeSelectError(),
  // getFormInitialValues: formInitialValues(),
});

function mapDispatchToProps(dispatch) {
  // console.log(formInitialValues);
  return {
    openDialog: () => {
      dispatch(noTokenInUrlDisplayDialog());
    },
    // closeDialog: () => {
    //   dispatch(closeDialog());
    // },
    closeNotification: () => {
      dispatch(closeNotification());
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
