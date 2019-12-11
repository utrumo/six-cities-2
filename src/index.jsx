import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import ActionCreator from './store/action-creator.js';
import Selectors from './store/selectors.js';
import {Provider} from 'react-redux';
import reducer from './store/reducer.js';
import App from './components/app/app.jsx';

import mockOffers from './mocks/offers';
import mockOffersReviews from './mocks/reviews.js';

const init = () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.dispatch(ActionCreator.loadOffers(mockOffers));
  store.dispatch(ActionCreator.loadComments(mockOffersReviews));

  const firstLocation = Selectors.getLocations(store.getState())[0];
  store.dispatch(ActionCreator.changeLocation(firstLocation));

  ReactDom.render((
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById(`root`)
  );
};

init();
