import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
const mockOffers = [
  {
    id: 1,
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

it(`App component renders correctly after restart`, () => {
  const tree = renderer
    .create(<App
      offers={mockOffers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
