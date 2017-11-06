import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { blueGrey } from 'material-ui/colors';
import Typography from 'material-ui/Typography';
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
// import messages from './messages';

const styles = {
  image: {
    margin: 'auto',
    textAlign: 'left',
    // width: '100%',
    height: 48,
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
;

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
      <div className={this.props.classes.header}>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={6}>
            <A href="https://www.zwap.hk">
              <img className={this.props.classes.image} src={ZwapLogo} alt="Zwap - Logo" />
            </A>
          </Grid>
          <Grid item xs={6} sm={6}>
            <LocaleToggle />
          </Grid>
        </Grid>
        <hr />
        <div>
          <CenteredSection>
            <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
              <DialogTitle>
                <FormattedMessage {...messages.startProjectHeader} />
              </DialogTitle>
              <DialogContent>
                <Typography type="body2" color="primary" gutterBottom>
                  <FormattedMessage {...messages.stepOne} />
                </Typography>
                <Typography type="body1" align="left" gutterBottom>
                  <FormattedMessage {...messages.stepOneContents} />
                </Typography>
                <Typography type="body2" color="primary" gutterBottom>
                  <FormattedMessage {...messages.stepTwo} />
                </Typography>
                <Typography type="body1" align="left" gutterBottom>
                  <FormattedMessage {...messages.stepTwoContents} />
                </Typography>
                <Typography type="body2" color="primary" gutterBottom>
                  <FormattedMessage {...messages.stepThree} />
                </Typography>
                <Typography type="body1" align="left" gutterBottom>
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
            <Typography type="display1" gutterBottom>
              <FormattedMessage {...messages.startProjectHeader} />
            </Typography>
            <Typography type="subheading" gutterBottom>
              <FormattedMessage {...messages.startProjectMessage} />
            </Typography>
            <br />
            <Button className={this.props.classes.button} onClick={this.handleClick}>
              <FormattedMessage {...messages.detailsButton} />
            </Button>
          </CenteredSection>
        </div>
        {/* <NavBar> */}
        {/* <HeaderLink to="/"> */}
        {/* <FormattedMessage {...messages.payByZwap} />  */}
        {/* </HeaderLink> */}
        {/* <HeaderLink to="/features"> */}
        {/* <FormattedMessage {...messages.features} /> */}
        {/* </HeaderLink> */}
        {/* </NavBar> */}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
