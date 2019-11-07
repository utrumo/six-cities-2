import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const mock = {
  id: 1,
  previewImage: `img/apartment-01.jpg`,
  title: `Beautiful & luxurious apartment at great location`,
  isPremium: true,
  rating: 4.6,
  price: 120,
  type: `Apartment`
};

it(`PlaceCard component renders correctly`, () => {
  const placeCard = renderer
    .create(<PlaceCard
      id={mock.id}
      title={mock.title}
      image={mock.previewImage}
      type={mock.type}
      price={mock.price}
      rating={mock.rating}
      isPremium={mock.isPremium}
      onTitleClick={() => {}}
    />)
    .toJSON();
  expect(placeCard).toMatchSnapshot();
});
