import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from 'material-ui/styles';

import A from './A';
// import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import ZwapLogo from './ZwapLogoRGB_1_340x100.png';
import messages from './messages';

const styles = {
  image: {
    margin: 'auto',
    textAlign: 'center',
    // width: '100%',
    height: 80,
    display: 'block',
    paddingTop: 20,
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
  render() {
    return (
      <div>
        <A href="https://www.zwap.hk">
          <img className={this.props.classes.image} src={ZwapLogo} alt="Zwap - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
