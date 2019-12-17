import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import NameSpace from '../../store/name-spaces.js';
import {SortingVariants} from '../../shared/const.js';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorPage from './error-page.jsx';

const mockStore = configureStore();

it(`Should renders correctly`, () => {
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
              zoom: 13
            }
          },
          previewImage: `/img/apartment-01.jpg`,
          images: [
            `/img/apartment-02.jpg`,
            `/img/room.jpg`,
            `/img/apartment-01.jpg`,
            `/img/studio-01.jpg`,
            `/img/apartment-03.jpg`,
            `/img/apartment-01.jpg`,
            `/img/apartment-01.jpg`
          ],
          title: `Beautiful & luxurious apartment at great location`,
          description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          location: {
            latitude: 52.364540000000005,
            longitude: 4.9019759999999994,
            zoom: 16
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
            `Coffee machine`
          ],
          host: {
            id: 1,
            name: `Angelina`,
            isPro: true,
            avatarUrl: `img/avatar-angelina.jpg`
          }
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
    .create(<Provider store={store}>
      <Router>
        <ErrorPage />
      </Router>
    </Provider>
    )
    .toJSON();
  expect.toMatchSnapshot(tree);
});
