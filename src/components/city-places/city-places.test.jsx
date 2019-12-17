import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {CityPlaces} from './city-places.jsx';

const offers = [
  {
    id: 1,
    previewImage: `/img/apartment.jpg`,
    title: `Great place`,
    isPremium: true,
    rating: 2.4,
    price: 198,
    type: `room`
  }
];

it(`CityPlaces renders correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <CityPlaces offers={offers} onCardActive={jest.fn()} />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
