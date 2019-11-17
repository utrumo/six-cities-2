import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import PlacesList from './places-list.jsx';
const mockOffer = [
  {
    id: 1,
    previewImage: `img/apartment-01.jpg`,
    title: `Beautiful & luxurious apartment at great location`,
    isPremium: true,
    rating: 4.6,
    price: 120,
    type: `apartment`
  }
];

it(`MainPage component renders correctly`, () => {
  const tree = renderer
    .create(<Router>
      <PlacesList
        offers={mockOffer}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
