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
