import {createBrowserHistory} from 'history';
import {compose} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import createAPI from 'api.js';
import {reducer, DataOperation, UserOperation} from 'store';
import App from 'components/app.jsx';
// import {UrlPath} from 'shared/const.js';
// import mockOffers from 'mocks/offers';
// import mockOffersReviews from 'mocks/reviews.js';

const UNAUTHORIZED = false;

const init = () => {
  const history = createBrowserHistory();
  const api = createAPI(() => {
    store.dispatch(UserOperation.changeAuthorizationStatus(UNAUTHORIZED));
    // if (history.location.pathname === UrlPath.FAVORITES) {
    //   history.push(UrlPath.LOGIN);
    // }
  });
  const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
      reducer,
      composeEnchancers(
          applyMiddleware(thunk.withExtraArgument(api)),
      ),
  );

  store.dispatch(UserOperation.loadProfile());
  store.dispatch(DataOperation.loadOffers());
  // store.dispatch(DataOperation.addOffers(mockOffers));
  // store.dispatch(DataOperation.addComments(mockOffersReviews));

  ReactDom.render((
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  ),
  document.getElementById(`root`),
  );
};

init();
