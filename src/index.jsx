import {createBrowserHistory} from 'history';
import createAPI from './api.js';
import {UrlPath} from './shared/const.js';

import {compose} from 'recompose';
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducer.js';
import thunk from 'redux-thunk';

import {Operation} from './store/data/data.js';
// import ActionCreator from './store/action-creator.js';
// import mockOffers from './mocks/offers';
// import mockOffersReviews from './mocks/reviews.js';

import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import App from './components/app/app.jsx';

const init = () => {
  const history = createBrowserHistory();
  const api = createAPI(() => history.push(UrlPath.LOGIN));
  const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
      reducer,
      composeEnchancers(
          applyMiddleware(thunk.withExtraArgument(api))
      )
  );

  store.dispatch(Operation.loadOffers());
  // store.dispatch(ActionCreator.addOffers(mockOffers));
  // store.dispatch(ActionCreator.addComments(mockOffersReviews));

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
