import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {UrlPath} from '../../shared/const.js';

import MainPageLoader from '../main-page-loader/main-page-loader.jsx';
import OfferPageLoader from '../offer-page-loader/offer-page-loader.jsx';
import ErrorPage from '../error-page/error-page.jsx';
import SigInPage from '../sign-in-page/sig-in-page.jsx';

const App = () => (
  <Switch>
    <Route exact path={UrlPath.ROOT} render={() => <MainPageLoader />} />
    <Route exact path={UrlPath.LOGIN} render={() => <SigInPage />} />
    <Route exact path={`${UrlPath.OFFER}/:id`} render={({match: {params: {id}}}) => (
      <OfferPageLoader id={id} />
    )} />
    <Route render={() => <ErrorPage />} />
  </Switch>
);

export default App;
