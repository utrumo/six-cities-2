import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import MainPage from './main-page.jsx';

const mockOffers = [
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
      longitude: 4.939309666406198
    },
    isPremium: true,
    rating: 4.6,
    price: 120,
    type: `apartment`
  }
];

it(`MainPage component renders correctly`, () => {
  const tree = renderer
    .create(<Router>
      <MainPage
        offers={mockOffers}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
