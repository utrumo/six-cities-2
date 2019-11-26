import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import OfferPage from './offer-page.jsx';

const mockOffer = {
  offer: {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12
      }
    },
    previewImage: `img/apartment-02.jpg`,
    images: [
      `img/apartment-02.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-01.jpg`
    ],
    title: `Beautiful & luxurious apartment at great location`,
    description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198
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
      `Baby seat`
    ],
    host: {
      name: `Max`,
      isPro: false,
      avatarUrl: `img/avatar-max.jpg`
    }
  },

  reviews: [
    {
      id: 1,
      user: {
        id: 13,
        isPro: false,
        name: `Zak`,
        avatarUrl: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/4.jpg`
      },
      rating: 4,
      comment: `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`,
      date: `2019-11-20T13:49:50.988Z`
    }
  ],

  nearestOffers: [
    {
      id: 22,
      city: {
        name: `Brussels`,
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
      },
      previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
      images: [
        `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
        `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`
      ],
      title: `Canal View Prinsengracht`,
      isPremium: true,
      rating: 4.1,
      type: `room`,
      bedrooms: 1,
      maxAdults: 1,
      price: 252,
      goods: [
        `Breakfast`,
        `Coffee machine`
      ],
      host: {
        name: `Angelina`,
        isPro: true,
        avatarUrl: `img/avatar-angelina.jpg`
      },
      description: `In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
      location: {
        latitude: 50.839557,
        longitude: 4.346697
      }
    }
  ]
};

it(`shold correct renderer after relaunch`, () => {
  const tree = renderer
    .create(<Router>
      <OfferPage {...mockOffer} />
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
