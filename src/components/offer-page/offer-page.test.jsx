import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-spaces.js';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {SortingVariants} from '../../shared/const.js';
import OfferPage from './offer-page.jsx';

const mockStore = configureStore();

it(`shold correct renderer after relaunch`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      currentLocation: `Amsterdam`,
      currentOfferId: 2,
      sortOrder: SortingVariants.POPULAR,
      offers: [
        {
          id: 2,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.370216,
              longitude: 4.895168,
              zoom: 12
            }
          },
          previewImage: `/img/apartment-02.jpg`,
          images: [
            `/img/apartment-02.jpg`,
            `/img/room.jpg`,
            `/img/apartment-01.jpg`,
            `/img/studio-01.jpg`,
            `/img/apartment-03.jpg`,
            `/img/apartment-01.jpg`
          ],
          title: `Beautiful & luxurious apartment at great location`,
          description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          location: {
            latitude: 52.3809553943508,
            longitude: 5.939309666406198,
            zoom: 8
          },
          isPremium: true,
          isFavorite: true,
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
            `Baby seat`
          ],
          host: {
            name: `Max`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`
          }
        }
      ],
      favorites: [],
      offersReviews: [
        {
          id: 2,
          comments: [{
            id: 2,
            user: {
              id: 13,
              isPro: false,
              name: `Zak`,
              avatarUrl: `/img/avatar-alex.jpg`
            },
            rating: 4,
            comment: `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`,
            date: `2019-11-20T13:49:50.988Z`
          }]
        }
      ]
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
            <OfferPage />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
