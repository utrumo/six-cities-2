import React from 'react';
import {Switch, Route} from 'react-router-dom';

import withAuth from 'hocs/with-auth/with-auth.js';
import {UrlPath} from 'shared/const.js';

import MainPage from './pages/main-page/main-page.jsx';
import SigInPage from './pages/sign-in-page/sig-in-page.jsx';
import FavoritesPage from './pages/favorites-page/favorites-page.jsx';
import OfferPageLoader from './pages/offer-page-loader/offer-page-loader.jsx';
import ErrorPage from './pages/error-page/error-page.jsx';

const PrivateFavoritesPage = withAuth(FavoritesPage);

const App = () => (
  <Switch>
    <Route exact path={UrlPath.ROOT} component={MainPage} />
    <Route exact path={UrlPath.LOGIN} component={SigInPage} />
    <Route exact path={UrlPath.FAVORITES} component={PrivateFavoritesPage} />
    <Route exact path={`${UrlPath.OFFER}/:id`} component={OfferPageLoader} />
    <Route component={ErrorPage} />
  </Switch>
);

export default App;
