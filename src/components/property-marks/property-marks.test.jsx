import React from 'react';
import renderer from 'react-test-renderer';
import PropertyMarks from './property-marks.jsx';

it(`PropertyMarks should renders correct`, () => {
  const tree = renderer.create(<PropertyMarks isPremium={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
