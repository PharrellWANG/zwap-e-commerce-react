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

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MainPage from 'containers/MainPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MuiformPage from '../../containers/MuiformPage/Loadable';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  display: flex;
  min-height: 100%;
  height: auto !important;
  height: 100%;
  // padding: 0 16px;
  flex-direction: column;
  margin: 0 auto -142px;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Zwap Pay"
        defaultTitle="Zwap Pay"
      >
        <meta name="description" content="Zwap Pay" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/mimic-post-from-third-party" component={MuiformPage} />
        <Route exact path="/:token?" component={MainPage} />
        <Route exact path="/previous-home" component={HomePage} />
        <Route exact path="/features" component={FeaturePage} />
        <Route exact path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
