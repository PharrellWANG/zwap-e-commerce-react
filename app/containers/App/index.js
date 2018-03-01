/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MainPage from 'containers/MainPage/Loadable';
import ApplicationFormPage from 'containers/ApplicationFormPage/Loadable';
import InSmileRegistrationPage from 'containers/InSmileRegistrationPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { createMuiTheme, withStyles } from 'material-ui/styles';
import { compose } from 'redux';
import PropTypes from 'prop-types';
// import MuiformPage from '../../containers/MuiformPage/Loadable';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  display: flex;
  min-height: 100%;
  height: auto !important;
  height: 100%;
  // padding: 0 16px;
  padding: 0;
  flex-direction: column;
  margin: 0 auto -72px;
`;

const theme = createMuiTheme({
  palette: {
    // primary: green,
    // secondary: deepOrange,
    // secondary: {
    //   ...green,
    //   A400: '#00E677',
    // },
    // error: red,
    // type: 'light', // Switching the dark mode on is a single property value change.
    // type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const styles = {
  innerContent: {
    padding: theme.spacing.unit,
    // Those two parts made sticky footer but not fixed !!
    // !!!! 1.1 sticky footer !!!!
    flex: 1,
    // !!!! 1.2 sticky footer !!!!
  },
  content: {
    // !!!! 2.1 sticky footer !!!!
    display: 'flex',
    minHeight: '70vh',
    flexDirection: 'column',
    // !!!! 2.2 sticky footer !!!!
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Zwap Pay"
          defaultTitle="Zwap Pay"
        >
          <meta name="description" content="Zwap Pay" />
        </Helmet>
        <Header />
        <main className={classes.content}>
          <div className={classes.innerContent}>
            <Switch>
              {/* <Route exact path="/mimic_post" component={MuiformPage} /> */}
              <Route exact path="/apply" component={ApplicationFormPage} />
              <Route exact path="/insmile/apply" component={InSmileRegistrationPage} />
              <Route exact path="/:token?" component={MainPage} />
              {/* <Route exact path="/previous_home" component={HomePage} /> */}
              {/* <Route exact path="/features" component={FeaturePage} /> */}
              <Route exact path="" component={NotFoundPage} />
            </Switch>
          </div>
          <Footer />
        </main>
      </AppWrapper>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object,
};

export default compose(
  withStyles(styles),
)(App);
