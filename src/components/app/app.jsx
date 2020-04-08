import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {UrlPath} from '../../shared/const.js';

import withAuth from '../../hocs/with-auth/with-auth.js';
import MainPageLoader from '../main-page-loader/main-page-loader.jsx';
import OfferPageLoader from '../offer-page-loader/offer-page-loader.jsx';
import FavoritesPageLoader from '../favorites-page-loader/favorites-page-loader.jsx';
import ErrorPage from '../error-page/error-page.jsx';
import SigInPage from '../sign-in-page/sig-in-page.jsx';

const PrivateFavoritesPageLoader = withAuth(FavoritesPageLoader);

const App = () => (
  <Switch>
    <Route exact path={UrlPath.ROOT} render={() => <MainPageLoader />} />
    <Route exact path={UrlPath.LOGIN} component={SigInPage} />
    <Route exact path={UrlPath.FAVORITES} component={PrivateFavoritesPageLoader} />
    <Route exact path={`${UrlPath.OFFER}/:id`} component={OfferPageLoader} />
    <Route render={() => <ErrorPage />} />
  </Switch>
);

export default App;
