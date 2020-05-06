import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {MemoryRouter as Router} from 'react-router-dom';

import NameSpace from 'store/name-spaces.js';
import {DEFAULT_NUMBER_VALUE, SortingVariants} from 'shared/const.js';
import MainPage from './main-page.jsx';

const mockStore = configureStore([thunk]);

it(`Main page without offers renders correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      currentLocation: ``,
      currentOfferId: DEFAULT_NUMBER_VALUE,
      sortOrder: SortingVariants.POPULAR,
      offers: [],
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
          <Router initialEntries={[`/`] }>
            <MainPage />
          </Router>
        </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Main page with offers renders correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      currentLocation: `Amsterdam`,
      currentOfferId: DEFAULT_NUMBER_VALUE,
      sortOrder: SortingVariants.POPULAR,
      offers: [
        {
          id: 3,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13,
            },
          },
          previewImage: `/img/apartment-02.jpg`,
          images: [
            `/img/studio-01.jpg`,
            `/img/apartment-02.jpg`,
            `/img/apartment-01.jpg`,
            `/img/apartment-03.jpg`,
            `/img/room.jpg`,
            `/img/apartment-01.jpg`,
          ],
          title: `Canal View Prinsengracht`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
          location: {
            latitude: 52.36354,
            longitude: 4.889976,
            zoom: 16,
          },
          isPremium: false,
          isFavorite: false,
          rating: 2.8,
          price: 132,
          type: `room`,
          bedrooms: 2,
          maxAdults: 4,
          goods: [
            `Laptop friendly workspace`,
            `Washer`,
            `Breakfast`,
          ],
          host: {
            id: 3,
            name: `Max`,
            isPro: true,
            avatarUrl: `img/avatar-angelina.jpg`,
          },

        },
        {
          id: 4,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13,
            },
          },
          previewImage: `/img/apartment-03.jpg`,
          images: [
            `/img/apartment-01.jpg`,
            `/img/room.jpg`,
            `/img/apartment-01.jpg`,
            `/img/apartment-02.jpg`,
            `/img/studio-01.jpg`,
            `/img/apartment-03.jpg`,
          ],
          title: `Nice, cozy, warm big bed apartment`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          location: {
            latitude: 52.37454,
            longitude: 4.881976,
            zoom: 16,
          },
          isPremium: true,
          isFavorite: false,
          rating: 1.7,
          price: 180,
          type: `house`,
          bedrooms: 8,
          maxAdults: 16,
          goods: [
            `Towels`,
            `Laptop friendly workspace`,
            `Baby seat`,
            `Air conditioning`,
            `Washer`,
            `Breakfast`,
            `Dishwasher`,
            `Coffee machine`,
            `Fridge`,
          ],
          host: {
            id: 4,
            name: `Max`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`,
          },
        },
      ],
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
          <Router initialEntries={[`/`]}>
            <MainPage />
          </Router>
        </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
