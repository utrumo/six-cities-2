import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ReviewsList} from './reviews-list.jsx';

configure({adapter: new Adapter()});

it(`Must render corrects count of comments`, () => {
  const reviews = [
    {
      id: 1,
      user: {
        id: 17,
        isPro: false,
        name: `Emely`,
        avatarUrl: `/img/avatar-angelina.jpg`
      },
      rating: 4,
      comment: `What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!`,
      date: `2019-11-20T13:49:50.988Z`
    },
    {
      id: 2,
      user: {
        id: 17,
        isPro: false,
        name: `Emely`,
        avatarUrl: `/img/avatar-angelina.jpg`
      },
      rating: 4,
      comment: `What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!`,
      date: `2019-11-20T13:49:50.988Z`
    }
  ];
  const reviewsEls = shallow(<ReviewsList reviews={reviews}/>).find(`ReviewsItem`);
  expect(reviewsEls).toHaveLength(reviews.length);
});

it(`Do not render comments if it's doesn't exist`, () => {
  const reviewsEls = shallow(<ReviewsList reviews={[]}/>).find(`ReviewsItem`);
  expect(reviewsEls).toHaveLength(0);
});
