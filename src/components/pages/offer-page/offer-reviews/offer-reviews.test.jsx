import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import NameSpace from 'store/name-spaces.js';
import {Provider} from 'react-redux';
import OfferReviews from './offer-reviews.jsx';

const offers = [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    previewImage: `img/apartment-01.jpg`,
    images: [
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-01.jpg`,
    ],
    title: `Beautiful & luxurious apartment at great location`,
    description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isPremium: true,
    rating: 4.6,
    price: 120,
    type: `apartment`,
    bedrooms: 3,
    maxAdults: 4,
    goods: [
      `Washer`,
      `Breakfast`,
      `Air conditioning`,
      `Laptop friendly workspace`,
      `Towels`,
      `Baby seat`,
    ],
    host: {
      name: `Max`,
      isPro: false,
      avatarUrl: `img/avatar-max.jpg`,
    },
  },
];
const offersReviews = [
  {
    id: 1,
    comments: [{
      id: 1,
      user: {
        id: 10,
        isPro: true,
        name: `Max`,
        avatarUrl: `avatar/1.jpg`,
      },
      rating: 3,
      comment: `The house is very good.`,
      date: `2019-11-13T13:49:50.988Z`,
    }],
  },
];
const mockStore = configureStore();
const NAME_SPACE = NameSpace.DATA;
const store = mockStore({[NAME_SPACE]: {
  currentLocation: offers[0].city.name,
  offers,
  currentOfferId: offers[0].id,
  offersReviews,
}});

it(`OfferReviews must correct renders after restart`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <OfferReviews />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
