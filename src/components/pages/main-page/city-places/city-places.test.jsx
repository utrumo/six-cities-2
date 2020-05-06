import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {SortingVariants} from 'shared/const.js';
import NameSpace from 'store/name-spaces.js';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import CityPlaces from './city-places.jsx';

const mockStore = configureStore();

it(`CityPlaces renders correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      currentLocation: `Amsterdam`,
      currentOfferId: 2,
      sortOrder: SortingVariants.POPULAR,
      offers: [
        {
          id: 1,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13,
            },
          },
          previewImage: `/img/apartment-01.jpg`,
          images: [`/img/apartment-02.jpg`],
          title: `Beautiful & luxurious apartment at great location`,
          description: `Peaceful studio in the most wanted area in town.`,
          location: {
            latitude: 52.364540000000005,
            longitude: 4.9019759999999994,
            zoom: 16,
          },
          isPremium: true,
          isFavorite: false,
          rating: 4.6,
          price: 120,
          type: `apartment`,
          bedrooms: 5,
          maxAdults: 3,
          goods: [`Washer`],
          host: {
            id: 1,
            name: `Angelina`,
            isPro: true,
            avatarUrl: `img/avatar-angelina.jpg`,
          },
        },
        {
          id: 2,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13,
            },
          },
          previewImage: `/img/room.jpg`,
          images: [`/img/apartment-03.jpg`],
          title: `Wood and stone place`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic experience`,
          location: {
            latitude: 52.367540000000005,
            longitude: 4.883976,
            zoom: 16,
          },
          isPremium: false,
          isFavorite: false,
          rating: 4.2,
          price: 80,
          type: `apartment`,
          bedrooms: 3,
          maxAdults: 6,
          goods: [`Laptop friendly workspace`],
          host: {
            id: 2,
            name: `Oleg`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`,
          },
        },
      ],
      favorites: [],
      offersReviews: [],
    },
    [NameSpace.USER]: {
      isAuthorized: false,
      emailValidationError: ``,
      profile: {},
    },
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <CityPlaces />
          </Router>
        </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
