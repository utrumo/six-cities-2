import React from 'react';
import renderer from 'react-test-renderer';
import {PlacesFound} from './places-found.jsx';

it(`PlacesFound renders correctly`, () => {
  const tree = renderer.create(<PlacesFound count={5} city="Moscow" />).toJSON();
  expect(tree).toMatchSnapshot();
});
