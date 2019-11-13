import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundPage from './not-found-page.jsx';

it(`Must be rendered correctly after restart`, () => {
  const tree = renderer.create(<NotFoundPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
