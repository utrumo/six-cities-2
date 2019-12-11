import React from 'react';
import renderer from 'react-test-renderer';
import Location from './location.jsx';

it(`Location should renders correctly`, () => {
  const tree = renderer
    .create(<Location location="Moscow" current={true} onClick={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
