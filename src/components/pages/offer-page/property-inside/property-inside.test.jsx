import React from 'react';
import renderer from 'react-test-renderer';
import {PropertyInside} from './property-inside.jsx';


it(`PropertyInside should renders correctly`, () => {
  const goods = [`First`, `Second`, `Third`];
  const tree = renderer.create(<PropertyInside goods={goods} />).toJSON();
  expect(tree).toMatchSnapshot();
});
