import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {MemoryRouter as Router} from 'react-router-dom';
import NameSpace from 'store/name-spaces.js';
import {DEFAULT_NUMBER_VALUE, SortingVariants} from 'shared/const.js';
import FavoritesPageEmpty from './favorites-page-empty.jsx';

it(`FavoritesPageEmpty should renders correctly`, () => {
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
          <FavoritesPageEmpty />
        </Router>
      </Provider>
  ).toJSON();
  expect(favoriteLocationsItems).toMatchSnapshot();

});
