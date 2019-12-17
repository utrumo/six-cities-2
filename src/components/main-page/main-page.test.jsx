import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-spaces.js';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {DEFAULT_NUMBER_VALUE, SortingVariants} from '../../shared/const.js';
import MainPage from './main-page.jsx';

const mockStore = configureStore();

it(`MainPage component renders correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      currentLocation: `Amsterdam`,
      currentOfferId: DEFAULT_NUMBER_VALUE,
      sortOrder: SortingVariants.POPULAR,
      offers: [
        {
          id: 1,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.370216,
              longitude: 4.895168,
              zoom: 12
            }
          },
          previewImage: `/img/apartment-01.jpg`,
          title: `Beautiful & luxurious apartment at great location`,
          location: {
            latitude: 52.3809553943508,
            longitude: 4.939309666406198,
            zoom: 8
          },
          isPremium: true,
          rating: 4.6,
          price: 120,
          type: `apartment`
        }
      ],
      offersReviews: []
    },
    [NameSpace.USER]: {
      isAuthorized: false,
      emailValidationError: ``,
      profile: {}
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <MainPage />
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
