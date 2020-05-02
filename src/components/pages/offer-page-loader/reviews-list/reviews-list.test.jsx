import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewsList} from './reviews-list.jsx';

const reviews = [
  {
    id: 1,
    user: {
      id: 17,
      isPro: false,
      name: `Emely`,
      avatarUrl: `/img/avatar-angelina.jpg`,
    },
    rating: 4,
    comment: `What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!`,
    date: `2019-11-20T13:49:50.988Z`,
  },
];

it(`ReviewsList component renders correctly after restart`, () => {
  const tree = renderer
    .create(<ReviewsList reviews={reviews} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
