import React from 'react';
import renderer from 'react-test-renderer';
import NearPlaces from './near-places.jsx';

it(`NearPlaces correctly renders after restart`, () => {
  const nearPlaces = renderer.create(<NearPlaces />).toJSON();
  expect(nearPlaces).toMatchSnapshot();
});
