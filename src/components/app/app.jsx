import React from 'react';
import {Switch, Route} from 'react-router-dom';

import MainPageLoader from '../main-page-loader/main-page-loader.jsx';
import OfferPageLoader from '../offer-page-loader/offer-page-loader.jsx';
import ErrorPage from '../error-page/error-page.jsx';

const App = () => (
  <Switch>
    <Route exact path="/" render={() => <MainPageLoader />} />
    <Route exact path="/offer/:id" render={({match: {params: {id}}}) => (
      <OfferPageLoader id={id} />
    )} />
    <Route render={() => <ErrorPage />} />
  </Switch>
);

export default App;
