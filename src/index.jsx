import {createStore, applyMiddleware} from 'redux';
import {compose} from 'recompose';
import thunk from 'redux-thunk';
import createAPI from './api.js';
import {Operation} from './store/data/data.js';
import reducer from './store/reducer.js';
import {BrowserRouter as Router} from 'react-router-dom';
// import ActionCreator from './store/action-creator.js';
// import mockOffers from './mocks/offers';
// import mockOffersReviews from './mocks/reviews.js';

import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
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
      <Router>
        <App />
      </Router>
    </Provider>
  ),
  document.getElementById(`root`)
  );
};

init();
