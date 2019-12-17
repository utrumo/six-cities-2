import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import PlaceCard from './place-card.jsx';

const mock = {
  id: 1,
  previewImage: `/img/apartment-01.jpg`,
  title: `Beautiful & luxurious apartment at great location`,
  isPremium: true,
  rating: 4.6,
  price: 120,
  type: `apartment`
};

it(`PlaceCard component renders correctly`, () => {
  const placeCard = renderer
    .create(<Router>
      <PlaceCard
        id={mock.id}
        title={mock.title}
        image={mock.previewImage}
        type={mock.type}
        price={mock.price}
        rating={mock.rating}
        isPremium={mock.isPremium}
        onMouseMove={() => {}}
      />
    </Router>)
    .toJSON();
  expect(placeCard).toMatchSnapshot();
});
