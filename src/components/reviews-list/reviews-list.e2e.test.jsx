import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewsList from './reviews-list.jsx';
import {MAX_REVIEWS_ON_OFFER_PAGE} from '../../shared/const';

configure({adapter: new Adapter()});

describe(`ReviewsList`, () => {
  it(`Must render no more then ${MAX_REVIEWS_ON_OFFER_PAGE} reviews`, () => {
    const mock = {reviews: [
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
      },
      {
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
    ]};
    const reviewsEls = shallow(<ReviewsList {...mock}/>).find(`ReviewsItem`);
    expect(reviewsEls).toHaveLength(MAX_REVIEWS_ON_OFFER_PAGE);
  });

  it(`Must render reviews from new to old, new in the top of list.`, () => {
    const mock = {reviews: [
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
        date: `2019-12-20T13:49:50.988Z`
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
        date: `2019-04-20T13:49:50.988Z`
      },
      {
        id: 3,
        user: {
          id: 17,
          isPro: false,
          name: `Emely`,
          avatarUrl: `/img/avatar-angelina.jpg`
        },
        rating: 4,
        comment: `What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!`,
        date: `2019-10-20T13:49:50.988Z`
      }
    ]};
    const expectedResult = [
      `2019-04-20T13:49:50.988Z`,
      `2019-10-20T13:49:50.988Z`,
      `2019-12-20T13:49:50.988Z`
    ];
    const reviewsEls = shallow(<ReviewsList {...mock}/>).find(`ReviewsItem`);
    const result = reviewsEls.map((it) => it.prop(`date`));
    expect(result).toEqual(expectedResult);
  });
});
