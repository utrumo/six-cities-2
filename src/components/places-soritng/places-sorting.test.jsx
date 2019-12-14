import React from 'react';
import renderer from 'react-test-renderer';
import {PlacesSorting} from './places-sorting.jsx';
import {SortingVariants} from '../../shared/const.js';

it(`Should renders correctly`, () => {
  const tree = renderer
    .create(<PlacesSorting
      onChange={jest.fn()}
      value={SortingVariants.TOP_RATED}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
