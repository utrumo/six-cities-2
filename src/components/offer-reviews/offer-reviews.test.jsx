import React from 'react';
import renderer from 'react-test-renderer';
import OfferReviews from './offer-reviews.jsx';

it(`OfferReviews must correct renders after restart`, () => {
  const tree = renderer.create(<OfferReviews />).toJSON();
  expect(tree).toMatchSnapshot();
});
