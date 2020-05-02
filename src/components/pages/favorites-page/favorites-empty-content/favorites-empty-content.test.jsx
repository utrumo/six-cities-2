import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {MemoryRouter as Router} from 'react-router-dom';

import NameSpace from 'store/name-spaces.js';
import {DEFAULT_NUMBER_VALUE, SortingVariants} from 'shared/const.js';
import FavoritesEmptyContent from './favorites-empty-content.jsx';

it(`FavoritesEmptyContent should renders correctly`, () => {
  const mockStore = configureStore();
  const store = mockStore({
    [NameSpace.DATA]: {
      offers: [],
      offersReviews: [],
      currentLocation: ``,
      currentOfferId: DEFAULT_NUMBER_VALUE,
      sortOrder: SortingVariants.POPULAR,
    },
    [NameSpace.USER]: {
      isAuthorized: false,
      emailValidationError: ``,
      profile: {},
    },
  });
  const favoriteLocationsItems = renderer.create(
      <Provider store={store}>
        <Router>
          <FavoritesEmptyContent />
        </Router>
      </Provider>
  ).toJSON();
  expect(favoriteLocationsItems).toMatchSnapshot();

});
