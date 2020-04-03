import {createBrowserHistory} from 'history';
import createAPI from './api.js';
// import {UrlPath} from './shared/const.js';

import {compose} from 'recompose';
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducer.js';
import thunk from 'redux-thunk';

import {Operation as DataOperation} from './store/data/data.js';
// import {ActionCreator as DataActionCreator} from './store/data/data.js';
import {ActionCreator as UserActionCreator, Operation as UserOperation} from './store/user/user.js';
// import mockOffers from './mocks/offers';
// import mockOffersReviews from './mocks/reviews.js';

import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import App from './components/app/app.jsx';

const UNAUTHORIZED = false;

const init = () => {
  const history = createBrowserHistory();
  const api = createAPI(() => {
    store.dispatch(UserActionCreator.changeAuthorizationStatus(UNAUTHORIZED));
    // if (history.location.pathname === UrlPath.FAVORITES) {
    //   history.push(UrlPath.LOGIN);
    // }
  });
  const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
      reducer,
      composeEnchancers(
          applyMiddleware(thunk.withExtraArgument(api))
      )
  );

  store.dispatch(UserOperation.loadProfile());
  store.dispatch(DataOperation.loadOffers());
  // store.dispatch(DataActionCreator.addOffers(mockOffers));
  // store.dispatch(DataActionCreator.addComments(mockOffersReviews));

  ReactDom.render((
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  ),
  document.getElementById(`root`)
  );
};

init();
