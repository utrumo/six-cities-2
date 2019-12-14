import React from 'react';
import renderer from 'react-test-renderer';
import configuraStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {SortingVariants} from '../../shared/const.js';
import MainPage from './main-page.jsx';

const offers = [
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
    previewImage: `img/apartment-01.jpg`,
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
];
const offersReviews = [
  {
    id: 1,
    comments: [{
      id: 2,
      user: {
        id: 13,
        isPro: false,
        name: `Peter`,
        avatarUrl: `/img/avatar-peter.jpg`
      },
      rating: 4,
      comment: `Great place!`,
      date: `2019-10-18T13:20:50.988Z`
    }]
  }
];
const mockStore = configuraStore();
const store = mockStore({
  currentLocation: offers[0].city.name,
  offers,
  currentOfferId: offers[0].id,
  offersReviews,
  sortOrder: SortingVariants.POPULAR
});

it(`MainPage component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <MainPage
              offers={offers}
            />
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
