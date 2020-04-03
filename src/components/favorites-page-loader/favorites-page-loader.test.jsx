import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {MemoryRouter as Router} from 'react-router-dom';
import NameSpace from '../../store/name-spaces.js';
import {DEFAULT_NUMBER_VALUE, SortingVariants} from '../../shared/const.js';
import FavoritesPageLoader from './favorites-page-loader.jsx';
const mockStore = configureStore();

it(`FavoritesPageLoader should render favorites empty page if hasn't favorite offers`, () => {
  const offers = [
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
      images: [
        `/img/apartment-02.jpg`,
        `/img/room.jpg`,
        `/img/apartment-01.jpg`,
        `/img/studio-01.jpg`,
        `/img/apartment-03.jpg`,
        `/img/apartment-01.jpg`,
        `/img/apartment-01.jpg`,
      ],
      title: `Beautiful & luxurious apartment at great location`,
      description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
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
      goods: [
        `Washer`,
        `Laptop friendly workspace`,
        `Breakfast`,
        `Dishwasher`,
        `Fridge`,
        `Air conditioning`,
        `Baby seat`,
        `Towels`,
        `Coffee machine`,
      ],
      host: {
        id: 1,
        name: `Angelina`,
        isPro: true,
        avatarUrl: `img/avatar-angelina.jpg`,
      },
    },
  ];
  const store = mockStore({
    [NameSpace.DATA]: {
      offers,
      offersReviews: [],
      currentLocation: ``,
      currentOfferId: DEFAULT_NUMBER_VALUE,
      sortOrder: SortingVariants.POPULAR,
    },
    [NameSpace.USER]: {
      isAuthorized: true,
      emailValidationError: ``,
      profile: {
        id: 1,
        email: `test@test.ru`,
        name: `test`,
        avatarUrl: `/static/avatar/2.jpg`,
        isPro: false,
      },
    },
  });
  const favoritePlaces = renderer.create(
      <Provider store={store}>
        <Router>
          <FavoritesPageLoader />
        </Router>
      </Provider>
  ).toJSON();
  expect(favoritePlaces).toMatchSnapshot();
});

it(`FavoritesPageLoader should render favorites page if has favorite offers`, () => {
  const offers = [
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
      images: [
        `/img/apartment-02.jpg`,
        `/img/room.jpg`,
        `/img/apartment-01.jpg`,
        `/img/studio-01.jpg`,
        `/img/apartment-03.jpg`,
        `/img/apartment-01.jpg`,
        `/img/apartment-01.jpg`,
      ],
      title: `Beautiful & luxurious apartment at great location`,
      description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
      location: {
        latitude: 52.364540000000005,
        longitude: 4.9019759999999994,
        zoom: 16,
      },
      isPremium: true,
      isFavorite: true,
      rating: 4.6,
      price: 120,
      type: `apartment`,
      bedrooms: 5,
      maxAdults: 3,
      goods: [
        `Washer`,
        `Laptop friendly workspace`,
        `Breakfast`,
        `Dishwasher`,
        `Fridge`,
        `Air conditioning`,
        `Baby seat`,
        `Towels`,
        `Coffee machine`,
      ],
      host: {
        id: 1,
        name: `Angelina`,
        isPro: true,
        avatarUrl: `img/avatar-angelina.jpg`,
      },
    },
  ];
  const store = mockStore({
    [NameSpace.DATA]: {
      offers,
      offersReviews: [],
      currentLocation: ``,
      currentOfferId: DEFAULT_NUMBER_VALUE,
      sortOrder: SortingVariants.POPULAR,
    },
    [NameSpace.USER]: {
      isAuthorized: true,
      emailValidationError: ``,
      profile: {
        id: 1,
        email: `test@test.ru`,
        name: `test`,
        avatarUrl: `/static/avatar/2.jpg`,
        isPro: false,
      },
    },
  });
  const favoritePlaces = renderer.create(
      <Provider store={store}>
        <Router>
          <FavoritesPageLoader />
        </Router>
      </Provider>
  ).toJSON();
  expect(favoritePlaces).toMatchSnapshot();
});
