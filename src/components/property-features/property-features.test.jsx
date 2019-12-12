import React from 'react';
import renderer from 'react-test-renderer';
import {PropertyFeatures} from './property-features.jsx';


it(`PropertyFeatures should renders correctly`, () => {
  const tree = renderer.create(<PropertyFeatures bedrooms={3} maxAdults={6} />).toJSON();
  expect(tree).toMatchSnapshot();
});
