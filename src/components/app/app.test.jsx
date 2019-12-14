import React from 'react';
import renderer from 'react-test-renderer';
import configuraStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {DEFAULT_NUMBER_VALUE, SortingVariants} from '../../shared/const.js';
import App from './app.jsx';

const offers = [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        "latitude": 52.364540000000005,
        "longitude": 4.9019759999999994,
        "zoom": 16
      }
    },
    previewImage: `img/apartment-01.jpg`,
    title: `Beautiful & luxurious apartment at great location`,
    isPremium: true,
    rating: 4.6,
    price: 120,
    type: `apartment`,
    location: {
      latitude: 52.364540000000005,
      longitude: 4.9019759999999994
    }
  }
];
const offersReviews = [
  {
    id: 1,
    comments: [{
      id: 1,
      user: {
        id: 12,
        isPro: false,
        name: `Alex`,
        avatarUrl: `/img/avatar-alex.jpg`
      },
      rating: 4,
      comment: `Greate place`,
      date: `2019-10-31T08:29:32.047Z`
    }]
  }
];
const mockStore = configuraStore([]);
const store = mockStore({
  currentLocation: offers[0].city.name,
  offers,
  currentOfferId: DEFAULT_NUMBER_VALUE,
  offersReviews,
  sortOrder: SortingVariants.POPULAR
});

it(`App component renders correctly after restart`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
