import React from 'react';
import renderer from 'react-test-renderer';
import PropertyPrice from './property-price.jsx';


it(`PropertyPrice should renders correctly`, () => {
  const tree = renderer.create(<PropertyPrice price={100} />).toJSON();
  expect(tree).toMatchSnapshot();
});
