import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from './page-header.jsx';

it(`PageHeader component renders correctly after restart`, () => {
  const pageHeader = renderer.create(<PageHeader isMain />).toJSON();
  expect(pageHeader).toMatchSnapshot();
});
