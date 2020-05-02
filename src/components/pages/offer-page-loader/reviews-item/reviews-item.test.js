import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsItem from './reviews-item.jsx';

const mock = {
  user: {
    id: 17,
    isPro: false,
    name: `Max`,
    avatarUrl: `/img/avatar-max.jpg`,
  },
  rating: 4,
  comment: `What an amazing view!`,
  date: `2019-11-18T20:49:50.988Z`,
};

it(`ReviewsList component renders correctly after restart`, () => {
  const tree = renderer
    .create(<ReviewsItem {...mock} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
