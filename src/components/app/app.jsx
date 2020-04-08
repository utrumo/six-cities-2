import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {UrlPath} from 'shared/const.js';
import MainPageLoader from 'components/main-page-loader/main-page-loader.jsx';
import SigInPage from 'components/sign-in-page/sig-in-page.jsx';
import withAuth from 'hocs/with-auth/with-auth.js';
import FavoritesPageLoader from 'components/favorites-page-loader/favorites-page-loader.jsx';
import OfferPageLoader from 'components/offer-page-loader/offer-page-loader.jsx';
import ErrorPage from 'components/error-page/error-page.jsx';

const PrivateFavoritesPageLoader = withAuth(FavoritesPageLoader);

const App = () => (
  <Switch>
    <Route exact path={UrlPath.ROOT} component={MainPageLoader} />
    <Route exact path={UrlPath.LOGIN} component={SigInPage} />
    <Route exact path={UrlPath.FAVORITES} component={PrivateFavoritesPageLoader} />
    <Route exact path={`${UrlPath.OFFER}/:id`} component={OfferPageLoader} />
    <Route component={ErrorPage} />
  </Switch>
);

export default App;
