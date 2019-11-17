import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import MainPage from './main-page.jsx';

const mockOffers = [
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
      <MainPage
        offers={mockOffers}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
