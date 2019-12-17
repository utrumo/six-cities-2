import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {PageHeader} from './page-header.jsx';

it(`PageHeader component renders correctly after restart`, () => {
  const pageHeader = renderer.create(
      <Router>
        <PageHeader isMain isAuthorized email="test@test.ru" />
      </Router>
  ).toJSON();
  expect(pageHeader).toMatchSnapshot();
});
