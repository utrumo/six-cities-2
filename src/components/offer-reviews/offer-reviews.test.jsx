import React from 'react';
import renderer from 'react-test-renderer';
import OfferReviews from './offer-reviews.jsx';

const mock = {reviews: [
  {
    id: 1,
    user: {
      id: 10,
      isPro: true,
      name: `Max`,
      avatarUrl: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/1.jpg`
    },
    rating: 3,
    comment: `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
    date: `2019-11-13T13:49:50.988Z`
  }
]};

it(`OfferReviews must correct renders after restart`, () => {
  const tree = renderer.create(<OfferReviews {...mock} />).toJSON();
  expect(tree).toMatchSnapshot();
});
