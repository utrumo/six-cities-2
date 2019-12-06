import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferReviews from './offer-reviews.jsx';

configure({adapter: new Adapter()});

const mock = {reviews: [
  {
    id: 1,
    user: {
      id: 10,
      isPro: true,
      name: `Max`,
      avatarUrl: `/img/avatar.jpg`
    },
    rating: 3,
    comment: `The house is very good, very happy, hygienic and simple living conditions around it are also very good.`,
    date: `2019-11-13T13:49:50.988Z`
  },
  {
    id: 2,
    user: {
      id: 11,
      isPro: false,
      name: `Alex`,
      avatarUrl: `/img/avatar.jpg`
    },
    rating: 6,
    comment: `I hope to have the opportunity to come back. Thank you.`,
    date: `2019-10-12T13:49:50.988Z`
  }
]};

describe(`OfferReviews`, () => {
  it(`Must render correct reviews count`, () => {
    const counter = shallow(<OfferReviews {...mock}/>).find(`.reviews__amount`);
    expect(counter.text()).toEqual(`${mock.reviews.length}`);
  });
});
