import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import NameSpace from '../../store/name-spaces.js';
import {Provider} from 'react-redux';
import {MemoryRouter as Router} from 'react-router-dom';
import {SortingVariants} from '../../shared/const.js';
import OfferPageLoader from './offer-page-loader.jsx';

const mockStore = configureStore([thunk]);

it(`Offer page with wrong offer id renders correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      currentLocation: `Amsterdam`,
      currentOfferId: 2,
      sortOrder: SortingVariants.POPULAR,
      offers: [
        {
          id: 3,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13
            }
          },
          previewImage: `/img/apartment-02.jpg`,
          images: [
            `/img/studio-01.jpg`,
            `/img/apartment-02.jpg`,
            `/img/apartment-01.jpg`,
            `/img/apartment-03.jpg`,
            `/img/room.jpg`,
            `/img/apartment-01.jpg`
          ],
          title: `Canal View Prinsengracht`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
          location: {
            latitude: 52.36354,
            longitude: 4.889976,
            zoom: 16
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
            `Breakfast`
          ],
          host: {
            id: 3,
            name: `Max`,
            isPro: true,
            avatarUrl: `img/avatar-angelina.jpg`
          }

        },
        {
          id: 4,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13
            }
          },
          previewImage: `/img/apartment-03.jpg`,
          images: [
            `/img/apartment-01.jpg`,
            `/img/room.jpg`,
            `/img/apartment-01.jpg`,
            `/img/apartment-02.jpg`,
            `/img/studio-01.jpg`,
            `/img/apartment-03.jpg`
          ],
          title: `Nice, cozy, warm big bed apartment`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          location: {
            latitude: 52.37454,
            longitude: 4.881976,
            zoom: 16
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
            `Fridge`
          ],
          host: {
            id: 4,
            name: `Max`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`
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
    .create(
        <Provider store={store}>
          <Router initialEntries={[`/offers/2`] }>
            <OfferPageLoader id="2" />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Offer page renders correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      currentLocation: `Amsterdam`,
      currentOfferId: 1,
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
        },

        {
          id: 2,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13
            }
          },
          previewImage: `/img/room.jpg`,
          images: [
            `/img/studio-01.jpg`,
            `/img/apartment-01.jpg`,
            `/img/apartment-02.jpg`,
            `/img/room.jpg`,
            `/img/apartment-01.jpg`,
            `/img/apartment-03.jpg`
          ],
          title: `Wood and stone place`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          location: {
            latitude: 52.367540000000005,
            longitude: 4.883976,
            zoom: 16
          },
          isPremium: false,
          isFavorite: false,
          rating: 4.2,
          price: 80,
          type: `apartment`,
          bedrooms: 3,
          maxAdults: 6,
          goods: [
            `Laptop friendly workspace`
          ],
          host: {
            id: 2,
            name: `Oleg`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`
          }
        }
      ],
      offersReviews: [
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
          <Router initialEntries={[`/offers/1`] }>
            <OfferPageLoader id="1" />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});


