import React from 'react';
import renderer from 'react-test-renderer';
import {PropertyName} from './property-name.jsx';

it(`PropertyName should renders correct.`, () => {
  const tree = renderer.create(<PropertyName title="Test title" type="room"/>).toJSON();
  expect(tree).toMatchSnapshot();
});
