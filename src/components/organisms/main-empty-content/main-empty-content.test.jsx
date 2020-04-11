import React from 'react';
import renderer from 'react-test-renderer';
import MainEmptyContent from './main-empty-content.jsx';

it(`Should renders correctly`, () => {
  const tree = renderer
    .create(<MainEmptyContent />)
    .toJSON();
  expect.toMatchSnapshot(tree);
});
