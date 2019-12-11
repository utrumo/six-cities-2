import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {NearPlaces} from './near-places.jsx';
const nearestOffers = [
  {
    id: 1,
    previewImage: `img/apartment.jpg`,
    title: `Beautiful location`,
    isPremium: true,
    rating: 4.9,
    price: 190,
    type: `apartment`
  },
  {
    id: 2,
    previewImage: `img/hotel.jpg`,
    title: `Great location`,
    isPremium: false,
    rating: 4.7,
    price: 140,
    type: `hotel`
  }
];

it(`NearPlaces renders correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <NearPlaces nearestOffers={nearestOffers} />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
