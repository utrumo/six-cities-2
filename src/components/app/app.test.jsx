import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
const mockOffers = [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    previewImage: `img/apartment-01.jpg`,
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
      latitude: 52.369553943508,
      longitude: 4.85309666406198
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
  }
];

const mockOffersReviews = [
  {
    id: 1,
    comments: [
      {
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
      }
    ]
  }
];

it(`App component renders correctly after restart`, () => {
  const tree = renderer
    .create(<App
      offers={mockOffers}
      offersReviews={mockOffersReviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
