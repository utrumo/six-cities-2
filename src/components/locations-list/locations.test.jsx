import React from 'react';
import renderer from 'react-test-renderer';
import {LocationsList} from './locations-list.jsx';

it(`LocationsList should renderes correctly`, () => {
  const locations = [`Moscow`, `New York`];
  const tree = renderer
    .create(<LocationsList locations={locations} currentLocation="Moscow" onClick={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
