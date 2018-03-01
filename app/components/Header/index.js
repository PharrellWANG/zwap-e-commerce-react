/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { withStyles } from 'material-ui/styles';
// import Grid from 'material-ui/Grid';
import { blueGrey } from 'material-ui/colors';
// import { browserHistory } from 'react-router';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  // DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import LocaleToggle from 'containers/LocaleToggle';
import CenteredSection from '../../containers/HomePage/styled/CenteredSection';
import messages from '../../containers/HomePage/messages';
import A from './A';
// import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import ZwapLogo from './ZwapLogoRGB_1_340x100.png';
// import ZwapLogo from './safari-pinned-tab.svg';
// import messages from './messages';

const styles = (theme) => ({
  image: {
    margin: 'auto',
    textAlign: 'left',
    // width: '100%',
    height: 38,
    verticalAlign: 'center',
    // display: 'block',
    // paddingTop: 5,
    // paddingBot: 5,
  },
  header: {
    background: blueGrey[100],
    height: '300px',
    padding: '20px',
    color: 'black',
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 38,
    padding: '0 5px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
  root: {
    flexGrow: 1,
    // paddingTop: 30,
    paddingLeft: 0,
    paddingBottom: 1,
    // marginBottom: 2,
    // marginTop: theme.spacing.unit,
    // margin: 0,
    background: blueGrey[100],
  },
  flex: {
    flex: 1,
  },
  appbar: {
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    // background: blueGrey[200],
    // margin: 0,
    background: 'white',
  },
  locale: {
    // width: '100%',
    // margin: 0,
    // display: 'block',
    // marginTop: '0px',
    // marginRight: '0px',
    marginBottom: '6px',
    // marginLeft: '0px',
  },
  // [`@media (min-width: ${theme.breakpoint.mobileMin})`]: {
  //   image: {
  //     margin: 'auto',
  //     textAlign: 'center',
  //     width: '80%',
  //     // display: 'block',
  //     paddingTop: 80,
  //   },
  // },
}
);

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleClick = () => {
    this.setState({
      open: true,
    });
  }
  render() {
    return (
      <div>
        <Paper className={this.props.classes.root} elevation={4}>
          <AppBar position="static" className={this.props.classes.appbar}>
            <Toolbar>
              <Typography variant="title" color="inherit" className={this.props.classes.flex}>
                <A href="https://www.zwap.hk">
                  <img className={this.props.classes.image} src={ZwapLogo} alt="Zwap - Logo" />
                </A>
              </Typography>
              <LocaleToggle className={this.props.classes.locale} />
            </Toolbar>
          </AppBar>
          <div>
            <CenteredSection>
              <Dialog open={this.state.open} onClose={this.handleRequestClose}>
                <DialogTitle>
                  <FormattedMessage {...messages.startProjectHeader} />
                </DialogTitle>
                <DialogContent>
                  <Typography variant="body2" color="primary" gutterBottom>
                    <FormattedMessage {...messages.stepOne} />
                  </Typography>
                  <Typography variant="body1" align="left" gutterBottom>
                    <FormattedMessage {...messages.stepOneContents} />
                  </Typography>
                  <Typography variant="body2" color="primary" gutterBottom>
                    <FormattedMessage {...messages.stepTwo} />
                  </Typography>
                  <Typography variant="body1" align="left" gutterBottom>
                    <FormattedMessage {...messages.stepTwoContents} />
                  </Typography>
                  <Typography variant="body2" color="primary" gutterBottom>
                    <FormattedMessage {...messages.stepThree} />
                  </Typography>
                  <Typography variant="body1" align="left" gutterBottom>
                    <FormattedMessage {...messages.stepThreeContents} />
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button color="primary" onClick={this.handleRequestClose}>
                    <FormattedMessage {...messages.dialogOk} />
                  </Button>
                </DialogActions>
              </Dialog>
              <br />
              <Typography variant="display1" gutterBottom style={{ paddingTop: 48 }}>
                <FormattedMessage {...messages.startProjectHeader} />
              </Typography>
              <Typography variant="subheading" gutterBottom>
                <FormattedMessage {...messages.startProjectMessage} />
              </Typography>
              <br />
              <Button className={this.props.classes.button} onClick={this.handleClick}>
                <FormattedMessage {...messages.detailsButton} />
              </Button>
            </CenteredSection>
          </div>
        </Paper>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
