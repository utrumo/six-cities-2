import React from 'react';
import renderer from 'react-test-renderer';
import {PropertyRating} from './property-rating.jsx';

it(`PropertyRating should renders correctly`, () => {
  const tree = renderer.create(<PropertyRating ratingInPercent={40} rating={3.2} />).toJSON();
  expect(tree).toMatchSnapshot();
});
