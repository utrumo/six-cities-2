import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
const mockLocations = [
  {
    id: 1,
    previewImage: `img/apartment-01.jpg`,
    title: `Beautiful & luxurious apartment at great location`,
    isPremium: true,
    rating: 4.6,
    price: 120,
    type: `Apartment`
  },
  {
    id: 2,
    previewImage: `img/room.jpg`,
    title: `Wood and stone place`,
    isPremium: false,
    rating: 4.2,
    price: 80,
    type: `Private room`
  },
  {
    id: 3,
    previewImage: `img/apartment-02.jpg`,
    title: `Canal View Prinsengracht`,
    isPremium: false,
    rating: 2.8,
    price: 132,
    type: `Apartment`
  },
  {
    id: 4,
    previewImage: `img/apartment-03.jpg`,
    title: `Nice, cozy, warm big bed apartment`,
    isPremium: true,
    rating: 1.7,
    price: 180,
    type: `Apartment`
  },
  {
    id: 5,
    previewImage: `img/room.jpg`,
    title: `Wood and stone place`,
    isPremium: false,
    rating: 3.9,
    price: 80,
    type: `Private room`
  }
];

it(`App component renders correctly`, () => {
  const tree = renderer
    .create(<App
      locations={mockLocations}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
